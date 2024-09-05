"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import clsx from "clsx";

import Hamburger from "../hamburger";
import StarIcon from "../star-icon";
import SearchBar from "../search-bar";
import Navigation from "../navigation";
import ChangeUnitsButton from "../change-units-button";

const Header = () => {
  const [isOpenHamburger, setIsOpenHamburger] = useState<boolean>(false);

  const searchParams = useSearchParams();

  return (
    <>
      <header className="flex items-center justify-between px-4 py-4 xs:px-9 xs:py-6">
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

          <div className="max-md:hidden">
            <ChangeUnitsButton className="ml-auto rounded-md border border-white px-4 py-1 text-white" />
          </div>
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
