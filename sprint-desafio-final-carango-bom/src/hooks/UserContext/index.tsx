import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react';

import { v4 as uuid, validate } from 'uuid';

interface UserContextProps {
  email: string;
  isAuthenticated: boolean;
  signIn(userEmail: string, userPassword: string): void;
  signOut(): void;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

const UserProvider: React.FC = ({ children }) => {
  const [email, setEmail] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const carangoEmail = 'carango@email';
  const carangoToken = 'carango@token';

  const signOut = useCallback(() => {
    sessionStorage.removeItem(carangoEmail);
    sessionStorage.removeItem(carangoToken);
    setIsAuthenticated(false);
  }, []);

  useEffect(() => {
    async function loadUserInfo(): Promise<void> {
      const emailStorage = sessionStorage.getItem(carangoEmail);
      const tokenStorage = sessionStorage.getItem(carangoToken);

      let tokenIsValid = false;

      if (tokenStorage) tokenIsValid = validate(tokenStorage);

      if (tokenIsValid) {
        setEmail(JSON.stringify(emailStorage));
        setIsAuthenticated(true);
      }

      if (!tokenIsValid) signOut();
    }
    loadUserInfo();
  }, [signOut]);

  const signIn = useCallback((userEmal: string, userPassword: string) => {
    const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const emailIsValid = emailValidation.test(String(userEmal).toLowerCase());

    if (!emailIsValid || userPassword.length < 6) {
      alert('Credenciais inválidas'); // eslint-disable-line
    } else {
      const token = uuid();

      sessionStorage.setItem('carango@email', userEmal);
      sessionStorage.setItem('carango@token', token);
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <UserContext.Provider value={{ signIn, email, isAuthenticated, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

function useUser(): UserContextProps {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within on UserProvider');
  }

  return context;
}

export { UserProvider, useUser };
