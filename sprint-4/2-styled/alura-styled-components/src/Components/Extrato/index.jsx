import React from 'react';
import styled from 'styled-components';

import { extratoLista } from '../../info';

import { Box, Botao } from '../UI';
import Items from '../Items';

export default function Extrato() {
  return (
    <Box>
      {extratoLista.updates.map(e => (
        <Items 
          key={e.id} 
          type={e.type} 
          from={e.from} 
          value={e.value} 
          date={e.date} 
        />
      ))}
      <Botao>Ver mais</Botao>
    </Box>
  );
};
