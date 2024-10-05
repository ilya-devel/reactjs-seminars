// import './App.css'
// import './assets/style.css'
import './assets/fonts.css'
import './App.sass'

import HeaderNav from "./components/HeaderNav"
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import CatalogPage from './components/CatalogPage'
import ProductPage from './components/ProductPage'
import RegistrationPage from './components/RegistrationPage'
import CartPage from './components/CartPage'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <HeaderNav />
      {/* <Link to={'/catalog'}>Catalog</Link>
      <Link to={'/product/1'}>Product</Link>
      <Link to={'/auth'}>Authentication</Link>
      <Link to={'/cart'}>Cart</Link> */}
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/auth' element={<RegistrationPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
