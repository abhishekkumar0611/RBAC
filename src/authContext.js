import { createContext, useContext } from 'react';
import { useAuthStore } from './store/useAuthStore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { user, login, logout, hasPermission } = useAuthStore();
  return (
    <AuthContext.Provider value={{ user, login, logout, hasPermission }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
