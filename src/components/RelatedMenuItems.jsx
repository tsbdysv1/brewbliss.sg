import { Link } from 'react-router-dom'
import { formatMenuPrice } from '../data/menu'

function RelatedMenuItems({ items }) {
  if (!items.length) {
    return null
  }

  return (
    <section className="section-block">
      <div className="section-heading">
        <p className="eyebrow">Có thể bạn cũng thích</p>
        <h2>Các món liên quan</h2>
      </div>

      <div className="menu-grid related-grid">
        {items.map((item) => (
          <article key={item.slug} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-card-image" />
            <div className="menu-card-content">
              <div className="menu-card-topline">
                <h3>{item.name}</h3>
                <strong>{formatMenuPrice(item.priceValue)}</strong>
              </div>
              {item.description ? <p>{item.description}</p> : null}
              <div className="menu-card-actions">
                <Link to={`/menu/${item.slug}`} className="outline-button">
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default RelatedMenuItems
