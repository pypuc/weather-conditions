const API_KEY = "f06d0ca7497260d0cabe683978fe9910";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchCurrentWeather = async (city) => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`,
  );

  const data = await response.json();

  return data;
};
