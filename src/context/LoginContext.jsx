import axios from "axios";
import { createContext, useState } from "react";

const LoginContext = createContext();
const BASE_URL =
  "https://api-explorer.alfresco.com/alfresco/api/-default-/public/alfresco/versions/1";

function LoginContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [filesList, setFilesList] = useState("");
  console.log(filesList);
  const signIn = async (username, password) => {
    const base64Credentials = btoa(`${username}:${password}`);
    try {
      const response = await axios.post(
        "https://1curd3ms.trials.alfresco.com/alfresco/api/-default-/public/authentication/versions/1/tickets",
        { userId: username, password: password },
        {
          headers: {
            Authorization: `Basic ${base64Credentials}`,
            "Content-Type": "application/json",
          },
        }
      );

      const dataResponse = await axios.get(
        "https://1curd3ms.trials.alfresco.com/alfresco/api/-default-/public/alfresco/versions/1/nodes/382b3102-ffba-422e-8711-d7f330fb5468/children?maxItems=25&orderBy=isFolder%20desc%2Cname%20ASC&include=path%2Cproperties%2CallowableOperations%2Cpermissions%2CaspectNames%2CisFavorite%2Cdefinition&includeSource=true",
        {
          headers: {
            Authorization: `Basic ${base64Credentials}`,
          },
        }
      );

      console.log("Request successful");
      setIsLoggedIn(true);
      setFilesList(dataResponse.data.list.entries);
    } catch (error) {
      console.log("Request failed");
      console.error(error);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        signIn,
        filesList,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export { LoginContext, LoginContextProvider };
