import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { siteConfig } from '../data/site'
import { stores } from '../data/stores'
import { usePageSeo } from '../hooks/usePageSeo'
import { buildPhoneHref } from '../utils/commerce'

function StoresPage() {
  const activeStore = stores[0]

  usePageSeo({
    title: `Store | ${siteConfig.brandName}`,
    description: `Tìm store của ${siteConfig.brandName} và xem địa chỉ, giờ mở cửa để ghé quán nhanh hơn.`,
    jsonLd: siteConfig.defaultJsonLd,
    pathname: '/cua-hang',
    image: siteConfig.seo.defaultImage,
  })

  return (
    <div className="page-shell">
      <SiteHeader />

      <section className="section-block store-editorial-section" aria-labelledby="store-editorial-title">
        <div className="store-editorial-grid">
          <div className="store-editorial-copy">
            <h1 id="store-editorial-title" className="store-editorial-title">
              <span>BrewBliss</span>
              <span>Nguyễn Trung Trực</span>
            </h1>

            <div className="store-editorial-info">
              <p className="store-editorial-label">address:</p>
              <p>
                21 Nguyễn Trung Trực, Phường Bến Thành,
                <br />
                Thành Phố Hồ Chí Minh, Việt Nam
              </p>

              <p className="store-editorial-label">Opening Hours:</p>
              <p>
                7:00–22:00
                <br />
                Everyday.
              </p>
            </div>

            <div className="store-editorial-actions">
              <a href={activeStore.mapLink} target="_blank" rel="noreferrer" className="solid-button">
                Mở Google map
              </a>
              <a href={buildPhoneHref(activeStore.phoneNumber)} className="outline-button">
                Liên hệ quán
              </a>
            </div>
          </div>

          <div className="store-editorial-image-wrap" aria-label={`${activeStore.name} featured image`}>
            <img src={activeStore.featuredImage} alt={`${activeStore.name} - Nguyễn Trung Trực`} className="store-editorial-image" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export default StoresPage
