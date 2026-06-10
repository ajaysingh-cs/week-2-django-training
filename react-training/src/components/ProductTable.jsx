function ProductTable({
  products,
  editProduct,
  deleteProduct,
}) {
  return (
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

export default ProductTable;