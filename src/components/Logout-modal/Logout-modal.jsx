import styles from "./Logout-modal.module.css";

export const LogoutModal = ({ closeModal, logout }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles["modal-containerbig"]}>
          <h2 className={styles["modal-maintitle"]}>Вийти з акаунта?</h2>

          <div className={styles.buttons}>
            <button className={styles["modal-button"]} onClick={logout}>
              Так
            </button>

            <button className={styles["modal-button"]} onClick={closeModal}>
              Ні
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
