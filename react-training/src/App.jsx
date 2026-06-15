import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./Pages/Register";

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
              className="btn btn-outline-light me-2"
              to="/about"
            >
              About
            </Link>

            <Link
              className="btn btn-warning"
              to="/login"
            >
              Login
            </Link>

            <Link
              className="btn btn-info me-2"
              to="/register"
            >
              Register
            </Link>

            <Link
              className="btn btn-success me-2"
              to="/dashboard"
            >
              Dashboard
            </Link>

            

          </div>

        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;