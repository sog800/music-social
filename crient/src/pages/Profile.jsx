import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import Post from "../components/Post";
import Login from "./Login";

export default function Profile() {
  let logedOut = true;
  return (
    <>
      {logedOut ? (
        <div className="bg-gray-100 min-h-screen">
          <ProfileHeader />
          <div className="container mx-auto mt-8">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

            {/* Add more posts or components as needed */}
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}
