import React from "react";
import Image from "next/image";

import NotFoundIllustration from "../../../public/black/not-found.svg";
import Header from "../header";
import SearchBar from "../search-bar";

const NotFoundComponent = ({ city }: { city: string }) => {
  return (
    <div className="md:flex">
      <div className="h-full bg-page max-xs:pb-4 md:fixed md:w-1/3 md:max-w-md">
        <Header />
      </div>

      <div className="flex flex-col md:ml-auto md:w-2/3">
        <div className="w-full p-9 max-md:hidden">
          <nav className="flex w-full justify-between gap-4">
            <div className="flex items-center justify-between">
              <span className="select-none text-4xl font-bold text-primary-base">
                Clymatic
              </span>
            </div>

            <div>
              <SearchBar />
            </div>
          </nav>
        </div>

        <div className="mt-52 flex flex-col items-center justify-center">
          <Image src={NotFoundIllustration} alt="" role="presentation" />

          <div className="mt-4 text-center md:mx-20">{`${city} not found`}</div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundComponent;
