import { useEffect, useState } from "react";

function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("access");

    fetch("http://127.0.0.1:8000/api/dashboard/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access");
    window.location.href = "/login";
  };

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>

      <h4>{message}</h4>

      <button
        className="btn btn-danger mt-3"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;