import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/header-components/Header"
import Footer from "./components/footer-components/Footer"



function App() {


  return (
    <>

      <Routes>

        <Route  element={<Footer />} >
        <Route  element={<Header />} >
        
         <Route index path="/" element={<Home />} />
        
        </Route>
 
        </Route>



      </Routes>

    </>
  )
}

export default App
