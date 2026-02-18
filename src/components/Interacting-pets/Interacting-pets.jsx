import { useEffect, useState } from "react";
import styles from "./Interacting-pets.module.css";

const API_KEY = "50870503-c2d8068ee53ef019121c927e8";
const PER_PAGE = 4;

export const InteractingPets = () => {
  const [pets, setPets] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPets();
  }, [page]);

  const fetchPets = async () => {
    const res = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=dogs+cats+pets&image_type=photo&per_page=${PER_PAGE}&page=${page}`,
    );
    const data = await res.json();
    const updatedPets = [];
    for (let i = 0; i < pets.length; i++) {
      updatedPets.push(pets[i]);
    }
    for (let i = 0; i < data.hits.length; i++) {
      updatedPets.push(data.hits[i]);
    }
    setPets(updatedPets);
  };


  return (
    <section className={styles.pets}>
      <div className="container">
        <h2 className={styles["pets-title"]}>Interacting with our pets</h2>

        <ul className={styles["pets-list"]}>
          {pets.map((pet) => (
            <li key={pet.id} className={styles["pets-iteam"]}>
              <img
                className={styles["pets-img"]}
                src={pet.webformatURL}
                alt={pet.tags}
              />
              <p className={styles["pets-text"]}>{pet.tags}</p>
            </li>
          ))}
        </ul>
        <button
          className={styles["pets-button"]}
          onClick={() => setPage((prev) => prev + 1)}
          disabled={isLoading}
        >
          {isLoading && "Loading..."}
          {!isLoading && "See more"}
        </button>
      </div>
    </section>
  );
};
