import React from "react";
import SearchBar from "./SeachBar";
import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";

export default function Header() {
  return (
    <>
      <div className="flex  w-fit gap-16 ">
        <SearchBar />
        <Link to="/" className=" text-2xl text-yellow-800">
          Home
        </Link>
        <Link to="/profile">
          <div className=" border border-yellow-600 rounded-full p-1 w-fit">
            <HiOutlineUser className=" text-4xl" />
          </div>
        </Link>
      </div>
    </>
  );
}
