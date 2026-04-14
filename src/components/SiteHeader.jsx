import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const jobLink =
  'https://docs.google.com/forms/d/e/1FAIpQLSeP0qQAY2vHN0EOHvJGURmU0P6iyGL_Br_WDzLRnuULztB2Mw/viewform?usp=sharing&ouid=111336892926772158014'

function SiteHeader() {
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
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

    lastScrollY.current = window.scrollY
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="site-header-spacer" aria-hidden="true" />
      <header className={`site-header-bar${isHidden ? ' is-hidden' : ''}`}>
        <div className="site-header-inner">
          <Link to="/" className="brand-home-link brand-nav-link" aria-label="BrewBliss home">
            <img src="/brewbliss-wordmark.svg" alt="BrewBliss Coffee" className="brand-logo" />
          </Link>

          <nav className="site-nav" aria-label="Primary navigation">
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
          </nav>
        </div>
      </header>
    </>
  )
}

export default SiteHeader
