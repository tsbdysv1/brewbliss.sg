import { Link } from 'react-router-dom'
import { formatMenuPrice, getMenuItemHref } from '../data/menu'

function RelatedMenuItems({ items }) {
  if (!items.length) {
    return null
  }

  return (
    <section className="section-block">
      <div className="section-heading related-products-heading">
        <h2>Related Products</h2>
      </div>

      <div className="related-products-grid">
        {items.map((item) => (
          <Link key={item.slug} to={getMenuItemHref(item)} className="menu-catalog-card related-product-card">
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

export default RelatedMenuItems
