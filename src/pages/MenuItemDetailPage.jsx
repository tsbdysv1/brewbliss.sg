import { Link, Navigate, useParams } from 'react-router-dom'
import { useMemo, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import RelatedMenuItems from '../components/RelatedMenuItems'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import {
  buildMenuItemJsonLd,
  formatMenuPrice,
  getMenuCategoryBySlug,
  getMenuItemByCategoryAndSlug,
  getMenuItemBySlug,
  getMenuItemHref,
  getRelatedMenuItems,
} from '../data/menu'
import { siteConfig } from '../data/site'
import { usePageSeo } from '../hooks/usePageSeo'
import { buildPhoneHref } from '../utils/commerce'
import { useCart } from '../context/CartContext'
import { buildCartItemId, PRODUCT_OPTION_GROUPS } from '../utils/cart'

const HIDE_MILK_AND_SUGAR_SLUGS = new Set(['espresso', 'americano', 'orange-espresso-tonic'])
const HIDE_ONLY_MILK_SLUGS = new Set(['cafe-den', 'lemon-honey-matcha-full', 'lemon-honey-matcha-summer', 'coco-matcha'])
const HIDE_MILK_AND_SUGAR_CATEGORY_SLUGS = new Set(['brew-bar', 'hand-drip'])
const HIDE_ONLY_MILK_CATEGORY_SLUGS = new Set(['tea', 'juice'])
const NOTE_ONLY_CATEGORY_SLUGS = new Set(['pastries'])

function MenuItemDetailPage() {
  const { categorySlug, slug } = useParams()
  const { addItem } = useCart()
  const [selectedMilk, setSelectedMilk] = useState(PRODUCT_OPTION_GROUPS.milk[0])
  const [selectedSugar, setSelectedSugar] = useState(PRODUCT_OPTION_GROUPS.sugar[0])
  const [selectedTemperature, setSelectedTemperature] = useState(PRODUCT_OPTION_GROUPS.temperature[0])
  const [note, setNote] = useState('')
  const [didJustAdd, setDidJustAdd] = useState(false)

  const item = categorySlug ? getMenuItemByCategoryAndSlug(categorySlug, slug) : getMenuItemBySlug(slug)
  const category = item?.categorySlug ? getMenuCategoryBySlug(item.categorySlug) : null
  const resolvedCategorySlug = item?.categorySlug ?? categorySlug ?? null
  const isNoteOnlyItem = resolvedCategorySlug ? NOTE_ONLY_CATEGORY_SLUGS.has(resolvedCategorySlug) : false
  const shouldHideMilk = isNoteOnlyItem || (resolvedCategorySlug ? HIDE_MILK_AND_SUGAR_CATEGORY_SLUGS.has(resolvedCategorySlug) || HIDE_ONLY_MILK_CATEGORY_SLUGS.has(resolvedCategorySlug) : false) || HIDE_MILK_AND_SUGAR_SLUGS.has(item?.slug) || HIDE_ONLY_MILK_SLUGS.has(item?.slug)
  const shouldHideSugar = isNoteOnlyItem || (resolvedCategorySlug ? HIDE_MILK_AND_SUGAR_CATEGORY_SLUGS.has(resolvedCategorySlug) : false) || HIDE_MILK_AND_SUGAR_SLUGS.has(item?.slug)
  const shouldHideTemperature = isNoteOnlyItem
  const visibleOptionSections = [!shouldHideMilk, !shouldHideSugar, !shouldHideTemperature].filter(Boolean).length

  usePageSeo({
    title: item ? `${item.name} | ${siteConfig.brandName}` : `Menu item | ${siteConfig.brandName}`,
    description: item ? item.description || siteConfig.seo.description : siteConfig.seo.description,
    jsonLd: item ? buildMenuItemJsonLd(item) : siteConfig.defaultJsonLd,
    pathname: item ? getMenuItemHref(item) : '/menu',
    image: item ? item.image : siteConfig.seo.defaultImage,
  })

  if (!item) {
    return <Navigate to="/khong-tim-thay" replace />
  }

  if (categorySlug && item.categorySlug !== categorySlug) {
    return <Navigate to={getMenuItemHref(item)} replace />
  }

  const relatedItems = getRelatedMenuItems(item, 4)

  const cartPayload = useMemo(() => ({
    slug: item.slug,
    name: item.name,
    image: item.image,
    priceValue: item.priceValue,
    quantity: 1,
    options: {
      milk: shouldHideMilk ? '' : selectedMilk,
      sugar: shouldHideSugar ? '' : selectedSugar,
      temperature: shouldHideTemperature ? '' : selectedTemperature,
      note: note.trim(),
    },
  }), [item.image, item.name, item.priceValue, item.slug, note, selectedMilk, selectedSugar, selectedTemperature, shouldHideMilk, shouldHideSugar, shouldHideTemperature])

  const handleAddToCart = () => {
    addItem({
      ...cartPayload,
      id: buildCartItemId(cartPayload),
    }, `${item.name} đã được thêm vào cart`)
    setDidJustAdd(true)
    window.setTimeout(() => setDidJustAdd(false), 1800)
  }

  return (
    <div className="page-shell product-detail-shell">
      <SiteHeader />

      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Menu', to: '/menu' },
          { label: category?.name ?? item.categoryName ?? item.category },
          { label: item.name },
        ]}
      />

      <section className="section-block product-detail-layout editorial-product-detail-layout">
        <div className="product-detail-media editorial-product-detail-media">
          <img src={item.image} alt={item.name} className="product-detail-image editorial-product-detail-image" />
        </div>

        <div className="product-detail-main editorial-product-detail-main">
          <h1>{item.name}</h1>

          <div className="product-detail-price-row">
            <strong className="product-detail-price">{formatMenuPrice(item.priceValue)}</strong>
          </div>

          <p className="product-detail-description">
            {item.description || 'Món này hiện chưa có mô tả dài, nhưng đã có đủ route để cập nhật nội dung thật sau.'}
          </p>

          {item.badges?.length ? (
            <div className="product-badge-row" aria-label="Điểm nổi bật của món">
              {item.badges.map((badge) => (
                <span key={badge} className="product-badge">
                  {badge}
                </span>
              ))}
            </div>
          ) : null}

          <div className="product-customization-flow" aria-label="Tuỳ chọn món uống">
            {!shouldHideMilk ? (
              <section className="product-option-section">
                <h2>Lựa chọn sữa</h2>
                <div className="product-option-divider" aria-hidden="true" />
                <div className="product-option-button-row">
                  {PRODUCT_OPTION_GROUPS.milk.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`product-option-button${selectedMilk === option ? ' is-selected' : ''}`}
                      onClick={() => setSelectedMilk(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </section>
            ) : null}

            {!shouldHideSugar ? (
              <section className="product-option-section">
                <h2>Đường</h2>
                <div className="product-option-divider" aria-hidden="true" />
                <div className="product-option-button-row">
                  {PRODUCT_OPTION_GROUPS.sugar.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`product-option-button${selectedSugar === option ? ' is-selected' : ''}`}
                      onClick={() => setSelectedSugar(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </section>
            ) : null}

            {!shouldHideTemperature ? (
              <section className="product-option-section">
                <h2>Lựa chọn</h2>
                <div className="product-option-divider" aria-hidden="true" />
                <div className="product-option-button-row">
                  {PRODUCT_OPTION_GROUPS.temperature.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`product-option-button${selectedTemperature === option ? ' is-selected' : ''}`}
                      onClick={() => setSelectedTemperature(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </section>
            ) : null}

            <section className={`product-note-section${visibleOptionSections === 0 ? ' is-standalone' : ''}`}>
              <label htmlFor="product-note" className="product-note-label">Note:</label>
              <textarea
                id="product-note"
                className="product-note-input"
                placeholder="Note:"
                rows="4"
                value={note}
                onChange={(event) => setNote(event.target.value)}
              />
            </section>
          </div>

          <div className="product-detail-actions">
            {siteConfig.features.cartEnabled ? (
              <>
                <button type="button" className={`solid-button add-to-cart-button${didJustAdd ? ' is-success' : ''}`} onClick={handleAddToCart}>
                  {didJustAdd ? 'Added to cart' : 'Add to cart'}
                </button>
                <Link to="/cart" className="outline-button inline-return-link">
                  View cart
                </Link>
              </>
            ) : null}
            <Link to="/menu" className="outline-button inline-return-link">
              ← Back to menu
            </Link>
            <a href={buildPhoneHref(siteConfig.phoneNumber)} className="outline-button">
              Contact store
            </a>
            <a href={siteConfig.instagramLink} target="_blank" rel="noreferrer" className="outline-button">
              Instagram
            </a>
          </div>
        </div>
      </section>

      <RelatedMenuItems items={relatedItems} />

      <SiteFooter />
    </div>
  )
}

export default MenuItemDetailPage
