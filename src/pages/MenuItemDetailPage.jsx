import { Link, Navigate, useParams } from 'react-router-dom'
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

function MenuItemDetailPage() {
  const { categorySlug, slug } = useParams()

  const item = categorySlug ? getMenuItemByCategoryAndSlug(categorySlug, slug) : getMenuItemBySlug(slug)
  const category = item?.categorySlug ? getMenuCategoryBySlug(item.categorySlug) : null

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
            <section className="product-option-section">
              <h2>Lựa chọn sữa</h2>
              <div className="product-option-divider" aria-hidden="true" />
              <div className="product-option-button-row">
                <button type="button" className="product-option-button">Sữa thanh trùng</button>
                <button type="button" className="product-option-button">Sữa yến mạch</button>
              </div>
            </section>

            <section className="product-option-section">
              <h2>Đường</h2>
              <div className="product-option-divider" aria-hidden="true" />
              <div className="product-option-button-row">
                <button type="button" className="product-option-button">Có đường</button>
                <button type="button" className="product-option-button">Không đường</button>
              </div>
            </section>

            <section className="product-option-section">
              <h2>Lựa chọn</h2>
              <div className="product-option-divider" aria-hidden="true" />
              <div className="product-option-button-row">
                <button type="button" className="product-option-button">Đá</button>
                <button type="button" className="product-option-button">Nóng</button>
              </div>
            </section>

            <section className="product-note-section">
              <label htmlFor="product-note" className="product-note-label">Note:</label>
              <textarea
                id="product-note"
                className="product-note-input"
                placeholder="Note:"
                rows="4"
              />
            </section>
          </div>

          <div className="product-detail-actions">
            <Link to="/menu" className="outline-button inline-return-link">
              ← Back to menu
            </Link>
            <a href={buildPhoneHref(siteConfig.phoneNumber)} className="solid-button">
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
