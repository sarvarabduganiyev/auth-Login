import { useState } from "react";
import { createContext } from "react";

export const TokenContext = createContext();
//window.localStorage.getItem("authToken")
export const TokenStore = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    window.localStorage.getItem("authToken")
  );
  return (
    <TokenContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </TokenContext.Provider>
  );
};
