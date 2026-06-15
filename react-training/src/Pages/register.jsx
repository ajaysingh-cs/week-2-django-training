import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const response = await fetch(
      "http://127.0.0.1:8000/api/register/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );

    const data = await response.json();

    alert(data.message || data.error);

    if (response.ok) {
      window.location.href = "/login";
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="btn btn-success"
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
  );
}

export default Register;