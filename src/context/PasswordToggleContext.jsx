import { createContext, useState } from "react";

const PasswordToggleContext = createContext();

const PasswordToggleProvider = ({ children }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <PasswordToggleContext.Provider value={{ showPassword, togglePassword }}>
      {children}
    </PasswordToggleContext.Provider>
  );
};

export { PasswordToggleProvider, PasswordToggleContext };
