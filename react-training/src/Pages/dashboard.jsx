import { useEffect, useState } from "react";

function Dashboard() {
  const [dashboard, setDashboard] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("access");

    fetch("http://127.0.0.1:8000/api/dashboard/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDashboard(data);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "/login";
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">
        Product Management Dashboard
      </h2>

      <h4 className="mb-4">
        {dashboard.message}
      </h4>

      <div className="row">
        <div className="col-md-4">
          <div className="card text-center shadow p-3">
            <h5>Total Products</h5>
            <h2>{dashboard.total_products}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow p-3">
            <h5>Total Value</h5>
            <h2>₹{dashboard.total_value}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow p-3">
            <h5>Average Price</h5>
            <h2>₹{dashboard.average_price}</h2>
          </div>
        </div>
      </div>

      <button
        className="btn btn-danger mt-4"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;