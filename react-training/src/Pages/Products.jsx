import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const fetchProducts = () => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = () => {
    if (!name || !price) return;

    fetch("http://127.0.0.1:8000/api/add-product/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setName("");
        setPrice("");
        fetchProducts();
      });
  };

  const deleteProduct = (id) => {
    fetch(`http://127.0.0.1:8000/api/delete-product/${id}/`)
      .then((response) => response.json())
      .then(() => {
        fetchProducts();
      });
  };

  return (
    <div className="container mt-5">

      <h1 className="mb-4">Products Page</h1>

      <div className="card p-3 mb-4">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          className="form-control mb-2"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={addProduct}
        >
          Add Product
        </button>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>₹{product.price}</td>

              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    deleteProduct(product.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Products;