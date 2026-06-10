import { useEffect, useState } from "react";

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/test/")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1>Welcome to Product Manager</h1>

      <h3>{message}</h3>
    </div>
  );
}

export default Home;