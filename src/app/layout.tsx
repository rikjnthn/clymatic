import type { Metadata } from "next";
import clsx from "clsx";

import "../style/globals.css";
import { poppins } from "@/fonts";

export const metadata: Metadata = {
  title: "Clymatic",
  description: "Weather App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(poppins.className, "2xl:mx-auto 2xl:max-w-screen-2xl")}
      >
        {children}
      </body>
    </html>
  );
}
