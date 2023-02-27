import React from "react";
import {createContext, useContext, useState} from "react";

const Context = createContext();

const Provider = ({children}) => {
  const [user, setUser] = useState(
    localStorage.getItem("sessionId")
      ? {
          username: localStorage.getItem("username") ? localStorage.getItem("username") : null,
        }
      : null
  );
  const data = {
    user,
    setUser,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useUserContext = () => useContext(Context);

export default Provider;
