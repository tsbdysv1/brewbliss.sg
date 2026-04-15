import { Link } from 'react-router-dom'
import { formatMenuPrice } from '../data/menu'

function MenuCatalogSection({ title, items, sectionId }) {
  if (!items?.length) return null

  return (
    <section className="menu-catalog-section" id={sectionId} aria-labelledby={`${sectionId}-title`}>
      <div className="menu-catalog-section-heading">
        <h2 id={`${sectionId}-title`}>{title}</h2>
      </div>

      <div className="menu-catalog-grid">
        {items.map((item) => (
          <Link
            key={item.slug}
            to={`/menu/${item.slug}`}
            className="menu-catalog-card"
            aria-label={`Xem chi tiết ${item.name}`}
          >
            <div className="menu-catalog-image-wrap">
              <img src={item.image} alt={item.name} className="menu-catalog-image" />
            </div>
            <div className="menu-catalog-card-body">
              <div className="menu-catalog-card-topline">
                <h3>{item.name}</h3>
                <strong>{formatMenuPrice(item.priceValue)}</strong>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default MenuCatalogSection
