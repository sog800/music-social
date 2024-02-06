import React, { useEffect, useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Post from "../components/Post";
import { Navigate } from "react-router-dom";

export default function Profile() {
  const [loggedOut, setLoggedOut] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found in local storage");
        }

        const response = await fetch("http://localhost:3000/users/profile", {
          method: "GET",
          headers: {
            Authorization: token,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }

        const data = await response.json();
        console.log(data);
        setProfileData(data);
        setLoading(false); // Set loading to false after successful fetch
      } catch (error) {
        setError(error.message);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchProfileData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedOut(true);
  };

  if (loggedOut) {
    return <Navigate to="/" />;
  }

  // Display loading message while loading
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {token ? (
        <>
          <ProfileHeader profileData={profileData} onLogout={handleLogout} />
          <div className="bg-gray-100 min-h-screen pt-24">
            {" "}
            {/* Add padding top to account for the fixed header */}
            {error && <div>Error: {error}</div>}
            <div className="container mx-auto mt-8">
              {/* Render posts or other components here */}
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              {/* Add more posts or components as needed */}
            </div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </>
      ) : (
        <Navigate to="/registered" />
      )}
    </>
  );
}
