import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles["footer-bigconteiner"]}>
          <img
            className={styles["footer-img"]}
            src="/images/24-forecast.svg"
            alt="24-forecast"
          />
          <ul className={styles["footer-list"]}>
            <li className={styles["footer-iteam"]}>
              <h3 className={styles["footer-location-title"]}>Address</h3>
              <div className={styles["footer-contmin"]}>
                <p className={styles["footer-text"]}>Svobody str. 35 Kyiv</p>
                <p className={styles["footer-text"]}>Ukraine</p>
              </div>
            </li>
            <li>
              <div className={styles["footer-mincontainer-link"]}>
                <h3 className={styles["footer-title"]}>Contact us</h3>
                <ul className={styles["footer-minilist"]}>
                  <li className={styles["footer-iteam"]}>
                    <a
                      className={styles["footer-link"]}
                      href="https://www.instagram.com/"
                    >
                      <img
                        className={styles["footer-logo"]}
                        src="/images/instagram.svg"
                        alt="instagram"
                      />
                    </a>
                  </li>
                  <li className={styles["footer-iteam"]}>
                    <a
                      className={styles["footer-link"]}
                      href="https://www.facebook.com/?locale=uk_UA"
                    >
                      <img
                        className={styles["footer-logo"]}
                        src="/images/facebook.svg"
                        alt="facebook"
                      />
                    </a>
                  </li>
                  <li className={styles["footer-iteam"]}>
                    <a
                      className={styles["footer-link"]}
                      href="https://www.whatsapp.com/?lang=uk"
                    >
                      <img
                        className={styles["footer-logo"]}
                        src="/images/whatsapp.svg"
                        alt="whatsapp"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
