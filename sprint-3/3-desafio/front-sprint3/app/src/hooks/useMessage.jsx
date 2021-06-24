import React, { 
  createContext, 
  useState, 
  useCallback, 
  useContext 
} from 'react';

import Message from '../components/Message';

const MessageContext = createContext(null);

function MessageProvider({ children }) {
  const [visible, setVisible] = useState('hidden');
  const [message, setMessage] = useState({});

  const addMessage = useCallback((type, title) => {
    setVisible('visible');

    setMessage({
      type,
      title,
    });
  }, []);

  const removeMessage = useCallback(() => {
    setVisible('hidden');

    setMessage({
      type: '',
      title: '',
    });
  }, []);

  return (
    <MessageContext.Provider value={{ addMessage, removeMessage, visible }}>
      {children}
      <Message message={message} />
    </MessageContext.Provider>
  );
};

function useMessage() {
const context = useContext(MessageContext);

if(!context) {
  throw new Error('useMessage must be used within MessageProvider');
}

return context;
}

export { MessageProvider, useMessage };