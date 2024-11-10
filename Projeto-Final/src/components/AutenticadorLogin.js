import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const Autenticador = ({ children }) => {
  const [isAutenticado, setIsAutenticado] = useState(false);

  const login = () => {
    setIsAutenticado(true);
  }

  const logout = () => {
    setIsAutenticado(false);
  };

  return (
    <AuthContext.Provider value={{ isAutenticado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};