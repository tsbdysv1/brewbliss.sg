import HeroSlider from '../components/HeroSlider'
import MenuCategorySection from '../components/MenuCategorySection'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { menuCategories, menuExtras } from '../data/menu'
import { categories, heroSlides, siteConfig } from '../data/site'
import { usePageSeo } from '../hooks/usePageSeo'
import { buildPhoneHref } from '../utils/commerce'

function HomePage() {
  const featuredCategory = menuCategories.find((category) => category.slug === 'featured')
  const visibleCategories = menuCategories.filter((category) => category.slug !== 'featured')

  usePageSeo({
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    jsonLd: siteConfig.defaultJsonLd,
    pathname: '/',
    image: siteConfig.seo.defaultImage,
  })

  return (
    <div className="page-shell">
      <SiteHeader />

      <HeroSlider slides={heroSlides} autoPlayMs={5000} />

      <header className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Coffee shop in Sai Gon</p>
            <h2>{siteConfig.heroTitle}</h2>
            <p className="hero-text">{siteConfig.heroDescription}</p>
            <div className="hero-cta-row">
              <a href="#menu" className="solid-button">
                Xem menu
              </a>
              <a href={siteConfig.mapLink} target="_blank" rel="noreferrer" className="outline-button">
                Mở Google Maps
              </a>
            </div>
            <ul className="trust-points">
              {siteConfig.trustPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <aside className="hero-card">
            <p className="card-label">BrewBliss vibe</p>
            <h3>Cam ấm, cafe hiện đại, menu đủ rộng để đi một mình hay hẹn bạn bè đều hợp</h3>
            <p>
              Từ espresso, cold brew, Vietnamese coffee đến matcha, tea và pastry, BrewBliss có đủ
              chất liệu để trở thành một điểm hẹn vừa chill vừa dễ quay lại ở trung tâm quận 1.
            </p>
            <div className="location-stack">
              <img src="/brewbliss-wordmark.svg" alt="BrewBliss wordmark" className="hero-logo-preview" />
              <strong>{siteConfig.address}</strong>
              <p>{siteConfig.hoursLabel}</p>
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Vì sao BrewBliss dễ nhớ</p>
            <h2>Một website cho quán cafe nên giúp người ta vừa cảm vibe, vừa xem menu thật nhanh</h2>
          </div>
          <div className="category-grid">
            {categories.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <div id="mon-noi-bat">{featuredCategory ? <MenuCategorySection category={featuredCategory} /> : null}</div>

        <section className="section-block readiness-section">
          <div className="section-heading">
            <p className="eyebrow">Content-ready structure</p>
            <h2>{siteConfig.contentReadiness.title}</h2>
            <p className="section-supporting-text">{siteConfig.contentReadiness.description}</p>
          </div>
          <ul className="readiness-checklist">
            {siteConfig.contentReadiness.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <div id="menu">
          {visibleCategories.map((category) => (
            <MenuCategorySection key={category.slug} category={category} />
          ))}
        </div>

        <section className="section-block extras-section">
          <div className="section-heading">
            <p className="eyebrow">Menu extras</p>
            <h2>Những tuỳ chọn thêm dễ áp dụng ngay trên quầy</h2>
          </div>
          <div className="extras-grid">
            {menuExtras.map((item) => (
              <article key={item.label} className="info-card compact-card">
                <h3>{item.label}</h3>
                <p>{new Intl.NumberFormat('vi-VN').format(item.priceValue)}đ</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block contact-section" id="lien-he">
          <div className="contact-card contact-card-enhanced">
            <div>
              <p className="eyebrow">Liên hệ & ghé quán</p>
              <h2>Chọn cách phù hợp nhất để kết nối với BrewBliss</h2>
              <p>
                Nếu đang ở gần quận 1, mở bản đồ để ghé quán. Nếu cần hỏi nhanh, gọi trực tiếp.
                Nếu muốn xem vibe và món mới, Instagram và Facebook đang là các kênh rõ ràng nhất.
              </p>
            </div>
            <div className="contact-action-grid">
              <a href={buildPhoneHref(siteConfig.phoneNumber)} className="contact-action-card primary-card">
                <span className="contact-action-label">Gọi quán</span>
                <strong>{siteConfig.phoneNumber}</strong>
              </a>
              <a
                href={siteConfig.mapLink}
                target="_blank"
                rel="noreferrer"
                className="contact-action-card"
              >
                <span className="contact-action-label">Chỉ đường</span>
                <strong>Mở Google Maps</strong>
              </a>
              <a href={siteConfig.instagramLink} target="_blank" rel="noreferrer" className="contact-action-card">
                <span className="contact-action-label">Instagram</span>
                <strong>@brewbliss.sg</strong>
              </a>
              <a href={siteConfig.facebookLink} target="_blank" rel="noreferrer" className="contact-action-card">
                <span className="contact-action-label">Facebook</span>
                <strong>BrewBliss Coffee</strong>
              </a>
              <div className="contact-action-card muted-card">
                <span className="contact-action-label">Zalo</span>
                <strong>{siteConfig.zaloLabel}</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default HomePage
