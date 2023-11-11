import { useContext } from "react";
import { PasswordToggleProvider } from "./context/PasswordToggleContext";
import LoginPage from "./pages/LoginPage";
import { LoginContext } from "./context/LoginContext";
import MainPage from "./pages/MainPage";

function App() {
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <>
      {isLoggedIn ? (
        <MainPage />
      ) : (
        <PasswordToggleProvider>
          <LoginPage />
        </PasswordToggleProvider>
      )}
    </>
  );
}

export default App;
