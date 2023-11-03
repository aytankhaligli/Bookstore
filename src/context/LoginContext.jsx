import axios from "axios";
import { createContext, useState } from "react";

const LoginContext = createContext();
const BASE_URL =
  "https://api-explorer.alfresco.com/alfresco/api/-default-/public/alfresco/versions/1";

const customAxios = axios.create({
  baseURL: "https://1curd3ms.trials.alfresco.com", // Replace with your API server's URL
  headers: {
    "Access-Control-Allow-Origin": "*", // Replace with your allowed origins
    "Access-Control-Allow-Methods": "*", // Replace with your allowed methods
    "Access-Control-Allow-Headers": "*", // Replace with your allowed headers
    "Access-Control-Expose-Headers": "*", // Replace with your exposed headers
  },
});

function LoginContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signIn = async (username, password) => {
    try {
      const base64Credentials = btoa(`${username}:${password}`);

      const response = await customAxios.post(
        "/alfresco/api/-default-/public/authentication/versions/1/tickets",
        { userId: username, password: password },
        {
          headers: {
            Authorization: `Basic ${base64Credentials}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Request successful");
      setIsLoggedIn(true);
    } catch (error) {
      console.log("Request failed");
      console.error(error);
    }
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, signIn }}>
      {children}
    </LoginContext.Provider>
  );
}

export { LoginContext, LoginContextProvider };
