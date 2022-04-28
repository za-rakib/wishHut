import "./App.css";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import SingleProduct from "./pages/Product/SingleProduct";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success/Success";
function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        {/* home */}
        <Route exact path="/" element={<Home />}></Route>
        {/* product list */}
        <Route path="/products/:category" element={<ProductList />}></Route>
        {/* single product */}
        <Route path="/product/:id" element={<SingleProduct />}></Route>
        {/* cart */}
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/success" element={<Success />}></Route>
        {/* login */}
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        ></Route>
        {/* register */}
        <Route
          exact
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
