import { useEffect, useMemo, useState } from 'react'

function HeroSlider({ slides = [], autoPlayMs = 5000 }) {
  const safeSlides = useMemo(() => slides.filter(Boolean), [slides])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (safeSlides.length <= 1) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % safeSlides.length)
    }, autoPlayMs)

    return () => window.clearInterval(timer)
  }, [autoPlayMs, safeSlides.length])

  useEffect(() => {
    setActiveIndex(0)
  }, [safeSlides.length])

  if (!safeSlides.length) return null

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + safeSlides.length) % safeSlides.length)
  }

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % safeSlides.length)
  }

  return (
    <section className="hero-slider-section" aria-label="BrewBliss hero slider">
      <div className="hero-slider-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {safeSlides.map((slide) => (
          <article key={slide.image} className="hero-slide">
            <img src={slide.image} alt={slide.alt} className="hero-slide-image" />
          </article>
        ))}
      </div>

      {safeSlides.length > 1 ? (
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
                className={`hero-slider-dot${index === activeIndex ? ' is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
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
