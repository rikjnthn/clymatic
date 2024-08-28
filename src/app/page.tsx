import Header from "@/components/header";
import WeatherInformation from "@/components/weather-information";
import WeatherSummary from "@/components/weather-summary";

export default function Home() {
  return (
    <div className="md:flex">
      <div className="h-full bg-page md:fixed md:w-1/3 md:max-w-md">
        <Header />
        <WeatherSummary />
      </div>

      <div className="relative h-full md:ml-auto md:w-2/3">
        <WeatherInformation />
      </div>
    </div>
  );
}
