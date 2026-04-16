import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import SignatureCollectionSection from '../components/SignatureCollectionSection'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { menuExtras } from '../data/menu'
import { categories, heroSlides, siteConfig } from '../data/site'
import { usePageSeo } from '../hooks/usePageSeo'
import { buildPhoneHref } from '../utils/commerce'

const brewblissExperienceTabs = [
  {
    id: 'espresso-bar',
    menuSectionId: 'espresso-bar',
    label: 'Espresso Bar',
    description:
      'Espresso Bar của BrewBliss được xây để giữ trọn sự gọn gàng và chính xác trong từng shot. Từ espresso nguyên bản đến latte, cappuccino hay các ly signature, mọi thứ đều hướng tới cảm giác cân bằng, hiện đại và dễ quay lại mỗi ngày.',
    image: '/hero/hero-slide-2.jpg',
    imageAlt: 'BrewBliss espresso-based drink',
  },
  {
    id: 'vietnamese-coffee-bar',
    menuSectionId: 'vietnamese-coffee',
    label: 'Vietnamese Coffee Bar',
    description:
      'Cà phê Việt Nam tại BrewBliss không chỉ là một thức uống, mà là một phần của văn hoá và cảm xúc. Từ những hạt cà phê được chọn lọc kỹ lưỡng, rang xay đậm đà, chúng tôi mang đến hương vị đặc trưng – mạnh mẽ nhưng vẫn tinh tế, quen thuộc nhưng luôn có chiều sâu.',
    image: '/images/signature-collection/uploads-apr15/vietnamese-coffee-bar.jpg',
    imageAlt: 'BrewBliss Vietnamese coffee experience',
  },
  {
    id: 'brew-bar',
    menuSectionId: 'brew-bar',
    label: 'Brew Bar',
    description:
      'Brew Bar là nơi những món uống mượt, nhẹ và có chiều sâu được thể hiện rõ nhất. Từ cold brew đến các công thức ủ riêng, BrewBliss giữ tinh thần clean, sáng vị và phù hợp cho những ai thích cà phê theo hướng thư thả, tinh gọn hơn.',
    image: '/hero/hero-slide-4.png',
    imageAlt: 'BrewBliss brew bar beans and coffee',
  },
  {
    id: 'hand-drip',
    menuSectionId: 'hand-drip',
    label: 'Hand Drip',
    description:
      'Hand Drip tại BrewBliss tập trung vào trải nghiệm chậm và chỉn chu. Mỗi ly được pha với nhịp vừa đủ để hương thơm, độ ngọt và hậu vị hiện ra rõ ràng, tạo nên một khoảng dừng nhẹ nhàng đúng với tinh thần mà quán muốn mang lại.',
    image: '/hero/hero-slide-3.jpg',
    imageAlt: 'BrewBliss hand drip style coffee setting',
  },
  {
    id: 'matcha',
    menuSectionId: 'matcha',
    label: 'Matcha',
    description:
      'Matcha là một mảng rất riêng của BrewBliss: mềm, xanh, tinh tế và đủ nổi bật giữa menu cà phê. Từ matcha latte đến các biến tấu theo mùa, quán giữ cảm giác mượt, thanh và dễ uống nhưng vẫn có điểm nhấn rõ ràng.',
    image: '/images/signature-collection/uploads-apr15/matcha-tab.jpg',
    imageAlt: 'BrewBliss matcha and warm cafe atmosphere',
  },
  {
    id: 'tea',
    menuSectionId: 'tea',
    label: 'Tea',
    description:
      'Tea được xây như một lựa chọn nhẹ nhàng hơn nhưng vẫn có cá tính riêng. Trà trái cây, trà thanh vị hay các món theo mùa đều hướng tới cảm giác tươi, cân bằng và phù hợp cho cả những buổi hẹn nhanh lẫn lúc cần ngồi lâu một chút.',
    image: '/hero/hero-slide-1.jpg',
    imageAlt: 'BrewBliss tea and storefront ambiance',
  },
  {
    id: 'other-drinks',
    menuSectionId: 'other-drinks',
    label: 'Other Drinks',
    description:
      'Ngoài cà phê và trà, BrewBliss còn có những lựa chọn giúp menu trở nên đầy đặn và dễ chiều nhiều gu hơn. Đó có thể là các món đá xay, tonic, chocolate hay đồ uống theo mùa — tất cả đều giữ cùng một tinh thần gọn, đẹp và dễ nhớ.',
    image: '/hero/hero-slide-2.jpg',
    imageAlt: 'BrewBliss other drinks selection',
  },
]

function HomePage() {
  const [activeExperienceTab, setActiveExperienceTab] = useState('vietnamese-coffee-bar')
  const activeExperienceContent = useMemo(
    () =>
      brewblissExperienceTabs.find((tab) => tab.id === activeExperienceTab) ?? brewblissExperienceTabs[1],
    [activeExperienceTab],
  )

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
            <h1>
              <span>Chào bạn,</span>
              <span>hôm nay bạn cảm thấy thế nào?</span>
            </h1>
            <div className="editorial-hero-body">
              <p>Nếu bạn đang cần một nơi để “chill”, BrewBliss luôn ở đây.</p>
              <p>
                Một ly cà phê, một chút âm nhạc, và vài phút nhẹ nhàng giữa nhịp sống vội vã. Dù là
                lần đầu hay đã quen thuộc, hy vọng bạn sẽ tìm thấy ở đây những cảm xúc thật đẹp.
              </p>
              <p>Brew your coffee, brew your happines.</p>
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
        <section className="brewbliss-experience-section" aria-labelledby="brewbliss-experience-title">
          <div className="brewbliss-experience-box">
            <h2 id="brewbliss-experience-title">BrewBliss tụi mình có</h2>

            <div className="brewbliss-experience-tabs-wrap">
              <div className="brewbliss-experience-tabs" role="tablist" aria-label="BrewBliss menu categories">
                {brewblissExperienceTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={tab.id === activeExperienceTab}
                    className={`brewbliss-experience-tab${tab.id === activeExperienceTab ? ' is-active' : ''}`}
                    onClick={() => setActiveExperienceTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="brewbliss-experience-tabs-indicator" aria-hidden="true">
                <span>→</span>
              </div>
            </div>

            <div className="brewbliss-experience-content">
              <div className="brewbliss-experience-copy">
                <p>{activeExperienceContent.description}</p>
                <Link
                  to={`/menu#${activeExperienceContent.menuSectionId}`}
                  className="brewbliss-experience-link"
                  aria-label={`Tìm hiểu thêm về ${activeExperienceContent.label} trong menu`}
                >
                  Tìm hiểu
                </Link>
              </div>

              <div className="brewbliss-experience-media">
                <img src={activeExperienceContent.image} alt={activeExperienceContent.imageAlt} />
              </div>
            </div>
          </div>
        </section>
        <div id="mon-noi-bat">
          <SignatureCollectionSection />
        </div>

        <section className="section-block home-menu-cta-section" aria-labelledby="home-menu-cta-title">
          <div className="section-heading home-menu-cta-heading">
            <p className="eyebrow">Curated on home</p>
            <h2 id="home-menu-cta-title">Muốn xem đầy đủ menu của BrewBliss?</h2>
            <p className="section-supporting-text">
              Trang chủ giữ lại những phần chọn lọc để mọi thứ gọn, rõ và premium hơn. Toàn bộ coffee,
              matcha, tea, pastry và các món còn lại hiện nằm đầy đủ trong trang Menu riêng.
            </p>
          </div>
          <div className="hero-cta-row">
            <Link to="/menu" className="brewbliss-experience-link" aria-label="Xem menu đầy đủ của BrewBliss">
              Xem menu
            </Link>
          </div>
        </section>

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
