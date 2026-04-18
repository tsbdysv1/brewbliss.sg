import { Link } from 'react-router-dom'
import { formatMenuPrice, getMenuItemHref } from '../data/menu'

function MenuCategorySection({ category }) {
  return (
    <section className="section-block menu-category-section" id={category.slug}>
      <div className="section-heading">
        <p className="eyebrow">Menu category</p>
        <h2>{category.name}</h2>
        <p className="section-supporting-text">{category.description}</p>
      </div>

      <div className="menu-grid">
        {category.items.map((item) => (
          <article key={item.slug} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-card-image" loading="lazy" decoding="async" />
            <div className="menu-card-content">
              <div className="menu-card-topline">
                <h3>{item.name}</h3>
                <strong>{formatMenuPrice(item.priceValue)}</strong>
              </div>
              {item.description ? <p>{item.description}</p> : null}
              {item.badges?.length ? (
                <div className="product-badge-row">
                  {item.badges.map((badge) => (
                    <span key={badge} className="product-badge">
                      {badge}
                    </span>
                  ))}
                </div>
              ) : null}
              <div className="menu-card-actions">
                <Link to={getMenuItemHref(item)} className="outline-button">
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

export default MenuCategorySection
