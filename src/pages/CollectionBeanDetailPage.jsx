import { Link, Navigate, useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { buildBeanJsonLd, formatBeanPrice, getBeanBySlug, getBeanWeightOptions } from '../data/beans'
import { siteConfig } from '../data/site'
import { usePageSeo } from '../hooks/usePageSeo'

function CollectionBeanDetailPage() {
  const { slug } = useParams()
  const bean = getBeanBySlug(slug)
  const beanWeightOptions = useMemo(() => getBeanWeightOptions(bean), [bean])
  const [selectedWeight, setSelectedWeight] = useState(() => beanWeightOptions[0]?.label ?? '')

  const selectedWeightOption = useMemo(
    () => beanWeightOptions.find((option) => option.label === selectedWeight) ?? beanWeightOptions[0],
    [beanWeightOptions, selectedWeight],
  )

  useEffect(() => {
    if (!beanWeightOptions.length) return

    const hasSelectedWeight = beanWeightOptions.some((option) => option.label === selectedWeight)
    if (!hasSelectedWeight) {
      setSelectedWeight(beanWeightOptions[0].label)
    }
  }, [beanWeightOptions, selectedWeight])

  usePageSeo({
    title: bean ? `${bean.name} | ${siteConfig.brandName} Beans` : `Coffee Bean | ${siteConfig.brandName}`,
    description: bean ? bean.introduction : siteConfig.seo.description,
    jsonLd: bean ? buildBeanJsonLd(bean, selectedWeightOption) : siteConfig.defaultJsonLd,
    pathname: bean ? `/collection/${bean.slug}` : '/collection',
    image: bean ? bean.image : siteConfig.seo.defaultImage,
  })

  if (!bean) {
    return <Navigate to="/khong-tim-thay" replace />
  }

  return (
    <div className="page-shell product-detail-shell bean-detail-shell">
      <SiteHeader />

      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Collection', to: '/collection' },
          { label: bean.name },
        ]}
      />

      <section className="section-block product-detail-layout editorial-product-detail-layout bean-detail-layout">
        <div className="product-detail-media editorial-product-detail-media">
          <img src={bean.image} alt={bean.name} className="product-detail-image editorial-product-detail-image" loading="eager" decoding="async" />
        </div>

        <div className="product-detail-main editorial-product-detail-main bean-detail-main">
          <h1>{bean.name}</h1>

          {!bean.hideDetailHeadlinePrice ? (
            <div className="product-detail-price-row">
              <strong className="product-detail-price">{formatBeanPrice(selectedWeightOption.priceValue)}</strong>
            </div>
          ) : null}

          <p className="product-detail-description">{bean.introduction}</p>

          {bean.detailSections ? (
            <section className="bean-detail-editorial-sections" aria-label="Detailed bean information">
              <article className="bean-detail-editorial-section">
                <h2>Mô tả</h2>
                <p>{bean.detailSections.description}</p>
              </article>

              <article className="bean-detail-editorial-section">
                <h2>Bean characteristics</h2>
                <dl className="bean-detail-editorial-list">
                  {bean.detailSections.characteristics.map((item) => (
                    <div key={item.label} className="bean-detail-editorial-item">
                      <dt className="bean-detail-editorial-label">{item.label}</dt>
                      <dd className="bean-detail-editorial-value">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>

              <article className="bean-detail-editorial-section">
                <h2>Recommended usage</h2>
                <p className="bean-detail-editorial-intro">{bean.detailSections.usage.suitableFor}</p>
                <h3 className="bean-detail-editorial-subheading">{bean.detailSections.usage.brewTitle}</h3>
                <ul className="bean-detail-editorial-bullets">
                  {bean.detailSections.usage.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <p className="bean-detail-editorial-brew-note">
                  <strong>Cách pha:</strong> {bean.detailSections.usage.brewMethod}
                </p>
              </article>
            </section>
          ) : null}

          {!bean.hideBeanQuantitySection ? (
            <div className="product-customization-flow bean-customization-flow" aria-label="Bean quantity options">
              <section className="product-option-section">
                <h2>Bean quantity</h2>
                <div className="product-option-divider" aria-hidden="true" />
                <div className="product-option-button-row bean-weight-option-row">
                  {beanWeightOptions.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      className={`product-option-button${bean.hideBeanQuantityPrice ? '' : ' has-subprice'}${selectedWeight === option.label ? ' is-selected' : ''}`}
                      onClick={() => setSelectedWeight(option.label)}
                    >
                      <span className="product-option-button-text">{option.label}</span>
                      {!bean.hideBeanQuantityPrice ? <span className="product-option-button-subprice">{formatBeanPrice(option.priceValue)}</span> : null}
                    </button>
                  ))}
                </div>
              </section>
            </div>
          ) : null}

          {!bean.detailSections ? (
            <section className="bean-detail-info-grid" aria-label="Bean characteristics and usage">
              <article className="bean-detail-info-card">
                <h2>Bean characteristics</h2>
                <ul className="bean-detail-list">
                  <li>
                    <span>Origin</span>
                    <strong>{bean.characteristics.origin}</strong>
                  </li>
                  <li>
                    <span>Roast level</span>
                    <strong>{bean.characteristics.roastLevel}</strong>
                  </li>
                  <li>
                    <span>Flavor notes</span>
                    <strong>{bean.characteristics.flavorNotes}</strong>
                  </li>
                  <li>
                    <span>Process</span>
                    <strong>{bean.characteristics.process}</strong>
                  </li>
                </ul>
              </article>

              <article className="bean-detail-info-card">
                <h2>Recommended usage</h2>
                <p>{bean.recommendedUsage}</p>
              </article>
            </section>
          ) : null}

          <div className="product-detail-actions">
            <Link to="/collection" className="outline-button inline-return-link">
              ← Back to collection
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export default CollectionBeanDetailPage
