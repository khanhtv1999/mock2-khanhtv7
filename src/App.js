import Navbar from "./components/NavbarComponent/Navbar";
import HomePage from "./pages/pages general/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShareLayout from "./components/ShareLayoutComponent/ShareLayout";
import ProductDetailPage from "./pages/pages user/ProductDetailPage/ProductDetailPage";
import CartPage from "./pages/pages user/CartPage/CartPage";
import CheckoutPage from "./pages/pages user/CheckoutPage/CheckoutPage";
import Profile from "./components/ProfileComponent/Profile";
import ProfilePage from "./pages/pages user/ProfilePage/ProfilePage";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import ShareSidebar from "./components/ShareSidebar/ShareSidebar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products/:productId" element={<ProductDetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          {/* <Route path="profile" element={<ProfilePage />} /> */}

          <Route path="profile" element={<ShareSidebar />}>
            <Route index element={<ProfilePage />} />
            <Route path="history-order" element={<OrderHistory />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
};

export default App;
