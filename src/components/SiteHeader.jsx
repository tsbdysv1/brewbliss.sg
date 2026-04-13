import { Link } from 'react-router-dom'
import { siteConfig } from '../data/site'

function SiteHeader() {
  return (
    <header className="site-header-bar">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link to="/" className="brand-home-link nav-link brand-nav-link" aria-label="BrewBliss home">
          <img src="/brewbliss-wordmark.svg" alt="BrewBliss Coffee" className="brand-logo" />
        </Link>
        <a href="/#menu" className="nav-link">
          Menu
        </a>
        <a href="/#mon-noi-bat" className="nav-link">
          Món nổi bật
        </a>
        <Link to="/cua-hang" className="nav-link">
          Cửa Hàng
        </Link>
        <a href={siteConfig.mapLink} target="_blank" rel="noreferrer" className="nav-link">
          Map
        </a>
        <a href="/#lien-he" className="nav-link contact-nav-link">
          Liên Hệ
        </a>
      </nav>
    </header>
  )
}

export default SiteHeader
