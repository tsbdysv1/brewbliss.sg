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
          <p className="eyebrow">{category?.name ?? item.categoryName ?? item.category}</p>
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

          <div className="product-detail-meta editorial-product-detail-meta">
            <div className="detail-pill">
              <span>Category</span>
              <strong>{category?.name ?? item.categoryName ?? item.category}</strong>
            </div>
            <div className="detail-pill">
              <span>Serving style</span>
              <strong>{item.categorySlug === 'pastries' ? 'Bakery / pastry' : 'Best served crafted to order'}</strong>
            </div>
          </div>

          <div className="detail-content-grid editorial-detail-content-grid">
            <article className="detail-panel editorial-detail-panel">
              <p className="eyebrow">Ingredients</p>
              <h2>Main ingredients</h2>
              <ul className="detail-list compact-detail-list">
                {item.ingredients.vi.map((entry) => (
                  <li key={`vi-${entry}`}>{entry}</li>
                ))}
              </ul>
            </article>

            <article className="detail-panel editorial-detail-panel">
              <p className="eyebrow">Flavor notes</p>
              <h2>About this item</h2>
              <div className="prose-block editorial-prose-block">
                <p>{item.details.vi}</p>
              </div>
            </article>
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
