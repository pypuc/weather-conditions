import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { MainWeather } from "./components/Main-weather/Main-weather";
import { Footer } from "./components/Footer/Footer";
import { SignUp } from "./components/Sign-up/Sign-up";
import { LogoutModal } from "./components/Logout-modal/Logout-modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [cities, setCities] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isModalOpen || isLogoutOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen, isLogoutOpen]);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

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

  function handleLogout() {
    localStorage.removeItem("user");
    setUser(null);
    setIsLogoutOpen(false);
  }

  let signUpModal = null;
  if (isModalOpen) {
    signUpModal = (
      <SignUp closeModal={() => setIsModalOpen(false)} setUser={setUser} />
    );
  }

  let logoutModal = null;
  if (isLogoutOpen) {
    logoutModal = (
      <LogoutModal
        closeModal={() => setIsLogoutOpen(false)}
        logout={handleLogout}
      />
    );
  }

  return (
    <>
      <Header
        openModal={() => setIsModalOpen(true)}
        openLogout={() => setIsLogoutOpen(true)}
        user={user}
      />

      <MainWeather cities={cities} onSearch={handleSearch} />
      <Footer />

      {signUpModal}
      {logoutModal}
    </>
  );
}

export default App;
