import React from 'react';

interface IMessageContextProps {
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const MessageContext = React.createContext<IMessageContextProps>({} as IMessageContextProps);

export default MessageContext;