import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Rice", price: 50 },
    { id: 2, name: "Sugar", price: 40 },
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState(null);

  const addProduct = () => {
    if (!name || !price) return;

    if (editId) {
      const updatedProducts = products.map((product) =>
        product.id === editId
          ? { ...product, name, price }
          : product
      );

      setProducts(updatedProducts);
      setEditId(null);
    } else {
      const newProduct = {
        id: Date.now(),
        name,
        price,
      };

      setProducts([...products, newProduct]);
    }

    setName("");
    setPrice("");
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const editProduct = (product) => {
    setName(product.name);
    setPrice(product.price);
    setEditId(product.id);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Product Manager</h2>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button
          className={`btn ${
            editId ? "btn-warning" : "btn-primary"
          }`}
          onClick={addProduct}
        >
          {editId ? "Update Product" : "Add Product"}
        </button>
      </div>

      <div className="card shadow mt-4 p-4">
        <h3 className="mb-3">Product List</h3>

        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th width="200">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>₹{product.price}</td>

                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => editProduct(product)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;