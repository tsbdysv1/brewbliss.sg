import { useEffect, useMemo, useRef, useState } from 'react'

function HeroSlider({ slides = [], autoPlayMs = 5000 }) {
  const safeSlides = useMemo(() => slides.filter(Boolean), [slides])
  const [activeIndex, setActiveIndex] = useState(1)
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true)
  const resetTimeoutRef = useRef(null)

  const slideCount = safeSlides.length
  const visualSlides = useMemo(() => {
    if (slideCount <= 1) return safeSlides

    return [safeSlides[slideCount - 1], ...safeSlides, safeSlides[0]]
  }, [safeSlides, slideCount])

  useEffect(() => {
    if (slideCount <= 1) {
      setActiveIndex(0)
      setIsTransitionEnabled(true)
      return undefined
    }

    setActiveIndex(1)
    setIsTransitionEnabled(true)

    return undefined
  }, [slideCount])

  useEffect(() => {
    if (slideCount <= 1) return undefined

    const timer = window.setInterval(() => {
      setIsTransitionEnabled(true)
      setActiveIndex((current) => current + 1)
    }, autoPlayMs)

    return () => window.clearInterval(timer)
  }, [autoPlayMs, slideCount])

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        window.clearTimeout(resetTimeoutRef.current)
      }
    }
  }, [])

  if (!slideCount) return null

  const currentRealIndex = slideCount <= 1 ? 0 : (activeIndex - 1 + slideCount) % slideCount

  const goPrev = () => {
    if (slideCount <= 1) return
    setIsTransitionEnabled(true)
    setActiveIndex((current) => current - 1)
  }

  const goNext = () => {
    if (slideCount <= 1) return
    setIsTransitionEnabled(true)
    setActiveIndex((current) => current + 1)
  }

  const goToSlide = (index) => {
    if (slideCount <= 1) return
    setIsTransitionEnabled(true)
    setActiveIndex(index + 1)
  }

  const handleTransitionEnd = () => {
    if (slideCount <= 1) return

    if (activeIndex === slideCount + 1) {
      setIsTransitionEnabled(false)
      resetTimeoutRef.current = window.setTimeout(() => {
        setActiveIndex(1)
      }, 20)
    } else if (activeIndex === 0) {
      setIsTransitionEnabled(false)
      resetTimeoutRef.current = window.setTimeout(() => {
        setActiveIndex(slideCount)
      }, 20)
    }
  }

  return (
    <section className="hero-slider-section" aria-label="BrewBliss hero slider">
      <div
        className={`hero-slider-track${isTransitionEnabled ? '' : ' is-resetting'}`}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {visualSlides.map((slide, index) => (
          <article key={`${slide.image}-${index}`} className="hero-slide">
            <img src={slide.image} alt={slide.alt} className="hero-slide-image" />
          </article>
        ))}
      </div>

      {slideCount > 1 ? (
        <>
          <button type="button" className="hero-slider-arrow hero-slider-arrow-left" onClick={goPrev} aria-label="Previous slide">
            ‹
          </button>
          <button type="button" className="hero-slider-arrow hero-slider-arrow-right" onClick={goNext} aria-label="Next slide">
            ›
          </button>

          <div className="hero-slider-dots" aria-label="Slider pagination">
            {safeSlides.map((slide, index) => (
              <button
                key={`${slide.image}-${index}`}
                type="button"
                className={`hero-slider-dot${index === currentRealIndex ? ' is-active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </section>
  )
}

export default HeroSlider
