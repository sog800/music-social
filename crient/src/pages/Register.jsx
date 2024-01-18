// Signup.js
import React, { useState } from "react";
import mainImg from "../assets/mainImg.jpg";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
  });

  const [emailVerified, setEmailVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleEmailVerification = async () => {
    try {
      setLoading(true);
      // Simulate sending a verification email (replace with actual email verification logic)
      await new Promise((resolve) => setTimeout(resolve, 10000));

      // Email verified successfully
      setEmailVerified(true);
      alert(
        "Verification email sent. Please check your email and click on the verification link."
      );

      if (emailVerified) {
        null;
        // Add your logic to submit the form data here
      }
      console.log("Form submitted:", formData);
    } catch (error) {
      console.error("Error sending verification email:", error);
      alert("Error sending verification email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.verifyPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Check for email (verify email)
    handleEmailVerification();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-darkYellow text-white">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-yellow-900 text-center text-4xl mb-6">
          Music for the people
        </h2>
        <img src={mainImg} alt="Main" />
      </div>
      <div className="bg-white p-8 rounded shadow-md w-96">
        {loading ? (
          <h1 className="text-2xl font-bold mb-6 text-yellow-900">
            Sending email.....
          </h1>
        ) : (
          <h1 className="text-2xl font-bold mb-6 text-yellow-900">
            Create Account
          </h1>
        )}

        <form onSubmit={handleSubmit}>
          {!loading ? (
            <div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="johnhowkin@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="verify-password"
                >
                  Verify Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="verifyPassword"
                  type="password"
                  placeholder="Password"
                  value={formData.verifyPassword}
                  onChange={handleChange}
                />
              </div>
              <button
                className="bg-yellow-800 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center mb-6">
              <div className="lds-dual-ring"></div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
