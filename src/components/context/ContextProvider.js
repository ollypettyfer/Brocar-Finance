import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [homeLink, setHomeLink] = useState(false);

  return (
    <StateContext.Provider
      value={{
        homeLink,
        setHomeLink,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
