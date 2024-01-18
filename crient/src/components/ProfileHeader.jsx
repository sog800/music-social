// ProfileHeader.js
import React from "react";

const ProfileHeader = () => {
  return (
    <div className="bg-white shadow-md p-4 mb-8">
      <div className="flex items-center">
        <img
          src="https://placekitten.com/150/150" // Replace with your profile picture URL
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h1 className="text-2xl font-semibold">John Doe</h1>
          <p className="text-gray-600">@johndoe</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
