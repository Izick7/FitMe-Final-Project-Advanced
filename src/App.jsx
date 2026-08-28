import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Cart from "./components/Cart"
import CheckoutSubscriptionPage from "./components/CheckoutSubscriptionPage"
import CheckoutScheduledOrderPage from "./components/CheckoutScheduledOrderPage"
import ProductsPage from "./components/ProductsPage"
import SearchResultsPage from "./components/SearchResultsPage"


function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkoutSubscription" element={<CheckoutSubscriptionPage />} />
            <Route path="/checkoutScheduledOrder" element={<CheckoutScheduledOrderPage />} />
            <Route path="/products/:id" element={<ProductsPage />} />
            <Route path="/searchResults" element={<SearchResultsPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
      </AuthProvider>
    </>
  )
}

export default App
