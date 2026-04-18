import { Link } from 'react-router-dom'
import { formatMenuPrice, getMenuItemHref } from '../data/menu'
import { useCart } from '../context/CartContext'
import { siteConfig } from '../data/site'
import { buildCartItemId, PRODUCT_OPTION_GROUPS } from '../utils/cart'

function MenuCatalogSection({ title, items, sectionId, isHighlighted = false }) {
  const { addItem } = useCart()
  const headingNote = sectionId === 'espresso-bar' ? 'extra shot +25,000đ' : null
  if (!items?.length) return null

  return (
    <section
      className={`menu-catalog-section${isHighlighted ? ' is-active-target' : ''}`}
      id={sectionId}
      aria-labelledby={`${sectionId}-title`}
    >
      <div className="menu-catalog-section-heading">
        <h2 id={`${sectionId}-title`}>{title}</h2>
        {headingNote ? <p className="menu-catalog-section-note">{headingNote}</p> : null}
      </div>

      <div className="menu-catalog-grid">
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
            <article key={item.slug} className="menu-catalog-card">
              <Link to={getMenuItemHref(item)} aria-label={`Xem chi tiết ${item.name}`}>
                <div className="menu-catalog-image-wrap">
                  <img src={item.image} alt={item.name} className="menu-catalog-image" loading="lazy" decoding="async" />
                </div>
              </Link>
              <div className="menu-catalog-card-body">
                <div className="menu-catalog-card-topline">
                  <h3>{item.name}</h3>
                  <strong>{formatMenuPrice(item.priceValue)}</strong>
                </div>
                {siteConfig.features.cartEnabled ? (
                  <div className="menu-catalog-card-actions">
                    <button type="button" className="solid-button" onClick={() => addItem(quickCartPayload, `${item.name} đã được thêm vào cart`)}>
                      Add to cart
                    </button>
                  </div>
                ) : null}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default MenuCatalogSection
