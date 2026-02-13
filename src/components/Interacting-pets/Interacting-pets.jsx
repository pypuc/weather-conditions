import styles from "./Interacting-pets.module.css";

export const InteractingPets = () => {
  return (
    <section className={styles.wrapper}>
      <h2>Interacting with our pets</h2>
      <ul>
        <li>
          <img src="/images/dog.png" alt="dog" />
          <p>Rescue pups pose as ghosts in festive photo shoot</p>
        </li>
        <li>
          <img src="/images/cat.png" alt="cat" />
          <p>Cat interrupts morning coffee on sunny Washington morning</p>
        </li>
        <li>
          <img src="/images/big-dog.png" alt="big-dog" />
          <p>New study finds dogs pay more attention to women</p>
        </li>
        <li>
          <img src="/images/face-big-dog.png" alt="face-big-dog" />
          <p>Petting dogs gives health benefit, even if they are not yours</p>
        </li>
        <button>See more</button>
      </ul>
    </section>
  );
};
