import styles from "./DetailsBar.module.css";
import Button from "./Button";
import Filter from "./Filter";
import { useWidnowSize } from "../hooks/useWindowSize";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { clearCompletedTodos } from "../features/todoSlice";

function DetailsBar() {
  const itemsLeft = useSelector(
    (state) => state.todo.todos.filter((todo) => todo.done !== true).length
  );

  const dispatch = useDispatch();

  function handleClearCompleted() {
    dispatch(clearCompletedTodos());
  }

  const isMoble = useWidnowSize();

  return (
    <div className={styles.barContainer}>
      <p>{itemsLeft} items left</p>
      {isMoble && <Filter />}
      <Button onClick={handleClearCompleted}>Clear Completed</Button>
    </div>
  );
}

export default DetailsBar;
