import styles from "./Button.module.css";

function ButtonCheck({ children, className }) {
  return <button className={`${className} ${styles.btn}`}>{children}</button>;
}

export default ButtonCheck;
