import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/header-components/Header"
 
 
import CheckoutPage from "./pages/checkout/CheckoutPage"
import Footer from "./components/footer-components/Footer"
 
import WishListPage from "./pages/wishlist/WishListPage"
import ProductDetails from "./pages/ProductDetails"



function App() {


  return (
    <>

      <Routes>


        <Route element={<Footer />} >
        
        <Route element={<Header />} >

        <Route index path="/" element={<Home />} />
        <Route path="/productdetails" element={<ProductDetails />} />

        <Route path="/mywishlist" element={<WishListPage />} />
 
        </Route>
        </Route>

        <Route path="/checkout" element={<CheckoutPage />} />




      </Routes>

    </>
  )
}

export default App
