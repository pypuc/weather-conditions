import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/images/24-forecast.svg" alt="24-forecast" />
      <ul>
        <li>Who we are</li>
        <li>Contacts</li>
        <li>Menu</li>
      </ul>
      <button type="button">Sign Up</button>
      <img src="/images/user.svg" alt="24-forecast" />
    </header>
  );
};
