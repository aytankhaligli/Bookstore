import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Input.module.css";
import { useContext } from "react";
import { PasswordToggleContext } from "../../context/PasswordToggleContext";

function Input({ type, placeholder, value, onChange, icon, errorText }) {
  const { togglePassword } = useContext(PasswordToggleContext);
  return (
    <div className={styles.inputBox}>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`${
          errorText ? `${styles.input} ${styles.error_border}` : styles.input
        }`}
      />
      {icon && (
        <span className={styles.eyeIcon} onClick={togglePassword}>
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      <span className={styles.error}>{errorText}</span>
    </div>
  );
}

export default Input;
