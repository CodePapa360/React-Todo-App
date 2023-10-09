import { useSelector } from "react-redux";
import Todo from "./Todo";
import styles from "./TodoList.module.css";
import { selectFilteredTodos } from "../features/todoSlice";

function TodoList() {
  const filteredTodos = useSelector(selectFilteredTodos);

  return (
    <ul className={styles.todoContainer}>
      {filteredTodos.length === 0 ? (
        <p className={styles.emptyText}>Empty</p>
      ) : (
        filteredTodos.map((todo) => <Todo todo={todo} key={todo.id} />)
      )}
    </ul>
  );
}

export default TodoList;
