import { Link } from 'react-router-dom'
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

      <section className="editorial-hero-section">
        <div className="editorial-hero-grid">
          <div className="editorial-hero-copy">
            <h1>Chào bạn, hôm nay bạn cảm thấy như thế nào?</h1>
            <div className="editorial-hero-body">
              <p>Nếu bạn đang cần một nơi để “chill”, BrewBliss luôn ở đây.</p>
              <p>Một ly cà phê, một chút âm nhạc, và vài phút nhẹ nhàng giữa nhịp sống vội vã.</p>
              <p>Dù là lần đầu hay đã quen thuộc, hy vọng bạn sẽ tìm thấy ở đây những cảm xúc thật đẹp.</p>
              <p>Brew your coffee, brew your happiness.</p>
            </div>
          </div>

          <Link to="/store" className="editorial-address-box" aria-label="Xem trang cửa hàng BrewBliss">
            <strong>BrewBliss Coffee</strong>
            <p>
              21 Nguyễn Trung Trực
              <br />
              Phường Bến Thành
              <br />
              Thành Phố Hồ Chí Minh
            </p>
            <p>
              Open Hours: 7:00AM - 10:00 PM
              <br />
              Everyday
            </p>
          </Link>
        </div>
      </section>

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
