import { Link } from 'react-router-dom'
import { siteConfig } from '../data/site'
import { buildPhoneHref } from '../utils/commerce'

function SiteFooter() {
  return (
    <footer className="site-footer section-block">
      <div className="footer-grid">
        <div className="footer-column">
          <img src="/brewbliss-wordmark.svg" alt="BrewBliss Coffee" className="footer-wordmark" />
          <p className="footer-text">
            BrewBliss là điểm hẹn cà phê, matcha, trà và pastry giữa trung tâm Sài Gòn — ấm áp,
            hiện đại và dễ ghé lại.
          </p>
        </div>

        <div className="footer-column">
          <p className="footer-title">Ghé quán</p>
          <p className="footer-text">{siteConfig.address}</p>
          <p className="footer-text">{siteConfig.hoursLabel}</p>
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
