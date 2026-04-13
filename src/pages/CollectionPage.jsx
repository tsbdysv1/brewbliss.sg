import Breadcrumbs from '../components/Breadcrumbs'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { siteConfig } from '../data/site'
import { usePageSeo } from '../hooks/usePageSeo'

const collectionHighlights = [
  {
    title: 'Single origin beans',
    description:
      'Những lựa chọn hạt cà phê dành cho khách thích trải nghiệm profile vị rõ ràng, sạch và có chiều sâu hơn khi pha tại nhà.',
  },
  {
    title: 'House blend',
    description:
      'Blend cân bằng theo hướng dễ uống, hợp pour over, espresso tại nhà hoặc làm quà cho người mới bắt đầu chơi cà phê.',
  },
  {
    title: 'Seasonal drops',
    description:
      'Các đợt collection theo mùa để BrewBliss có thể kể câu chuyện riêng về sourcing, roasting và vibe thương hiệu.',
  },
]

function CollectionPage() {
  usePageSeo({
    title: `Collection | ${siteConfig.brandName}`,
    description:
      'Khám phá collection coffee beans của BrewBliss với house blend, single origin và các seasonal drop theo phong cách premium, tối giản và hiện đại.',
    jsonLd: siteConfig.defaultJsonLd,
    pathname: '/collection',
    image: siteConfig.seo.defaultImage,
  })

  return (
    <div className="page-shell">
      <SiteHeader />

      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Collection' }]} />

      <section className="section-block collection-hero-section">
        <div className="collection-hero-copy">
          <p className="eyebrow">Coffee bean collection</p>
          <h1>Collection</h1>
          <p className="section-supporting-text">
            Một không gian riêng cho coffee beans của BrewBliss — gọn, hiện đại và đủ cao cấp để
            phát triển thành trang bán hạt cà phê hoặc giới thiệu collection theo mùa sau này.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Curated selection</p>
          <h2>Định hướng cho collection / coffee beans của BrewBliss</h2>
        </div>

        <div className="category-grid">
          {collectionHighlights.map((item) => (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block collection-note-section">
        <div className="section-heading">
          <p className="eyebrow">Ready for expansion</p>
          <h2>Trang này đã sẵn sàng để mở rộng thành collection thực tế</h2>
          <p className="section-supporting-text">
            Khi cần, mình có thể thêm grid sản phẩm, chi tiết tasting notes, origin, roast level,
            giá bán, CTA mua hàng hoặc inquiry form mà không phải làm lại layout.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export default CollectionPage
