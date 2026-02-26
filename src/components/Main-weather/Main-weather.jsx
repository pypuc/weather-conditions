import styles from "./Main-weather.module.css";
import { Hero } from "../Hero/Hero";
import { Weather } from "../Weather/Weather";
import { AllWeatherValues } from "../All-weather-values/All-weather-values";
import { HourlyForecast } from "../Hourly-forecast/Hourly-forecast";
import { EightDayForecast } from "../Eight-day-forecast/Eight-day-forecast";
import { InteractingPets } from "../Interacting-pets/Interacting-pets";
import { BeautifulNature } from "../Beautiful-nature/Beautiful-nature";

export const MainWeather = ({
  cities,
  onSearch,
  hourlyData,
  eightDayData,
  user,
  showDetails,
  setShowDetails,
  openModal,
  onRefresh,
  onDelete,
}) => {
  const firstCity = cities[0];

  const handleSeeMore = () => {
    if (!user) {
      openModal();
      return;
    }

    setShowDetails(true);
  };

  return (
    <main className={styles.main}>
      <Hero onSearch={onSearch} />

      <Weather
        cities={cities}
        onSeeMore={handleSeeMore}
        onRefresh={onRefresh}
        onDelete={onDelete}
      />

      {showDetails && firstCity && <AllWeatherValues city={firstCity} />}
      {showDetails && <HourlyForecast hourlyData={hourlyData} />}
      {showDetails && <EightDayForecast data={eightDayData} />}

      <InteractingPets />
      <BeautifulNature />
    </main>
  );
};
