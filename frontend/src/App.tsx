import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header-components/Header";

import CheckoutPage from "./pages/checkout/CheckoutPage";
import Footer from "./components/footer-components/Footer";

import WishListPage from "./pages/wishlist/WishListPage";
import ProductDetails from "./pages/ProductDetails";
import UserCart from "./pages/cart/UserCart";
import UserProfilePage from "./pages/userProfile/UserProfilePage";
import EditUserInfo from "./components/userProfiles-components/EditUserInfo";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Footer />}>
          <Route element={<Header />}>
            <Route index path="/" element={<Home />} />

            <Route path="/productdetails" element={<ProductDetails />} />

            <Route path="/mywishlist" element={<WishListPage />} />

            <Route path="/account" element={<UserProfilePage />}>
           
              <Route index element={<EditUserInfo />} />{" "}

              {/* Default visible child */}
           
              <Route path="/account/edituserinfo" element={<EditUserInfo />} />{" "}
           
              <Route path="/account/orders" element={<div>Hello hello</div>} />{" "}

              {/* /account/edituserinfo */}
           
            </Route>

              <Route path="/user/account/edituserinfo" element={<EditUserInfo />} />{" "}

            <Route path="/cart" element={<UserCart />} />
          </Route>
        </Route>

        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  );
}

export default App;
