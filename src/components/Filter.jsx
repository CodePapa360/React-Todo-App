import styles from "./Filter.module.css";
import Button from "./Button";
import { useDispatch } from "react-redux";
import {
  filterActive,
  filterAll,
  filterCompleted,
} from "../features/todoSlice";

import { useSelector } from "react-redux/es/hooks/useSelector";

function Filter() {
  const dispatch = useDispatch();
  const toFiltered = useSelector((state) => state.todo.filter);

  function handleAllFilter() {
    dispatch(filterAll());
  }

  function handleActiveFilter() {
    dispatch(filterActive());
  }

  function handleCompletedFilter() {
    dispatch(filterCompleted());
  }

  return (
    <div className={styles.filter}>
      <Button
        className={toFiltered === "all" ? "btnActive" : ""}
        onClick={handleAllFilter}
      >
        All
      </Button>
      <Button
        className={toFiltered === "active" ? "btnActive" : ""}
        onClick={handleActiveFilter}
      >
        Active
      </Button>
      <Button
        className={toFiltered === "completed" ? "btnActive" : ""}
        onClick={handleCompletedFilter}
      >
        Completed
      </Button>
    </div>
  );
}

export default Filter;
