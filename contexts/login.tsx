'use client';

import { User } from '@/types/user';
import { useRouter } from 'next/navigation';
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react';

interface AuthContextProps {
  user: User | null;
  accessToken: string | null;
  login: (userData: User, token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Provider do contexto
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Carregar os dados do usuário e o token do localStorage ao iniciar
  useEffect(() => {
    const storedUser: any = localStorage.getItem('user');
    const storedToken: any = localStorage.getItem('access_token');

    if (!!storedUser) {
      const user: User = JSON.parse(storedUser);
      setUser(user);
    }
    if (!!storedToken) {
      setAccessToken(storedToken);
    }

    if (!!storedUser && !!storedToken) {
      setIsAuthenticated(true);
    }
  }, []);

  // Função de login (salva o usuário e o token no localStorage)
  const login = (userData: User, token: string) => {
    console.log(userData);
    console.log(token);

    setUser(userData);
    setAccessToken(token);
    localStorage.setItem('user', JSON.stringify(userData)); // Salva o usuário no localStorage
    localStorage.setItem('access_token', token); // Salva o token no localStorage
    document.cookie = `access_token=${token}; path=/`;
    setIsAuthenticated(true);
  };

  // Função de logout (remove o usuário e o token do localStorage)
  const logout = () => {
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    setIsAuthenticated(false);
    router.push('/login');
  };

  return (
    <AuthContext.Provider
      value={{ user, accessToken, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar o AuthContext facilmente
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
