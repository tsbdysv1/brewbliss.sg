import { Navigate, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import RelatedMenuItems from '../components/RelatedMenuItems'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { buildMenuItemJsonLd, formatMenuPrice, getMenuItemBySlug, getRelatedMenuItems } from '../data/menu'
import { siteConfig } from '../data/site'
import { usePageSeo } from '../hooks/usePageSeo'
import { buildPhoneHref } from '../utils/commerce'

function MenuItemDetailPage() {
  const { slug } = useParams()
  const item = getMenuItemBySlug(slug)

  usePageSeo({
    title: item ? `${item.name} | ${siteConfig.brandName}` : `Menu item | ${siteConfig.brandName}`,
    description: item ? item.description || siteConfig.seo.description : siteConfig.seo.description,
    jsonLd: item ? buildMenuItemJsonLd(item) : siteConfig.defaultJsonLd,
    pathname: item ? `/menu/${item.slug}` : '/menu',
    image: item ? item.image : siteConfig.seo.defaultImage,
  })

  if (!item) {
    return <Navigate to="/khong-tim-thay" replace />
  }

  const relatedItems = getRelatedMenuItems(item)

  return (
    <div className="page-shell product-detail-shell">
      <SiteHeader />

      <Breadcrumbs
        items={[
          { label: 'Trang chủ', to: '/' },
          { label: 'Menu', to: '/#menu' },
          { label: item.name },
        ]}
      />

      <section className="section-block product-detail-layout">
        <div className="product-detail-media">
          <img src={item.image} alt={item.name} className="product-detail-image" />
        </div>

        <div className="product-detail-main">
          <p className="eyebrow">{item.category}</p>
          <h1>{item.name}</h1>
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

          <div className="product-detail-meta">
            <div className="detail-pill">
              <span>Giá hiện tại · Current price</span>
              <strong>{formatMenuPrice(item.priceValue)}</strong>
            </div>
            <div className="detail-pill">
              <span>Nhóm món · Category</span>
              <strong>{item.category}</strong>
            </div>
          </div>

          <div className="product-detail-actions">
            <a href={buildPhoneHref(siteConfig.phoneNumber)} className="solid-button">
              Gọi quán
            </a>
            <a href={siteConfig.instagramLink} target="_blank" rel="noreferrer" className="outline-button">
              Xem Instagram
            </a>
          </div>

          <a href="/#menu" className="outline-button inline-return-link">
            ← Quay lại menu
          </a>
        </div>
      </section>

      <section className="section-block detail-content-grid">
        <article className="detail-panel">
          <p className="eyebrow">Ingredients · Thành phần</p>
          <h2>Những thành phần chính tạo nên món này</h2>
          <div className="detail-language-block">
            <h3>Tiếng Việt</h3>
            <ul className="detail-list">
              {item.ingredients.vi.map((entry) => (
                <li key={`vi-${entry}`}>{entry}</li>
              ))}
            </ul>
          </div>
          <div className="detail-language-block">
            <h3>English</h3>
            <ul className="detail-list">
              {item.ingredients.en.map((entry) => (
                <li key={`en-${entry}`}>{entry}</li>
              ))}
            </ul>
          </div>
        </article>

        <article className="detail-panel">
          <p className="eyebrow">More about this drink · Mô tả thêm</p>
          <h2>Giải thích ngắn gọn để khách Việt và khách nước ngoài đều dễ hiểu</h2>
          <div className="detail-language-block prose-block">
            <h3>Tiếng Việt</h3>
            <p>{item.details.vi}</p>
          </div>
          <div className="detail-language-block prose-block">
            <h3>English</h3>
            <p>{item.details.en}</p>
          </div>
        </article>
      </section>

      <RelatedMenuItems items={relatedItems} />

      <SiteFooter />
    </div>
  )
}

export default MenuItemDetailPage
