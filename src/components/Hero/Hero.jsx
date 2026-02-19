import { useState } from "react";
import styles from "./Hero.module.css";
import { fetchCurrentWeather } from "../../api/weatherApi";

export const Hero = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    const trimmedCity = city.trim();
    if (trimmedCity === "") return;
    const data = await fetchCurrentWeather(trimmedCity);
    onSearch(data);
    setCity("");
  };



  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles["hero-container"]}>
          <h1 className={styles["hero-title"]}>Weather dashboard</h1>
          <ul className={styles["hero-list"]}>
            <li className={styles["hero-iteam"]}>
              <p className={styles["hero-text"]}>
                Create your personal list of favorite cities and always be aware
                of the weather.
              </p>
            </li>
            <li className={styles["hero-iteam"]}>
              <p className={styles["hero-minitext"]}>
                October 2023 Friday, 13th
              </p>
            </li>
          </ul>
          <div className={styles["hero-search-container"]}>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search location..."
              type="text"
              className={styles["hero-input"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
