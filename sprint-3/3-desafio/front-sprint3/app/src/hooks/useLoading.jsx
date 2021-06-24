import React, { 
  createContext, 
  useState, 
  useCallback, 
  useContext 
} from 'react';

const LoadingContext = createContext(null);

function LoadProvider({ children }) {
const [isLoading, setIsLoading] = useState(false);

const addRequest = useCallback(() => {
  setIsLoading(true);
}, []);

const removeRequest = useCallback(() => {
  setIsLoading(false);
}, []);


return (
    <LoadingContext.Provider value={{ isLoading, addRequest, removeRequest }}>
      {children}
    </LoadingContext.Provider>
  );
};

function useLoading() {
const context = useContext(LoadingContext);

if(!context) {
  throw new Error('useLoading must be used within LoadProvider');
}

return context;
}

export { LoadProvider, useLoading };