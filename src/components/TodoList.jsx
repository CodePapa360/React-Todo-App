import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList() {
  return (
    <ul className={styles.todoContainer}>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </ul>
  );
}

export default TodoList;
