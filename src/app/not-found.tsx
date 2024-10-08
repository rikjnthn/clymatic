import React from "react";
import Image from "next/image";
import Link from "next/link";

import NotFoundIllustration from "../../public/black/not-found.svg";

const NotFound = () => {
  return (
    <div className="height-full flex flex-col items-center justify-center">
      <Image src={NotFoundIllustration} alt="" />

      <div className="mt-4 text-center md:mx-20">
        The requested page was not found
      </div>

      <Link
        href="/"
        className="mt-4 rounded-md bg-secondary-base px-4 py-3 text-white hover:bg-secondary-light active:bg-secondary-dark"
      >
        Go to home
      </Link>
    </div>
  );
};

export default NotFound;
