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
  const [eightDayData, setEightDayData] = useState([]);
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  useEffect(() => {
    getWeather("Kyiv");
  }, []);

  async function getWeather(cityName) {
    try {
      const weatherData = await fetchCurrentWeather(cityName);
      if (!weatherData || !weatherData.id) return;

      setCities((prev) => {
        const filtered = prev.filter((dat) => dat.id !== weatherData.id);
        return [weatherData, ...filtered].slice(0, 3);
      });

      const forecastData = await fetchHourlyForecast(cityName);
      if (!forecastData || !forecastData.list) return;

      // ===== HOURLY =====
      const formattedHourly = forecastData.list.slice(0, 8).map((item) => ({
        time: item.dt_txt.slice(11, 16),
        temp: Math.round(item.main.temp),
      }));

      setHourlyData(formattedHourly);

      // ===== 8 DAYS =====
      const dailyMap = {};

      forecastData.list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0];

        if (!dailyMap[date]) {
          dailyMap[date] = {
            min: item.main.temp_min,
            max: item.main.temp_max,
            description: item.weather[0].description,
            icon: item.weather[0].icon,
            dt: item.dt,
          };
        } else {
          dailyMap[date].min = Math.min(dailyMap[date].min, item.main.temp_min);
          dailyMap[date].max = Math.max(dailyMap[date].max, item.main.temp_max);
        }
      });

      const formattedDaily = Object.values(dailyMap)
        .slice(0, 8)
        .map((day) => ({
          date: new Date(day.dt * 1000).toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          }),
          min: Math.round(day.min),
          max: Math.round(day.max),
          description: day.description,
          icon: day.icon,
        }));

      setEightDayData(formattedDaily);
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
        eightDayData={eightDayData}
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
