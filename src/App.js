import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { MainWeather } from "./components/Main-weather/Main-weather";
import { Footer } from "./components/Footer/Footer";
import { SignUp } from "./components/Sign-up/Sign-up";
import { Login } from "./components/Login/Login";
import { LogoutModal } from "./components/Logout-modal/Logout-modal";
import { fetchCurrentWeather, fetchHourlyForecast } from "./api/weatherApi";

function App() {
  const [cities, setCities] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);
  const [eightDayData, setEightDayData] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [user, setUser] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  useEffect(() => {
    getWeather("Kyiv");
  }, []);

  async function getWeather(cityName) {
    try {
      const weatherData = await fetchCurrentWeather(cityName);
      if (!weatherData || !weatherData.id) return;

      // 🔥 Форматуємо дату з API
      const formattedDate = new Date(weatherData.dt * 1000).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "long",
          weekday: "long",
          day: "numeric",
        },
      );

      setCurrentDate(formattedDate);

      setCities((prev) => {
        const filtered = prev.filter((city) => city.id !== weatherData.id);
        return [weatherData].concat(filtered).slice(0, 3);
      });

      const forecastData = await fetchHourlyForecast(cityName);
      if (!forecastData || !forecastData.list) return;

      const formattedHourly = forecastData.list.slice(0, 8).map((item) => ({
        time: item.dt_txt.slice(11, 16),
        temp: Math.round(item.main.temp),
      }));

      setHourlyData(formattedHourly);

      const dailyArray = [];

      forecastData.list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0];
        const existingDay = dailyArray.find((day) => day.date === date);

        if (!existingDay) {
          dailyArray.push({
            date,
            min: item.main.temp_min,
            max: item.main.temp_max,
            description: item.weather[0].description,
            icon: item.weather[0].icon,
            dt: item.dt,
          });
        } else {
          existingDay.min = Math.min(existingDay.min, item.main.temp_min);
          existingDay.max = Math.max(existingDay.max, item.main.temp_max);
        }
      });

      const formattedDaily = dailyArray.slice(0, 8).map((day) => ({
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
      setShowDetails(false);
    } catch (error) {
      console.error(error);
    }
  }

  function handleDelete(id) {
    setCities((prev) => prev.filter((city) => city.id !== id));
  }

  function handleLogout() {
    setUser(null);
    setShowDetails(false);
    setIsLogoutOpen(false);
  }

  return (
    <>
      <Header
        user={user}
        openModal={() => setIsSignUpOpen(true)}
        openLogin={() => setIsLoginOpen(true)}
        openLogout={() => setIsLogoutOpen(true)}
      />

      <MainWeather
        cities={cities}
        onSearch={getWeather}
        hourlyData={hourlyData}
        eightDayData={eightDayData}
        user={user}
        showDetails={showDetails}
        setShowDetails={setShowDetails}
        openModal={() => setIsSignUpOpen(true)}
        onRefresh={getWeather}
        onDelete={handleDelete}
        currentDate={currentDate}
      />

      <Footer />

      {isSignUpOpen && (
        <SignUp
          closeModal={() => setIsSignUpOpen(false)}
          openLogin={() => {
            setIsSignUpOpen(false);
            setTimeout(() => setIsLoginOpen(true), 0);
          }}
          setUser={setUser}
        />
      )}

      {isLoginOpen && (
        <Login
          closeModal={() => setIsLoginOpen(false)}
          openSignUp={() => {
            setIsLoginOpen(false);
            setTimeout(() => setIsSignUpOpen(true), 0);
          }}
          setUser={setUser}
        />
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
