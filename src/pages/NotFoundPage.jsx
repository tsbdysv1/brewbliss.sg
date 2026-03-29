import { Link } from 'react-router-dom'
import { siteConfig } from '../data/site'
import { usePageSeo } from '../hooks/usePageSeo'

function NotFoundPage() {
  usePageSeo({
    title: 'Không tìm thấy trang | BrewBliss Coffee',
    description: 'Trang bạn đang tìm không tồn tại hoặc đã được di chuyển.',
    pathname: '/khong-tim-thay',
    image: siteConfig.seo.defaultImage,
  })

  return (
    <div className="page-shell">
      <section className="section-block not-found-card">
        <p className="eyebrow">404</p>
        <h1>Trang này không còn ở đây</h1>
        <p>Link có thể đã thay đổi, hoặc món này chưa được hiển thị. Bạn quay lại menu chính nhé.</p>
        <div className="hero-cta-row">
          <Link to="/" className="solid-button">
            Về trang chủ
          </Link>
          <a href="/#menu" className="outline-button">
            Xem menu
          </a>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage
