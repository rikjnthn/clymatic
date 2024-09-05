"use client";
import React from "react";

import ErrorIllustration from "../../public/error.svg";
import Image from "next/image";

const Error = () => {
  return (
    <div className="height-full grid place-items-center">
      <div className="flex flex-col items-center">
        <Image className="w-52" src={ErrorIllustration} alt="" />

        <div className="mb-4 mt-16 text-2xl font-bold md:text-4xl">
          Something Went Wrong
        </div>
        <div>An unexpected error has occurred</div>
      </div>
    </div>
  );
};

export default Error;
