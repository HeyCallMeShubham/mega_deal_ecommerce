import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/header-components/Header"
 
import ProductAbout from "./pages/ProductAbout"
import CheckoutPage from "./pages/checkout/CheckoutPage"
import Footer from "./components/footer-components/Footer"



function App() {


  return (
    <>

      <Routes>

 
        
        <Route element={<Footer />} >
        
        <Route element={<Header />} >

        <Route index path="/" element={<Home />} />

         <Route path="/aboutpage" element={<ProductAbout />} />
 
        </Route>
        </Route>

        <Route path="/checkout" element={<CheckoutPage />} />




      </Routes>

    </>
  )
}

export default App
