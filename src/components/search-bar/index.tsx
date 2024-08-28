"use client";
import React from "react";

import SearchIcon from "../search-icon";

const SearchBar = () => {
  return (
    <form className="flex w-full items-center overflow-clip rounded-full border border-dark-gray bg-white pl-4 pr-2.5 max-md:py-0.5">
      <input
        className="h-full w-full text-sm md:text-base"
        type="text"
        placeholder="City..."
      />
      <SearchIcon />
    </form>
  );
};

export default SearchBar;
