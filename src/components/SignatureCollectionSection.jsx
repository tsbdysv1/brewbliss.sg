import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMenuItemBySlug } from '../data/menu'
import { signatureCollectionSlugs } from '../data/signatureCollection'

function SignatureCollectionSection({ showViewAll = true, headingLevel = 'h2', className = '' }) {
  const trackRef = useRef(null)
  const HeadingTag = headingLevel
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const signatureItems = useMemo(
    () => signatureCollectionSlugs.map((slug) => getMenuItemBySlug(slug)).filter(Boolean),
    [],
  )

  useEffect(() => {
    if (!trackRef.current) return undefined

    const gallery = trackRef.current

    const updateScrollState = () => {
      const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth
      setCanScrollPrev(gallery.scrollLeft > 4)
      setCanScrollNext(gallery.scrollLeft < maxScrollLeft - 4)
    }

    updateScrollState()
    gallery.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)

    return () => {
      gallery.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [signatureItems.length])

  const scrollGallery = (direction) => {
    if (!trackRef.current) return

    const gallery = trackRef.current
    const firstCard = gallery.querySelector('.signature-collection-card')
    const computedStyle = window.getComputedStyle(gallery)
    const gap = Number.parseFloat(computedStyle.columnGap || computedStyle.gap || '24') || 24
    const step = firstCard ? firstCard.getBoundingClientRect().width + gap : gallery.clientWidth * 0.72

    gallery.scrollBy({
      left: direction * step,
      behavior: 'smooth',
    })
  }

  if (!signatureItems.length) return null

  return (
    <section className={`section-block signature-collection-section ${className}`.trim()} aria-labelledby="signature-collection-title">
      <div className="signature-collection-inner">
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
      </div>

      <div className="signature-collection-gallery-bleed">
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
      </div>

      <div className="signature-collection-inner">
        <div className="signature-collection-controls" aria-label="Signature collection navigation">
          <button
            type="button"
            className={`signature-collection-arrow${canScrollPrev ? '' : ' is-disabled'}`}
            onClick={() => scrollGallery(-1)}
            aria-label="Previous signature item"
            aria-disabled={!canScrollPrev}
          >
            <span className="signature-collection-arrow-icon" aria-hidden="true">
              ‹
            </span>
          </button>
          <button
            type="button"
            className={`signature-collection-arrow${canScrollNext ? '' : ' is-disabled'}`}
            onClick={() => scrollGallery(1)}
            aria-label="Next signature item"
            aria-disabled={!canScrollNext}
          >
            <span className="signature-collection-arrow-icon" aria-hidden="true">
              ›
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default SignatureCollectionSection
