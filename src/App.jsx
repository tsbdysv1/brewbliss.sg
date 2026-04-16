import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import CollectionPage from './pages/CollectionPage'
import HomePage from './pages/HomePage'
import MenuItemDetailPage from './pages/MenuItemDetailPage'
import MenuPage from './pages/MenuPage'
import SignatureMenuPage from './pages/SignatureMenuPage'
import NotFoundPage from './pages/NotFoundPage'
import StoresPage from './pages/StoresPage'
import CartPage from './pages/CartPage'
import CartToast from './components/CartToast'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/signature" element={<SignatureMenuPage />} />
        <Route path="/menu/:categorySlug/:slug" element={<MenuItemDetailPage />} />
        <Route path="/menu/:slug" element={<MenuItemDetailPage />} />
        <Route path="/store" element={<Navigate to="/cua-hang" replace />} />
        <Route path="/cua-hang" element={<StoresPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/khong-tim-thay" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/khong-tim-thay" replace />} />
      </Routes>
      <CartToast />
    </>
  )
}

export default App
