import {createContext, useContext, useState} from "react";

const langContext = createContext();

const LanguageContext = ({children}) => {
  const [language, setLanguage] = useState("en-US");

  const data = {
    language,
    setLanguage,
  };

  return <langContext.Provider value={data}>{children}</langContext.Provider>;
};

export const useLanguageContext = () => useContext(langContext);

export default LanguageContext;
