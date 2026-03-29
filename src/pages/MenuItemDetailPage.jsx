import { Navigate, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import RelatedMenuItems from '../components/RelatedMenuItems'
import { buildMenuItemJsonLd, formatMenuPrice, getMenuItemBySlug, getRelatedMenuItems } from '../data/menu'
import { siteConfig } from '../data/site'
import { usePageSeo } from '../hooks/usePageSeo'
import { buildMapsLink, buildPhoneHref } from '../utils/commerce'

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
          <p className="product-detail-description">{item.description || 'Món này hiện chưa có mô tả dài, nhưng đã có đủ route để cập nhật nội dung thật sau.'}</p>

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
              <span>Giá hiện tại</span>
              <strong>{formatMenuPrice(item.priceValue)}</strong>
            </div>
            <div className="detail-pill">
              <span>Nhóm món</span>
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
          <p className="eyebrow">Gợi ý trải nghiệm</p>
          <h2>Hợp để ghé quán, gọi món và chia sẻ cùng bạn bè</h2>
          <ul className="detail-list">
            <li>Phù hợp khi muốn khám phá menu BrewBliss sâu hơn thay vì chỉ xem danh sách món.</li>
            <li>Có thể nâng cấp sau bằng tasting notes, size options và ảnh thật từ quán.</li>
            <li>Route chi tiết này đã sẵn để sau này chia sẻ từng món trên social hoặc ads.</li>
          </ul>
        </article>

        <article className="detail-panel">
          <p className="eyebrow">Thông tin quán</p>
          <h2>Khách có thể hành động ngay từ trang chi tiết món</h2>
          <ul className="detail-list">
            <li>{siteConfig.hoursLabel}</li>
            <li>{siteConfig.address}</li>
            <li>
              <a href={buildMapsLink(siteConfig.mapQuery)} target="_blank" rel="noreferrer">
                Mở Google Maps để chỉ đường
              </a>
            </li>
          </ul>
        </article>
      </section>

      <RelatedMenuItems items={relatedItems} />
    </div>
  )
}

export default MenuItemDetailPage
