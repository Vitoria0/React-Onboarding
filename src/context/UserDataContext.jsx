import React from "react";

export const UserDataContext = React.createContext();
import useSemiPersistentUserData from "../hooks/useSemiPersistentUserData";

const DEFAULT_DATA = {
  percentage: 0,
};

export const UserDataProvider = ({ children }) => {
  const [getInteractions, setInteractions] = useSemiPersistentUserData(
    "cmi.location",
    DEFAULT_DATA
  );

  return (
    <UserDataContext.Provider value={{ getInteractions, setInteractions }}>
      {children}
    </UserDataContext.Provider>
  );
};
