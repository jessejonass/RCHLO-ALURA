import React from "react";
import { Link } from "react-router-dom";

import { Container, Content } from "./styles";

export default function NotFound() {
  return (
    <Container>
      <Content>
        <h1>Página não encontrada</h1>
        <p>
          Desculpe, parece que a página que você está procurando já não existe
          mais. Por favor, continue navegando ou confira nossas sugestões
          abaixo.
        </p>

        <Link to="/">Quero ir para a Página inicial</Link>
      </Content>
    </Container>
  );
}
