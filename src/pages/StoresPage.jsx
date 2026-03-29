import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { siteConfig } from '../data/site'
import { stores } from '../data/stores'
import { usePageSeo } from '../hooks/usePageSeo'
import { buildMapsLink, buildPhoneHref } from '../utils/commerce'

function StoresPage() {
  const activeStore = stores[0]

  usePageSeo({
    title: `Cửa Hàng | ${siteConfig.brandName}`,
    description: `Tìm cửa hàng ${siteConfig.brandName} và xem địa chỉ, giờ mở cửa, bản đồ để ghé quán nhanh hơn.`,
    jsonLd: siteConfig.defaultJsonLd,
    pathname: '/cua-hang',
    image: siteConfig.seo.defaultImage,
  })

  return (
    <div className="page-shell">
      <SiteHeader />

      <section className="section-block store-page-shell">
        <div className="store-page-sidebar">
          <p className="eyebrow sidebar-eyebrow">Tìm kiếm cửa hàng</p>
          <h1>Cửa Hàng BrewBliss</h1>
          <div className="store-list">
            {stores.map((store) => (
              <article key={store.slug} className="store-list-item active-store-item">
                <div>
                  <strong>{store.cityLabel}</strong>
                  <p>{store.districtLabel}</p>
                </div>
                <span className="store-arrow">›</span>
              </article>
            ))}
          </div>

          <div className="store-address-summary">
            <p className="card-label">Địa chỉ hiện tại</p>
            <strong>{activeStore.address}</strong>
            <p>{activeStore.hoursLabel}</p>
            <div className="menu-card-actions">
              <a href={buildMapsLink(activeStore.mapQuery)} target="_blank" rel="noreferrer" className="solid-button">
                Mở Google Maps
              </a>
              <a href={buildPhoneHref(activeStore.phoneNumber)} className="outline-button">
                Gọi quán
              </a>
            </div>
          </div>
        </div>

        <div className="store-page-map-wrap">
          <div className="store-map-card">
            <div className="store-map-meta">
              <strong>{activeStore.name}</strong>
              <p>{activeStore.address}</p>
            </div>
            <iframe
              title={`Bản đồ ${activeStore.name}`}
              src={activeStore.embedMapUrl}
              className="store-map-frame"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export default StoresPage
