// ProfileHeader.js
import React from "react";

const ProfileHeader = ({ profileData, onLogout }) => {
  return (
    <header className="bg-white shadow-md p-4 mb-8 fixed top-0 w-full z-10">
      <div className="flex items-center container mx-auto">
        <img
          src="https://placekitten.com/150/150"
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          {profileData && (
            <>
              <h1 className="text-2xl font-semibold">
                {profileData.user.username}
              </h1>
              <p className="text-gray-600">@{profileData.user.username}</p>
            </>
          )}
        </div>
        <button
          onClick={onLogout}
          className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default ProfileHeader;
