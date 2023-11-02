import axios from "axios";
import { createContext, useState } from "react";

const LoginContext = createContext();
const BASE_URL =
  "https://api-explorer.alfresco.com/alfresco/api/-default-/public/alfresco/versions/1";

function LoginContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const logout = () => {
  //   // Perform logout actions (e.g., clearing cookies or tokens)
  //   setUser(null);
  //   setIsAuthenticated(false);
  // };

  const signIn = async (username, password) => {
    setIsLoggedIn(true);
    try {
      const response = await axios.get(`${BASE_URL}/audit-applications`);
      console.log("hello");
      console.log(response);
    } catch (error) {
      console.log("hello");
      console.log(error);
    }
  };
  return (
    <LoginContext.Provider value={{ isLoggedIn, signIn }}>
      {children}
    </LoginContext.Provider>
  );
}

export { LoginContext, LoginContextProvider };
