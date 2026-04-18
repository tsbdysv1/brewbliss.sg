import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import SignatureCollectionSection from '../components/SignatureCollectionSection'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { heroSlides, siteConfig } from '../data/site'
import { usePageSeo } from '../hooks/usePageSeo'

const brewblissExperienceTabs = [
  {
    id: 'espresso-bar',
    menuSectionId: 'espresso-bar',
    label: 'Espresso Bar',
    description:
      'Ngày mới tràn đầy năng lượng — bắt đầu bằng một shot espresso tại BrewBliss.\n100% hạt Arabica với hậu vị chua thanh, ngọt nhẹ và thoảng hương trái cây.\nTừ espresso nguyên bản đến latte hay cappuccino, mỗi ly đều gọn gàng, tinh tế — đúng nhịp sống bạn đang theo đuổi.\nMột lựa chọn nhỏ, nhưng đủ để khởi đầu ngày mới theo cách rất riêng.',
    image: '/images/signature-collection/uploads-apr15/espresso-bar-tab.jpg',
    imageAlt: 'BrewBliss espresso-based drink',
  },
  {
    id: 'vietnamese-coffee-bar',
    menuSectionId: 'vietnamese-coffee',
    label: 'Vietnamese Coffee Bar',
    description:
      'Giữa nhịp sống hối hả, có những hôm chỉ muốn quay về với những cảm xúc quen thuộc nhất, như một ly cà phê sữa đá trước cổng trường đại học. Với 100% hạt Robusta đậm vị, chút ngọt, chút đắng, điểm nhẹ vị chua — Cafe Việt Nam tại BrewBliss như một buổi sáng rất Sài Gòn.\nKhông cần cầu kỳ, chỉ cần đúng vị 🇻🇳',
    image: '/images/signature-collection/uploads-apr15/vietnamese-coffee-bar.jpg',
    imageAlt: 'BrewBliss Vietnamese coffee experience',
  },
  {
    id: 'brew-bar',
    menuSectionId: 'brew-bar',
    label: 'Brew Bar',
    description:
      'Nếu hôm nay bạn muốn thử một điều gì đó “khác đi một chút”…\nKhông quá mạnh mẽ như espresso, không quá quen thuộc như cà phê đen đá — Brew Bar là nơi những hương vị được kể theo cách chậm hơn, sâu hơn.\nMỗi ly cà phê là một hành trình nhỏ — nhẹ nhàng, tinh tế và đầy bất ngờ.\nDành cho những lúc bạn muốn trải nghiệm, không chỉ đơn giản là uống cà phê.',
    image: '/hero/hero-slide-4.png',
    imageAlt: 'BrewBliss brew bar beans and coffee',
  },
  {
    id: 'hand-drip',
    menuSectionId: 'hand-drip',
    label: 'Hand Drip',
    description:
      'Có những ngày bạn cần một khoảng lặng.\nKhông quá vội, không quá mạnh — chỉ là một ly cà phê được pha chậm rãi, từng giọt một.\nHand Drip không phải để uống cho nhanh, mà để cảm nhận — như một hành trình trải nghiệm nghệ thuật pha cà phê tại BrewBliss.\nNếu bạn muốn cùng BrewBliss chia sẻ một chút kỷ niệm, đây sẽ là lựa chọn dành cho bạn',
    image: '/images/signature-collection/uploads-apr15/hand-drip-tab.jpg',
    imageAlt: 'BrewBliss hand drip style coffee setting',
  },
  {
    id: 'matcha',
    menuSectionId: 'matcha',
    label: 'Matcha',
    description:
      'Tỉnh táo nhưng không làm tim đập nhanh như cà phê — một sự kích thích nhẹ nhàng và chậm rãi.\nMatcha luôn mang lại cảm giác dịu lại, không quá gắt, không quá ồn ào.\nMột chút béo, một chút thơm, một chút "zen" giữa thành phố đông đúc.',
    image: '/images/signature-collection/uploads-apr15/matcha-tab.jpg',
    imageAlt: 'BrewBliss matcha and warm cafe atmosphere',
  },
  {
    id: 'tea',
    menuSectionId: 'tea',
    label: 'Tea',
    description:
      'Đã có quá nhiều vị đắng cho ngày hôm nay — tạm gác lại những bảng check calo ngoằn ngoèo.\nThưởng thức một ly trà trái cây ngọt dịu từ trái cây tươi, đủ để refresh lại cả ngày dài.\nTrà tại BrewBliss là những hương vị gần gũi nhưng được làm mới lại — Một lựa chọn nhẹ nhàng nhưng không hề “nhạt” 🍃',
    image: '/images/signature-collection/uploads-apr15/tab-tea.jpg',
    imageAlt: 'BrewBliss tea — strawberry tea on BrewBliss coaster',
  },
  {
    id: 'other-drinks',
    menuSectionId: 'pastries',
    label: 'Pastry',
    description:
      'Hạnh phúc đơn giản chỉ là được “nhai” một thứ gì đó thật ngon. 😄\nPastry tại BrewBliss không cầu kỳ, “vừa đủ ngon” để khiến bạn vui hơn một chút.\nVỏ giòn, nhân mềm, thơm bơ — mỗi lần cắn là một lần thấy “đã”.\nMột chút ngọt ngào, vậy là đủ 🥐🤍',
    image: '/images/signature-collection/uploads-apr15/pastry-tab.jpg',
    imageAlt: 'BrewBliss pastry selection',
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
                <img src={activeExperienceContent.image} alt={activeExperienceContent.imageAlt} loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </section>
        <div id="mon-noi-bat">
          <SignatureCollectionSection />
        </div>

        <section className="intenso-story-section" aria-labelledby="intenso-story-title">
          <div className="intenso-story-grid">
            <div className="intenso-story-media" aria-hidden="true">
              <img src="/hero/hero-slide-4.png" alt="" loading="lazy" decoding="async" />
            </div>

            <div className="intenso-story-copy">
              <h2 id="intenso-story-title">Vì sao BrewBliss chọn Intenso?</h2>

              <div className="intenso-story-body">
                <p>
                  Ngay từ những ngày đầu, tụi mình đã thử rất nhiều loại cà phê để tìm ra hương vị phù hợp nhất cho
                  BrewBliss.
                </p>
                <p>Không chỉ là “ngon”, tụi mình cần một dòng cà phê có thể đồng hành lâu dài.</p>
                <p>Và Intenso là câu trả lời.</p>
                <p>
                  Không chỉ cung cấp cà phê chất lượng cao, Intenso còn liên tục nghiên cứu và phát triển những
                  profile hương vị mới — phù hợp với xu hướng cà phê hiện đại.
                </p>
                <p>
                  Sau nhiều lần thử, tụi mình đã tìm được những blend thật sự “chạm”.<br />
                  Và tin rằng, bạn cũng sẽ cảm nhận được điều đó trong từng ly cà phê tại BrewBliss.
                </p>
              </div>

              <Link to="/collection" className="brewbliss-experience-link intenso-story-cta" aria-label="Tìm hiểu thêm về Collection của BrewBliss">
tìm hiểu
              </Link>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}

export default HomePage
