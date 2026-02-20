import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { MainWeather } from "./components/Main-weather/Main-weather";
import { Footer } from "./components/Footer/Footer";
import { SignUp } from "./components/Sign-up/Sign-up";
import { LogoutModal } from "./components/Logout-modal/Logout-modal";
import { fetchCurrentWeather, fetchHourlyForecast } from "./api/weatherApi";

function App() {
  const [cities, setCities] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  // стартове місто
  useEffect(() => {
    getWeather("Kyiv");
  }, []);

  async function getWeather(cityName) {
    try {
      const weatherData = await fetchCurrentWeather(cityName);

      // якщо місто не знайдено — просто нічого не робимо
      if (!weatherData || !weatherData.sys) return;

      setCities((prev) => {
        const filtered = prev.filter((c) => c.id !== weatherData.id);
        return [weatherData, ...filtered].slice(0, 3);
      });

      const forecastData = await fetchHourlyForecast(cityName);

      if (!forecastData || !forecastData.list) return;

      const formatted = forecastData.list.slice(0, 8).map((item) => ({
        time: item.dt_txt.slice(11, 16),
        temp: item.main.temp,
      }));

      setHourlyData(formatted);
    } catch (error) {
      console.error(error);
    }
  }

  function handleLogout() {
    setUser(null);
    setIsLogoutOpen(false);
  }

  return (
    <>
      <Header
        user={user}
        openModal={() => setIsModalOpen(true)}
        openLogout={() => setIsLogoutOpen(true)}
      />

      <MainWeather
        cities={cities}
        onSearch={getWeather}
        hourlyData={hourlyData}
      />

      <Footer />

      {isModalOpen && (
        <SignUp closeModal={() => setIsModalOpen(false)} setUser={setUser} />
      )}

      {isLogoutOpen && (
        <LogoutModal
          closeModal={() => setIsLogoutOpen(false)}
          logout={handleLogout}
        />
      )}
    </>
  );
}

export default App;
