import styles from "./InputBar.module.css";
import Button from "./Button";

function InputBar() {
  return (
    <div className={styles.barContainer}>
      <Button>
        <span></span>
      </Button>
      <div className={styles.inputWrapper}>
        <input type="text" name="add-todo" />
      </div>
    </div>
  );
}

export default InputBar;
