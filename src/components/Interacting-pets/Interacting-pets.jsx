import styles from "./Interacting-pets.module.css";

export const InteractingPets = () => {
  return (
    <section className={styles.pets}>
      <div className="container">
        <h2 className={styles["pets-title"]}>Interacting with our pets</h2>
        <ul className={styles["pets-list"]}>
          <li className={styles["pets-iteam"]}>
            <img
              className={styles["pets-img"]}
              src="/images/dog.png"
              alt="dog"
            />
            <p className={styles["pets-text"]}>
              Rescue pups pose as ghosts in festive photo shoot
            </p>
          </li>
          <li className={styles["pets-iteam"]}>
            <img
              className={styles["pets-img"]}
              src="/images/cat.png"
              alt="cat"
            />
            <p className={styles["pets-text"]}>
              Cat interrupts morning coffee on sunny Washington morning
            </p>
          </li>
          <li className={styles["pets-iteam"]}>
            <img
              className={styles["pets-img"]}
              src="/images/big-dog.png"
              alt="big-dog"
            />
            <p className={styles["pets-text"]}>
              New study finds dogs pay more attention to women
            </p>
          </li>
          <li className={styles["pets-iteam"]}>
            <img
              className={styles["pets-img"]}
              src="/images/face-big-dog.png"
              alt="face-big-dog"
            />
            <p className={styles["pets-text"]}>
              Petting dogs gives health benefit, even if they are not yours
            </p>
          </li>
        </ul>
        <button className={styles["pets-button"]}>See more</button>
      </div>
    </section>
  );
};
