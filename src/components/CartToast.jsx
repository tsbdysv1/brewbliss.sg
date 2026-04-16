import { useCart } from '../context/CartContext'

function CartToast() {
  const { toastMessage } = useCart()

  return (
    <div className={`cart-toast${toastMessage ? ' is-visible' : ''}`} aria-live="polite" aria-atomic="true">
      <div className="cart-toast-chip">{toastMessage}</div>
    </div>
  )
}

export default CartToast
