import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const jobLink =
  'https://docs.google.com/forms/d/e/1FAIpQLSeP0qQAY2vHN0EOHvJGURmU0P6iyGL_Br_WDzLRnuULztB2Mw/viewform?usp=sharing&ouid=111336892926772158014'

function SiteHeader() {
  const location = useLocation()
  const { itemCount } = useCart()
  const [isHidden, setIsHidden] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 720px)')

    const handleScroll = () => {
      if (mediaQuery.matches) {
        setIsHidden(false)
        lastScrollY.current = window.scrollY
        return
      }

      const currentScrollY = window.scrollY
      const scrollingDown = currentScrollY > lastScrollY.current
      const passedRevealThreshold = currentScrollY > 110
      const delta = Math.abs(currentScrollY - lastScrollY.current)

      if (delta < 8) return

      if (scrollingDown && passedRevealThreshold) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      lastScrollY.current = currentScrollY
    }

    const handleMediaChange = (event) => {
      if (event.matches) {
        setIsHidden(false)
      } else {
        setIsMobileMenuOpen(false)
      }
    }

    lastScrollY.current = window.scrollY
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    mediaQuery.addEventListener('change', handleMediaChange)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      mediaQuery.removeEventListener('change', handleMediaChange)
    }
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 720px)')
    document.body.style.overflow = isMobileMenuOpen && mediaQuery.matches ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <div className="site-header-spacer" aria-hidden="true" />
      <header className={`site-header-bar${isHidden ? ' is-hidden' : ''}${isMobileMenuOpen ? ' is-mobile-menu-open' : ''}`}>
        <div className="site-header-inner">
          <button
            type="button"
            className={`mobile-menu-toggle${isMobileMenuOpen ? ' is-active' : ''}`}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <Link to="/" className="brand-home-link brand-nav-link" aria-label="BrewBliss home">
            <img src="/brewbliss-wordmark.svg" alt="BrewBliss Coffee" className="brand-logo" />
            <span className="brand-logo-text" aria-hidden="true">
              BrewBliss
            </span>
          </Link>

          <nav id="primary-navigation" className={`site-nav${isMobileMenuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
            <Link to="/" className="nav-link">
              HOME
            </Link>
            <Link to="/collection" className="nav-link">
              COLLECTION
            </Link>
            <Link to="/menu" className="nav-link">
              MENU
            </Link>
            <Link to="/cua-hang" className="nav-link">
              STORE
            </Link>
            <a href={jobLink} target="_blank" rel="noreferrer" className="nav-link">
              JOB
            </a>
            <Link to="/cart" className="nav-link nav-cart-link" aria-label={`Cart${itemCount ? `, ${itemCount} item${itemCount > 1 ? 's' : ''}` : ''}`}>
              <span className="cart-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="20" r="1.4" />
                  <circle cx="18" cy="20" r="1.4" />
                  <path d="M3 4h2.2l1.8 9.2a1 1 0 0 0 1 .8h8.7a1 1 0 0 0 1-.76L20 7H7.1" />
                </svg>
              </span>
              <span className="cart-link-label">CART</span>
              {itemCount ? <span className="cart-count-badge">{itemCount}</span> : null}
            </Link>
          </nav>
        </div>
        <button
          type="button"
          className={`mobile-nav-backdrop${isMobileMenuOpen ? ' is-visible' : ''}`}
          aria-label="Close navigation menu"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      </header>
    </>
  )
}

export default SiteHeader
