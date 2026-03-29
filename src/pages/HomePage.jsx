import MenuCategorySection from '../components/MenuCategorySection'
import { menuCategories, menuExtras } from '../data/menu'
import { categories, siteConfig } from '../data/site'
import { usePageSeo } from '../hooks/usePageSeo'
import { buildMapsLink, buildPhoneHref } from '../utils/commerce'

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
      <header className="hero-section">
        <nav className="topbar">
          <div className="brand-lockup">
            <div className="brand-mark brewbliss-mark" aria-hidden="true">
              <span className="steam steam-one"></span>
              <span className="steam steam-two"></span>
              <span className="cup-base"></span>
            </div>
            <div>
              <p className="brand-kicker">{siteConfig.brandName}</p>
              <h1>{siteConfig.headline}</h1>
            </div>
          </div>

          <div className="quick-actions">
            <a href={buildPhoneHref(siteConfig.phoneNumber)} className="outline-button">
              Gọi quán
            </a>
            <a href={siteConfig.instagramLink} target="_blank" rel="noreferrer" className="solid-button">
              Instagram
            </a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Coffee shop in Sai Gon</p>
            <h2>{siteConfig.heroTitle}</h2>
            <p className="hero-text">{siteConfig.heroDescription}</p>
            <div className="hero-cta-row">
              <a href="#menu" className="solid-button">
                Xem menu
              </a>
              <a href={buildMapsLink(siteConfig.mapQuery)} target="_blank" rel="noreferrer" className="outline-button">
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

        {featuredCategory ? <MenuCategorySection category={featuredCategory} /> : null}

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
          <div className="contact-card">
            <div>
              <p className="eyebrow">Liên hệ & ghé quán</p>
              <h2>Đã có đủ thông tin cơ bản để khách tìm quán, gọi quán hoặc xem social ngay</h2>
              <p>
                Zalo hiện để placeholder theo yêu cầu. Các CTA đang ưu tiên phone, Instagram,
                Facebook và Google Maps để khách truy cập dễ hành động ngay.
              </p>
            </div>
            <div className="contact-actions">
              <a href={siteConfig.instagramLink} target="_blank" rel="noreferrer" className="solid-button">
                Instagram
              </a>
              <a href={siteConfig.facebookLink} target="_blank" rel="noreferrer" className="outline-button">
                Facebook
              </a>
              <a href={buildPhoneHref(siteConfig.phoneNumber)} className="outline-button">
                {siteConfig.phoneNumber}
              </a>
              <a href={buildMapsLink(siteConfig.mapQuery)} target="_blank" rel="noreferrer" className="outline-button">
                Chỉ đường
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage
