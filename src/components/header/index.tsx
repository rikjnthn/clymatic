"use client";
import React, { useState } from "react";
import clsx from "clsx";

import Hamburger from "../hamburger";
import StarIcon from "../star-icon";
import SearchBar from "../search-bar";
import Navigation from "../navigation";
import { useSearchParams } from "next/navigation";

const Header = () => {
  const [isOpenHamburger, setIsOpenHamburger] = useState<boolean>(false);

  const searchParams = useSearchParams();

  return (
    <>
      <header className="flex items-center justify-between px-4 pt-4 xs:px-9 xs:py-6">
        <div className="flex md:hidden">
          <Hamburger onClick={() => setIsOpenHamburger(true)} />
        </div>

        <div className="ml-auto flex w-2/3 items-center justify-between gap-4 md:w-full">
          <div className={clsx({ hidden: !searchParams.has("city") })}>
            <StarIcon />
          </div>
          <div className="w-full md:hidden">
            <SearchBar />
          </div>

          <button
            className="ml-auto rounded-md border border-white px-4 py-1 text-white max-md:hidden"
            type="button"
            title={"Metrics units"}
          >
            metrics
          </button>
        </div>
      </header>

      <Navigation
        isOpenHamburger={isOpenHamburger}
        setIsOpenHamburger={setIsOpenHamburger}
      />
    </>
  );
};

export default Header;
