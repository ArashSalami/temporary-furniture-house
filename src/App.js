import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import {
  Home,
  Error,
  Products,
  SingleProduct,
  Checkout,
  Cart,
  PrivateRoute,
  AuthWrapper,
} from "./pages";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <AuthWrapper>
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route
          path='/checkout'
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path='/login' element={<h3>Login Page</h3>} />
        <Route path='/products/:productId' element={<SingleProduct />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </AuthWrapper>
  );
}

export default App;
