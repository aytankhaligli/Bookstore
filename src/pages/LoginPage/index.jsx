import styles from "./LoginPage.module.css";
import logo from "../../assets/alfresco-logo.svg";
import Input from "../../components/Input";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { PasswordToggleContext } from "../../context/PasswordToggleContext";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
function LoginPage() {
  const { showPassword } = useContext(PasswordToggleContext);
  const { signIn } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  useEffect(() => {
    if (usernameTouched) setUsernameError(username === "" ? "Required" : "");
    if (username === " ")
      setUsernameError("Your username needs to be at least 2 characters.");
  }, [username, usernameTouched]);

  useEffect(() => {
    if (passwordTouched)
      setPasswordError(password === "" ? "Enter your password to sign in" : "");
  }, [password, passwordTouched]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameTouched(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordTouched(true);
  };

  const login = (e) => {
    e.preventDefault();
    signIn(username, password);
  };

  return (
    <div className={styles.login_page}>
      <div className={styles.login_card}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.errorBox}>
          <p className={styles.errorText}></p>
        </div>
        <form>
          <Input
            type="text"
            value={username}
            placeholder="Username"
            errorText={usernameError}
            onChange={handleUsernameChange}
          />
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Password"
            icon={showPassword ? faEye : faEyeSlash}
            errorText={passwordError}
            onChange={handlePasswordChange}
          />
          <button
            type="submit"
            className={`${styles.button} ${styles.button_raised}`}
            disabled={username && password ? false : true}
            onClick={login}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
