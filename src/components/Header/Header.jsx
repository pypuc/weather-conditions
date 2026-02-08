import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>Who we are</li>
        <li>Contacts</li>
        <li>Menu</li>
      </ul>
      <button type="button">Sign Up</button>
    </header>
  );
};
