import { useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { getMenuItemBySlug } from '../data/menu'
import { signatureCollectionSlugs } from '../data/signatureCollection'

function SignatureCollectionSection({ showViewAll = true, headingLevel = 'h2', className = '' }) {
  const trackRef = useRef(null)
  const HeadingTag = headingLevel

  const signatureItems = useMemo(
    () => signatureCollectionSlugs.map((slug) => getMenuItemBySlug(slug)).filter(Boolean),
    [],
  )

  const scrollGallery = (direction) => {
    if (!trackRef.current) return

    const gallery = trackRef.current
    const firstCard = gallery.querySelector('.signature-collection-card')
    const gap = 24
    const step = firstCard ? firstCard.getBoundingClientRect().width + gap : gallery.clientWidth * 0.72

    gallery.scrollBy({
      left: direction * step,
      behavior: 'smooth',
    })
  }

  if (!signatureItems.length) return null

  return (
    <section className={`section-block signature-collection-section ${className}`.trim()} aria-labelledby="signature-collection-title">
      <div className="signature-collection-header">
        <div className="signature-collection-heading-group">
          <HeadingTag id="signature-collection-title">BrewBliss Signature Collection</HeadingTag>
        </div>

        {showViewAll ? (
          <Link to="/menu/signature" className="signature-view-all-button">
            view all
          </Link>
        ) : null}
      </div>

      <div className="signature-collection-gallery" ref={trackRef} aria-label="BrewBliss Signature Collection slider">
        {signatureItems.map((item) => (
          <Link
            key={item.slug}
            to={`/menu/${item.slug}`}
            className="signature-collection-card"
            aria-label={`Xem chi tiết ${item.name}`}
          >
            <img src={item.image} alt={item.name} className="signature-collection-image" />
          </Link>
        ))}
      </div>

      <div className="signature-collection-controls" aria-label="Signature collection navigation">
        <button
          type="button"
          className="signature-collection-arrow"
          onClick={() => scrollGallery(-1)}
          aria-label="Previous signature item"
        >
          <span className="signature-collection-arrow-icon" aria-hidden="true">
            ◀
          </span>
        </button>
        <button
          type="button"
          className="signature-collection-arrow"
          onClick={() => scrollGallery(1)}
          aria-label="Next signature item"
        >
          <span className="signature-collection-arrow-icon" aria-hidden="true">
            ▶
          </span>
        </button>
      </div>
    </section>
  )
}

export default SignatureCollectionSection
