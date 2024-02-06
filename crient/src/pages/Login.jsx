import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      const token = data.token;

      // Store the token in local storage
      localStorage.setItem("token", token);

      // Redirect to the profile page after successful login
      navigate("/profile");

      // Push the profile page onto the history stack
      window.history.pushState(null, "", "/profile");
    } catch (error) {
      setError(error.message);
    }
  };

  // Handle back button press
  window.onpopstate = function (event) {
    if (window.location.pathname === "/login") {
      // Redirect to another page in history if on login page
      window.history.go(-2); // Go back two pages in history
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white w-96">
        <h2 className="text-2xl font-bold text-yellow-500 mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-bold py-2 px-4 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
