import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src="/images/24-forecast.svg" alt="24-forecast" />
      <ul>
        <li>
          <h3></h3>
          <p></p>
        </li>
        <li>
          <h3></h3>
          <ul>
            <li>
              <a href="https://www.instagram.com/">
                <img src="/images/instagram.svg" alt="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/?locale=uk_UA">
                <img src="/images/facebook.svg" alt="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.whatsapp.com/?lang=uk">
                <img src="/images/whatsapp.svg" alt="whatsapp" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};
