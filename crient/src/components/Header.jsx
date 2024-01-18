import React from "react";
import SearchBar from "./SeachBar";
import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";

export default function Header() {
  return (
    <>
      <SearchBar />
      <Link to="/profile">
        <div className=" border border-yellow-600 rounded-full p-2">
          <HiOutlineUser className=" text-4xl" />
        </div>
      </Link>
    </>
  );
}
