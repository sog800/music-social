import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Register from "./Register";

export default function Registered() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  return <>{!token ? <Register /> : <Navigate to="/" />}</>;
}
