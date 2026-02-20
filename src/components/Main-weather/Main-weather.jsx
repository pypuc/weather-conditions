import styles from "./Main-weather.module.css";
import { Hero } from "../Hero/Hero";
import { Weather } from "../Weather/Weather";
import { AllWeatherValues } from "../All-weather-values/All-weather-values";
import { HourlyForecast } from "../Hourly-forecast/Hourly-forecast";
import { EightDayForecast } from "../Eight-day-forecast/Eight-day-forecast";
import { InteractingPets } from "../Interacting-pets/Interacting-pets";
import { BeautifulNature } from "../Beautiful-nature/Beautiful-nature";

export const MainWeather = ({ cities, onSearch, hourlyData }) => {
  const firstCity = cities[0];

  return (
    <main className={styles.main}>
      <Hero onSearch={onSearch} />

      <Weather cities={cities} />

      {firstCity && <AllWeatherValues city={firstCity} />}

      <HourlyForecast hourlyData={hourlyData} />

      <EightDayForecast />

      <InteractingPets />

      <BeautifulNature />
    </main>
  );
};
