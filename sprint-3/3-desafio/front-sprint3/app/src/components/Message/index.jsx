import React from 'react';
import { useMessage } from '../../hooks/useMessage';

import './styles.css';

export default function Message({ message }) {
  const { type, title } = message;
  const { visible, removeMessage } = useMessage();

  return (
    <div className={
      `message__content message__content--${type} message__content--${visible}`
    }>
      <strong>{title}</strong>

      <button 
        className={`message__close message__close--${type}`} 
        onClick={() => removeMessage()}
      >
        X
      </button>
    </div>
  );
};
