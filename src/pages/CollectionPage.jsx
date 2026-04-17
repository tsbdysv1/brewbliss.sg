import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { beanCollectionSections, formatBeanPrice, getBeanHref } from '../data/beans'
import { siteConfig } from '../data/site'
import { usePageSeo } from '../hooks/usePageSeo'

function CollectionPage() {
  usePageSeo({
    title: `Collection | ${siteConfig.brandName}`,
    description:
      'Khám phá BrewBliss bean collection với core beans và seasonal beans theo layout premium, tối giản, đồng bộ với trải nghiệm menu của quán.',
    jsonLd: siteConfig.defaultJsonLd,
    pathname: '/collection',
    image: siteConfig.seo.defaultImage,
  })

  return (
    <div className="page-shell">
      <SiteHeader />

      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Collection' }]} />

      <section className="section-block collection-hero-section bean-collection-hero-section">
        <div className="collection-hero-copy">
          <p className="eyebrow">Coffee bean collection</p>
          <h1>Collection</h1>
          <p className="section-supporting-text">
            Curated coffee bean lineup của BrewBliss: premium, tối giản và đồng bộ trải nghiệm với hệ menu hiện tại.
          </p>
        </div>
      </section>

      <main className="collection-page-content" aria-label="BrewBliss bean collection catalog">
        {beanCollectionSections.map((section) => (
          <section key={section.slug} className="menu-catalog-section bean-collection-section" id={section.slug} aria-labelledby={`${section.slug}-title`}>
            <div className="menu-catalog-section-heading bean-collection-section-heading">
              <h2 id={`${section.slug}-title`}>{section.title}</h2>
            </div>

            <p className="bean-collection-section-description">{section.description}</p>

            <div className={`menu-catalog-grid bean-collection-grid bean-collection-grid-${section.columns}`}>
              {section.items.map((bean) => (
                <article key={bean.slug} className="menu-catalog-card bean-collection-card">
                  <Link to={getBeanHref(bean)} aria-label={`View bean detail ${bean.name}`} className="bean-collection-card-link">
                    <div className="menu-catalog-image-wrap">
                      <img src={bean.image} alt={bean.name} className="menu-catalog-image" />
                    </div>
                    <div className="menu-catalog-card-body">
                      <div className="menu-catalog-card-topline">
                        <h3>{bean.name}</h3>
                        <strong>{formatBeanPrice(bean.priceValue)}</strong>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      <SiteFooter />
    </div>
  )
}

export default CollectionPage
