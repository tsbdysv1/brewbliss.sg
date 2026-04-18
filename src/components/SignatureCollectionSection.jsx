import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { formatMenuPrice, getMenuItemHref, getSignatureCollectionItems } from '../data/menu'

function SignatureCollectionSection({ showViewAll = true, headingLevel = 'h2', className = '' }) {
  const trackRef = useRef(null)
  const animationFrameRef = useRef(null)
  const HeadingTag = headingLevel
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const signatureItems = useMemo(() => getSignatureCollectionItems(), [])

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
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [signatureItems.length])

  const animateScrollTo = (gallery, targetLeft, duration = 620) => {
    if (animationFrameRef.current) {
      window.cancelAnimationFrame(animationFrameRef.current)
    }

    const startLeft = gallery.scrollLeft
    const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth
    const boundedTarget = Math.max(0, Math.min(targetLeft, maxScrollLeft))
    const distance = boundedTarget - startLeft

    if (Math.abs(distance) < 1) return

    const startTime = performance.now()
    const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - ((-2 * t + 2) ** 3) / 2)

    const stepFrame = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeInOutCubic(progress)
      gallery.scrollLeft = startLeft + distance * eased

      if (progress < 1) {
        animationFrameRef.current = window.requestAnimationFrame(stepFrame)
      }
    }

    animationFrameRef.current = window.requestAnimationFrame(stepFrame)
  }

  const scrollGallery = (direction) => {
    if (!trackRef.current) return

    const gallery = trackRef.current
    const firstCard = gallery.querySelector('.signature-collection-card')
    const computedStyle = window.getComputedStyle(gallery)
    const gap = Number.parseFloat(computedStyle.columnGap || computedStyle.gap || '24') || 24
    const step = firstCard ? firstCard.getBoundingClientRect().width + gap : gallery.clientWidth * 0.72

    animateScrollTo(gallery, gallery.scrollLeft + direction * step)
  }

  if (!signatureItems.length) return null

  return (
    <section className={`section-block signature-collection-section ${className}`.trim()} aria-labelledby="signature-collection-title">
      <div className="signature-collection-grid-lockup">
        <div className="signature-collection-inner">
          <div className="signature-collection-header">
          <div className="signature-collection-heading-group">
            <HeadingTag id="signature-collection-title">BrewBliss Signature Collection</HeadingTag>
          </div>

            {showViewAll ? (
              <Link to="/menu#signature-collection" className="signature-view-all-button signature-view-all-button-header">
                Xem thêm
              </Link>
            ) : null}
          </div>
        </div>

        <div className="signature-collection-gallery-viewport">
          <div className="signature-collection-gallery-bleed">
            <div className="signature-collection-gallery" ref={trackRef} aria-label="BrewBliss Signature Collection slider">
              {signatureItems.map((item) => (
                <Link
                  key={item.slug}
                  to={getMenuItemHref(item)}
                  className="signature-collection-card"
                  aria-label={`Xem chi tiết ${item.name}`}
                >
                  <img src={item.image} alt={item.name} className="signature-collection-image" loading="lazy" decoding="async" />
                  <div className="signature-collection-card-overlay">
                    <div className="signature-collection-card-copy">
                      <h3>{item.name}</h3>
                      <p>{formatMenuPrice(item.priceValue)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="signature-collection-inner">
          <div className="signature-collection-controls" aria-label="Signature collection navigation">
            <div className="signature-collection-arrow-group">
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

            {showViewAll ? (
              <Link to="/menu#signature-collection" className="signature-view-all-button signature-view-all-button-controls">
                Xem thêm
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignatureCollectionSection
