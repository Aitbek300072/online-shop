import React from 'react';

export const authContext = React.createContext();

const AuthContextProvider = ({ children }) => {

  return (
    <authContext.Provider
      value={{}}
    >
      {children}
    </authContext.Provider>
  );
};
export default AuthContextProvider;
