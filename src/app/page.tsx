import { cookies } from "next/headers";

import HomePage from "@/components/home-page";
import { UnitsProvider } from "@/context/units-context";

export default function Page({
  searchParams,
}: {
  searchParams: { city?: string };
}) {
  const cityFromCookie = cookies().get("city");

  const city = decodeURIComponent(
    searchParams.city ?? cityFromCookie?.value ?? "",
  );

  return (
    <UnitsProvider>
      <HomePage city={city} />
    </UnitsProvider>
  );
}
