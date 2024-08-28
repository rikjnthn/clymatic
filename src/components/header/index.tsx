"use client";
import React, { useState } from "react";

import Hamburger from "../hamburger";
import StarIcon from "../star-icon";
import SearchBar from "../search-bar";
import Navigation from "../navigation";

const Header = () => {
  const [isOpenHamburger, setIsOpenHamburger] = useState<boolean>(false);

  return (
    <>
      <header className="flex justify-between px-4 pt-4 xs:px-9 xs:py-6">
        <div className="md:hidden">
          <Hamburger onClick={() => setIsOpenHamburger(true)} />
        </div>

        <div className="flex w-2/3 items-center gap-4">
          <StarIcon />
          <div className="w-full md:hidden">
            <SearchBar />
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
