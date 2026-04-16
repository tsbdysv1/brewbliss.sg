import { Link } from 'react-router-dom'
import { formatMenuPrice, getMenuItemHref } from '../data/menu'
import { useCart } from '../context/CartContext'
import { buildCartItemId, PRODUCT_OPTION_GROUPS } from '../utils/cart'

function RelatedMenuItems({ items }) {
  const { addItem } = useCart()
  if (!items.length) {
    return null
  }

  return (
    <section className="section-block">
      <div className="section-heading related-products-heading">
        <h2>Related Products</h2>
      </div>

      <div className="related-products-grid">
        {items.map((item) => {
          const quickCartPayload = {
            id: buildCartItemId({
              slug: item.slug,
              options: {
                milk: PRODUCT_OPTION_GROUPS.milk[0],
                sugar: PRODUCT_OPTION_GROUPS.sugar[0],
                temperature: PRODUCT_OPTION_GROUPS.temperature[0],
                note: '',
              },
            }),
            slug: item.slug,
            name: item.name,
            image: item.image,
            priceValue: item.priceValue,
            quantity: 1,
            options: {
              milk: PRODUCT_OPTION_GROUPS.milk[0],
              sugar: PRODUCT_OPTION_GROUPS.sugar[0],
              temperature: PRODUCT_OPTION_GROUPS.temperature[0],
              note: '',
            },
          }

          return (
            <article key={item.slug} className="menu-catalog-card related-product-card">
              <Link to={getMenuItemHref(item)}>
                <div className="menu-catalog-image-wrap">
                  <img src={item.image} alt={item.name} className="menu-catalog-image" />
                </div>
              </Link>
              <div className="menu-catalog-card-body">
                <div className="menu-catalog-card-topline">
                  <h3>{item.name}</h3>
                  <strong>{formatMenuPrice(item.priceValue)}</strong>
                </div>
                <div className="menu-catalog-card-actions">
                  <Link to={getMenuItemHref(item)} className="outline-button">
                    Xem chi tiết
                  </Link>
                  <button type="button" className="solid-button" onClick={() => addItem(quickCartPayload)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default RelatedMenuItems
