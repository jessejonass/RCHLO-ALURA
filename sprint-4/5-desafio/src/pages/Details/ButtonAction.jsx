import React from 'react';

import {
  Button
} from './styles';

export default function ButtonAction({ type, children }) {
  return (
    <Button type={type}>
      {children}
    </Button>
  );
};
