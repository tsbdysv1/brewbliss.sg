import { Link } from 'react-router-dom'
import { siteConfig } from '../data/site'
import { buildPhoneHref } from '../utils/commerce'

function SiteFooter() {
  return (
    <footer className="site-footer section-block" aria-label="BrewBliss footer">
      <div className="footer-grid">
        <div className="footer-column footer-brand-column">
          <h2 className="footer-brand-title">BrewBliss Coffee</h2>
          <p className="footer-tagline">Brew your coffee, Brew your happiness</p>
        </div>

        <div className="footer-column">
          <p className="footer-inline-label">Address:</p>
          <p className="footer-text">21 Nguyễn Trung Trực, Phường Bến Thành, TP. Hồ Chí Minh</p>
          <a href={siteConfig.mapLink} target="_blank" rel="noreferrer" className="footer-link">
            Mở Google Maps
          </a>
        </div>

        <div className="footer-column">
          <p className="footer-title">Liên hệ</p>
          <a href={buildPhoneHref(siteConfig.phoneNumber)} className="footer-link">
            {siteConfig.phoneNumber}
          </a>
          <a href={siteConfig.instagramLink} target="_blank" rel="noreferrer" className="footer-link">
            Instagram
          </a>
          <a href={siteConfig.facebookLink} target="_blank" rel="noreferrer" className="footer-link">
            Facebook
          </a>
          <span className="footer-link muted-link">Zalo: {siteConfig.zaloLabel}</span>
        </div>

        <div className="footer-column">
          <p className="footer-title">Explore</p>
          <Link to="/collection" className="footer-link">
            Collection
          </Link>
          <Link to="/menu" className="footer-link">
            Menu
          </Link>
          <Link to="/cua-hang" className="footer-link">
            Store
          </Link>
          <Link to="/menu/salted-caramel" className="footer-link">
            Signature drinks
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
