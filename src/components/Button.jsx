import styles from "./Button.module.css";

function Button({ children, className, onClick }) {
  return (
    <button onClick={onClick} className={`${className} ${styles.btn}`}>
      {children}
    </button>
  );
}

export default Button;
