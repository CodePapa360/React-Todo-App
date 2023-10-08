import styles from "./InputBar.module.css";
import ButtonCheck from "./ButtonCheck";

function InputBar() {
  return (
    <div className={styles.barContainer}>
      <ButtonCheck />
      <div className={styles.inputWrapper}>
        <input type="text" name="add-todo" />
      </div>
    </div>
  );
}

export default InputBar;
