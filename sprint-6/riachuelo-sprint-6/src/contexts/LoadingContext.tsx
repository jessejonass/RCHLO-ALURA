import React from 'react';

interface ILoadingContextProps {
    addRequest: () => void;
    removeRequest: () => void;
    isLoading: () => boolean;
}

const LoadingContext = React.createContext<ILoadingContextProps>({} as ILoadingContextProps);

export default LoadingContext;