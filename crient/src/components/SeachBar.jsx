// SearchBar.js
import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

const SearchBar = () => {
  return (
    <div className="relative text-gray-600 flex">
      <input
        type="search"
        name="search"
        placeholder="Search"
        className="bg-white h-8 px-3  rounded text-sm border border-yellow-500 focus:outline-none"
      />

      <div className=" text-yellow-500 p-1 h-8 text-2xl border rounded-r border-yellow-500">
        <HiOutlineSearch />
      </div>
    </div>
  );
};

export default SearchBar;
