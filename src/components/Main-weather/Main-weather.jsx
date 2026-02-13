import styles from "./Main-weather.module.css";
import { Hero } from "../Hero/Hero";
import { Weather } from "../Weather/Weather";
import { EightDayForecast } from "../Eight-day-forecast/Eight-day-forecast";
import { AllWeatherValues } from "../All-weather-values/All-weather-values";
import { HourlyForecast } from "../Hourly-forecast/Hourly-forecast";
import { InteractingPets } from "../Interacting-pets/Interacting-pets";
import { BeautifulNature } from "../Beautiful-nature/Beautiful-nature";

export const MainWeather = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <Weather />
      <AllWeatherValues />
      <HourlyForecast />
      <EightDayForecast />
      <InteractingPets />
      <BeautifulNature />
    </main>
  );
};
