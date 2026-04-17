import { Link, Navigate } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { formatMenuPrice } from '../data/menu'
import { siteConfig } from '../data/site'
import { usePageSeo } from '../hooks/usePageSeo'
import { useCart } from '../context/CartContext'

function CartPage() {
  const { items, totalPrice, itemCount, updateQuantity, removeItem, clearCart } = useCart()

  usePageSeo({
    title: `Cart | ${siteConfig.brandName}`,
    description: 'Xem lại những món bạn đã chọn tại BrewBliss Coffee, gồm tuỳ chọn món, số lượng và tổng tiền.',
    jsonLd: siteConfig.defaultJsonLd,
    pathname: '/cart',
    image: siteConfig.seo.defaultImage,
  })

  if (!siteConfig.features.cartEnabled) {
    return <Navigate to="/menu" replace />
  }

  return (
    <div className="page-shell cart-page-shell">
      <SiteHeader />

      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Cart' }]} />

      <section className="section-block cart-page-section" aria-labelledby="cart-page-title">
        <div className="cart-page-header">
          <div className="cart-page-header-topline">
            <h1 id="cart-page-title">Cart</h1>
            {items.length ? <span className="cart-page-count-pill">{itemCount} items</span> : null}
          </div>
          <p className="cart-page-subtitle">Các món bạn đã chọn sẽ được giữ lại trên thiết bị này ngay cả khi tải lại trang.</p>
        </div>

        {!items.length ? (
          <div className="cart-empty-state">
            <p>Giỏ hàng của bạn đang trống.</p>
            <Link to="/menu" className="solid-button">
              Xem menu
            </Link>
          </div>
        ) : (
          <div className="cart-page-content">
            <div className="cart-list" aria-label="Cart items">
              {items.map((item) => (
                <article key={item.id} className="cart-line-item">
                  <div className="cart-line-main">
                    <div className="cart-line-copy">
                      <div className="cart-line-top">
                        <h2>{item.name}</h2>
                        <strong>{formatMenuPrice(item.priceValue * item.quantity)}</strong>
                      </div>

                      <ul className="cart-option-list">
                        {item.options.bean ? <li><span>Hạt</span><strong>{item.options.bean}</strong></li> : null}
                        {item.options.milk ? <li><span>Sữa</span><strong>{item.options.milk}</strong></li> : null}
                        {item.options.sugar ? <li><span>Đường</span><strong>{item.options.sugar}</strong></li> : null}
                        {item.options.temperature ? <li><span>Hot / Ice</span><strong>{item.options.temperature}</strong></li> : null}
                        {item.options.note ? <li><span>Note</span><strong>{item.options.note}</strong></li> : null}
                      </ul>
                    </div>
                  </div>

                  <div className="cart-line-controls">
                    <label className="cart-quantity-control">
                      <span>Số lượng</span>
                      <div className="cart-quantity-stepper">
                        <button type="button" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} aria-label={`Giảm số lượng ${item.name}`}>
                          −
                        </button>
                        <strong>{item.quantity}</strong>
                        <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label={`Tăng số lượng ${item.name}`}>
                          +
                        </button>
                      </div>
                    </label>

                    <button type="button" className="cart-remove-button" onClick={() => removeItem(item.id)}>
                      Remove item
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="cart-summary-row">
              <button type="button" className="outline-button cart-clear-button" onClick={clearCart}>
                Clear cart
              </button>
              <div className="cart-total-block">
                <span>Total</span>
                <strong>{formatMenuPrice(totalPrice)}</strong>
              </div>
              <a href={siteConfig.instagramLink} target="_blank" rel="noreferrer" className="solid-button cart-checkout-button">
                Order via Instagram
              </a>
            </div>

            <div className="cart-mobile-sticky-bar" aria-label="Cart total summary">
              <div className="cart-mobile-sticky-copy">
                <span>Total</span>
                <strong>{formatMenuPrice(totalPrice)}</strong>
              </div>
              <a href={siteConfig.instagramLink} target="_blank" rel="noreferrer" className="solid-button cart-mobile-checkout-button">
                Order now
              </a>
            </div>
          </div>
        )}
      </section>

      <SiteFooter />
    </div>
  )
}

export default CartPage
