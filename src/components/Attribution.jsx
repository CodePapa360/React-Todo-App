import styles from "./Attribution.module.css";

function Attribution() {
  return (
    <footer>
      <div className={styles.attributionWrapper}>
        <p className={styles.attribution}>
          <span>
            Coded by
            <a
              className={styles.attbLink}
              href="https://twitter.com/CodePapa360"
              target="_blank"
              rel="noreferrer"
            >
              Alamin
            </a>
          </span>
          <span>
            Challenge by
            <a
              className={`${styles.attbLink} ${styles.attbFem}`}
              href="https://www.frontendmentor.io/profile/CodePapa360"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Attribution;
