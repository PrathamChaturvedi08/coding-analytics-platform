import { createContext, useContext, useEffect, useState } from "react";

import { getToken, saveToken, removeToken } from "../services/tokenService";

import { getUser, saveUser, removeUser } from "../services/storageService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const [user, setUser] = useState(null);

  useEffect(() => {
    setToken(getToken());

    setUser(getUser());
  }, []);

  const login = (token, user) => {
    saveToken(token);

    saveUser(user);

    setToken(token);

    setUser(user);
  };

  const logout = () => {
    removeToken();

    removeUser();

    setToken(null);

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isAuthenticated: !!token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
