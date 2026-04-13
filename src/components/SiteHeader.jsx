import { Link } from 'react-router-dom'

const jobLink =
  'https://docs.google.com/forms/d/e/1FAIpQLSeP0qQAY2vHN0EOHvJGURmU0P6iyGL_Br_WDzLRnuULztB2Mw/viewform?usp=sharing&ouid=111336892926772158014'

function SiteHeader() {
  return (
    <header className="site-header-bar">
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
  )
}

export default SiteHeader
