import Navbar from "./components/NavbarComponent/Navbar";
import HomePage from "./pages/pages general/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShareLayout from "./components/ShareLayoutComponent/ShareLayout";
import ProductDetailPage from "./pages/pages user/ProductDetailPage/ProductDetailPage";
import CartPage from "./pages/pages user/CartPage/CartPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products/:productId" element={<ProductDetailPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
