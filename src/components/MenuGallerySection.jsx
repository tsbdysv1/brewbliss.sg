import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { formatMenuPrice, getMenuItemHref } from '../data/menu'

function MenuGallerySection({ title, items, sectionId }) {
  const trackRef = useRef(null)
  const animationFrameRef = useRef(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

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
  }, [items.length])

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
    const firstCard = gallery.querySelector('.menu-gallery-card')
    const computedStyle = window.getComputedStyle(gallery)
    const gap = Number.parseFloat(computedStyle.columnGap || computedStyle.gap || '24') || 24
    const step = firstCard ? firstCard.getBoundingClientRect().width + gap : gallery.clientWidth * 0.72

    animateScrollTo(gallery, gallery.scrollLeft + direction * step)
  }

  if (!items?.length) return null

  return (
    <section className="section-block menu-gallery-section" id={sectionId} aria-labelledby={`${sectionId}-title`}>
      <div className="menu-gallery-grid-lockup">
        <div className="menu-gallery-inner">
          <div className="menu-gallery-header">
            <div className="menu-gallery-heading-group">
              <h2 id={`${sectionId}-title`}>{title}</h2>
            </div>
          </div>
        </div>

        <div className="menu-gallery-viewport">
          <div className="menu-gallery-track" ref={trackRef} aria-label={title}>
            {items.map((item) => (
              <Link
                key={item.slug}
                to={getMenuItemHref(item)}
                className="menu-gallery-card"
                aria-label={`Xem chi tiết ${item.name}`}
              >
                <img src={item.image} alt={item.name} className="menu-gallery-image" />
                <div className="menu-gallery-card-body">
                  <div className="menu-gallery-card-topline">
                    <h3>{item.name}</h3>
                    <strong>{formatMenuPrice(item.priceValue)}</strong>
                  </div>
                  {item.description ? <p>{item.description}</p> : null}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="menu-gallery-inner">
          <div className="menu-gallery-controls" aria-label={`${title} navigation`}>
            <button
              type="button"
              className={`menu-gallery-arrow${canScrollPrev ? '' : ' is-disabled'}`}
              onClick={() => scrollGallery(-1)}
              aria-label={`Previous ${title} item`}
              aria-disabled={!canScrollPrev}
            >
              <span className="menu-gallery-arrow-icon" aria-hidden="true">
                ‹
              </span>
            </button>
            <button
              type="button"
              className={`menu-gallery-arrow${canScrollNext ? '' : ' is-disabled'}`}
              onClick={() => scrollGallery(1)}
              aria-label={`Next ${title} item`}
              aria-disabled={!canScrollNext}
            >
              <span className="menu-gallery-arrow-icon" aria-hidden="true">
                ›
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuGallerySection
