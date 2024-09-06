"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

import SearchIcon from "../search-icon";

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");

  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!search.trim()) return;

    const searchParams = new URLSearchParams();
    searchParams.set("city", encodeURIComponent(search));

    router.push(`${pathname}?${searchParams.toString()}`);

    setSearch("");
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full max-w-sm items-center overflow-clip rounded-full border border-dark-gray bg-white pl-4 pr-2.5 max-md:py-0.5 md:max-w-xs"
      role="form"
    >
      <input
        onChange={(e) => setSearch(e.currentTarget.value)}
        className="h-full w-full text-sm md:text-base"
        type="text"
        name="city"
        placeholder="City..."
        value={search}
      />
      <SearchIcon />
    </form>
  );
};

export default SearchBar;
