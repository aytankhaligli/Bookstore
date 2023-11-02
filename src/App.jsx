import { useContext } from "react";
import { PasswordToggleProvider } from "./context/PasswordToggleContext";
import DashBoard from "./pages/DashBoard";
import LoginPage from "./pages/LoginPage";
import { LoginContext } from "./context/LoginContext";

function App() {
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <>
      {isLoggedIn ? (
        <DashBoard />
      ) : (
        <PasswordToggleProvider>
          <LoginPage />
        </PasswordToggleProvider>
      )}
    </>
  );
}

export default App;
