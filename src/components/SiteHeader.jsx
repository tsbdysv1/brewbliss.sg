import { Link } from 'react-router-dom'
import { siteConfig } from '../data/site'
import { buildMapsLink, buildPhoneHref } from '../utils/commerce'

function SiteHeader() {
  return (
    <header className="site-header-bar">
      <div className="site-header-brand">
        <Link to="/" className="brand-home-link" aria-label="BrewBliss home">
          <img src="/brewbliss-wordmark.svg" alt="BrewBliss Coffee" className="brand-logo" />
        </Link>
      </div>

      <nav className="site-nav" aria-label="Primary navigation">
        <a href="/#menu" className="nav-link">
          Menu
        </a>
        <a href="/#mon-noi-bat" className="nav-link">
          Món nổi bật
        </a>
        <a href={buildMapsLink(siteConfig.mapQuery)} target="_blank" rel="noreferrer" className="nav-link">
          Map
        </a>
      </nav>

      <div className="site-header-actions">
        <a href={buildPhoneHref(siteConfig.phoneNumber)} className="outline-button compact-button">
          Gọi quán
        </a>
        <a
          href={buildMapsLink(siteConfig.mapQuery)}
          target="_blank"
          rel="noreferrer"
          className="solid-button compact-button"
        >
          Chỉ đường
        </a>
      </div>
    </header>
  )
}

export default SiteHeader
