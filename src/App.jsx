import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import MenuItemDetailPage from './pages/MenuItemDetailPage'
import NotFoundPage from './pages/NotFoundPage'
import StoresPage from './pages/StoresPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu/:slug" element={<MenuItemDetailPage />} />
      <Route path="/cua-hang" element={<StoresPage />} />
      <Route path="/khong-tim-thay" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/khong-tim-thay" replace />} />
    </Routes>
  )
}

export default App
