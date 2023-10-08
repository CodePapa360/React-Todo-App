import styles from "./Filter.module.css";
import Button from "./Button";

function Filter() {
  return (
    <div className={styles.filter}>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </div>
  );
}

export default Filter;
