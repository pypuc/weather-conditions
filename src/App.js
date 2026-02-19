import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { MainWeather } from "./components/Main-weather/Main-weather";
import { Footer } from "./components/Footer/Footer";
import { SignUp } from "./components/Sign-up/Sign-up";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  useEffect(() => {
    getWeather("Kyiv");
  }, []);

  async function getWeather(name) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=f06d0ca7497260d0cabe683978fe9910`,
    );

    const data = await response.json();

    handleSearch(data);
  }

  const handleSearch = (weatherData) => {
    setCities((prev) => {
      const withoutDuplicates = prev.filter(
        (item) => item.id !== weatherData.id,
      );

      const newList = [weatherData, ...withoutDuplicates];

      return newList.slice(0, 3);
    });
  };

  return (
    <>
      <Header openModal={() => setIsModalOpen(true)} />
      <MainWeather cities={cities} onSearch={handleSearch} />
      <Footer />
      {isModalOpen && <SignUp closeModal={() => setIsModalOpen(false)} />}
    </>
  );
}

export default App;
