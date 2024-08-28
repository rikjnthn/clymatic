"use client";
import React from "react";
import clsx from "clsx";

import CloseIcon from "../close-icon";
import { SetStateType } from "@/interface";

const Navigation = ({
  isOpenHamburger,
  setIsOpenHamburger,
}: {
  isOpenHamburger: boolean;
  setIsOpenHamburger: SetStateType<boolean>;
}) => {
  return (
    <>
      <nav
        className={clsx("navigation w-3/4 bg-white xs:max-w-sm md:hidden", {
          "-translate-x-full": !isOpenHamburger,
        })}
      >
        <div className="flex items-center justify-between">
          <span className="select-none text-xl font-bold text-primary-base xs:text-2xl">
            Clymatic
          </span>
          <div className="md:hidden">
            <CloseIcon onClick={() => setIsOpenHamburger(false)} />
          </div>
        </div>

        <div className="my-9">
          <div>
            <span>Units</span>
            <div></div>
          </div>
        </div>

        <span className="mt-auto text-sm font-light">
          ©️2024, all right reserved
        </span>
      </nav>

      <div
        onClick={() => setIsOpenHamburger(false)}
        className={clsx(
          "dark-overlay bg-black bg-opacity-50",
          isOpenHamburger ? "fixed" : "hidden",
        )}
      />
    </>
  );
};

export default Navigation;
