import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

          <Link className="navbar-brand" to="/">
            Product Manager
          </Link>

          <div>
            <Link
              className="btn btn-outline-light me-2"
              to="/"
            >
              Home
            </Link>

            <Link
              className="btn btn-outline-light me-2"
              to="/products"
            >
              Products
            </Link>

            <Link
              className="btn btn-outline-light"
              to="/about"
            >
              About
            </Link>
          </div>

        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;