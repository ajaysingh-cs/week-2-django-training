function ProductForm({
  name,
  setName,
  price,
  setPrice,
  addProduct,
  editId,
}) {
  return (
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
  );
}

export default ProductForm;