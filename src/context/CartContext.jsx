import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CART_STORAGE_KEY = 'brewbliss-cart-v1'

const CartContext = createContext(null)

function safelyParseCart(rawValue) {
  if (!rawValue) return []

  try {
    const parsed = JSON.parse(rawValue)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function normalizeCartItem(input) {
  return {
    id: input.id,
    slug: input.slug,
    name: input.name,
    image: input.image,
    priceValue: Number(input.priceValue) || 0,
    quantity: Math.max(1, Number(input.quantity) || 1),
    options: {
      milk: input.options?.milk || '',
      sugar: input.options?.sugar || '',
      temperature: input.options?.temperature || '',
      note: input.options?.note || '',
    },
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [hasHydrated, setHasHydrated] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const storedItems = safelyParseCart(window.localStorage.getItem(CART_STORAGE_KEY)).map(normalizeCartItem)
    setItems(storedItems)
    setHasHydrated(true)
  }, [])

  useEffect(() => {
    if (!hasHydrated || typeof window === 'undefined') return
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [hasHydrated, items])

  const addItem = (payload, feedbackMessage) => {
    const normalizedItem = normalizeCartItem(payload)

    setItems((currentItems) => {
      const existingIndex = currentItems.findIndex((item) => item.id === normalizedItem.id)

      if (existingIndex >= 0) {
        return currentItems.map((item, index) => (
          index === existingIndex
            ? { ...item, quantity: item.quantity + normalizedItem.quantity }
            : item
        ))
      }

      return [...currentItems, normalizedItem]
    })

    setToastMessage(feedbackMessage || `${normalizedItem.name} đã được thêm vào cart`)
  }

  const updateQuantity = (itemId, nextQuantity) => {
    const safeQuantity = Math.max(1, Number(nextQuantity) || 1)
    setItems((currentItems) => currentItems.map((item) => (
      item.id === itemId ? { ...item, quantity: safeQuantity } : item
    )))
  }

  const removeItem = (itemId) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== itemId))
  }

  const clearCart = () => {
    setItems([])
    setToastMessage('Cart đã được làm mới')
  }

  useEffect(() => {
    if (!toastMessage) return undefined

    const timeoutId = window.setTimeout(() => {
      setToastMessage('')
    }, 2200)

    return () => window.clearTimeout(timeoutId)
  }, [toastMessage])

  const value = useMemo(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = items.reduce((sum, item) => sum + item.priceValue * item.quantity, 0)

    return {
      items,
      itemCount,
      totalPrice,
      toastMessage,
      setToastMessage,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    }
  }, [items, toastMessage])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
