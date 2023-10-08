import Button from "./Button";
import styles from "./Todo.module.css";

function Todo() {
  return (
    <li className={styles.todoWrapper}>
      <Button className={styles.circle}>
        <span></span>
      </Button>
      <p>
        Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor
        sit amet.
      </p>
      <Button className={styles.cross}>
        <img src="./images/icon-cross.svg" alt="Icon cross" />
      </Button>
    </li>
  );
}

export default Todo;
