import styles from "./Header.module.css";

function header() {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>Todo</p>
      <div>
        <img src="./images/icon-sun.svg" alt="Sun icon" />
      </div>
    </header>
  );
}

export default header;
