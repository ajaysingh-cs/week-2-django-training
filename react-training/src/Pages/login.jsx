import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch(
      "http://127.0.0.1:8000/api/token/",
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

    console.log(data);

    if (data.access) {
      localStorage.setItem("access", data.access);
      alert("Login Successful");
      window.location.href = "/dashboard";
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

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
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;