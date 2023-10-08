import styles from "./DetailsBar.module.css";
import Button from "./Button";
import Filter from "./Filter";
import { useWidnowSize } from "../hooks/useWindowSize";

function DetailsBar() {
  const isMoble = useWidnowSize();

  return (
    <div className={styles.barContainer}>
      <p>5 items left</p>
      {isMoble && <Filter />}
      <Button>Clear Completed</Button>
    </div>
  );
}

export default DetailsBar;
