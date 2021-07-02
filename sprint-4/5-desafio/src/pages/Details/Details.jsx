import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import LoadingContext from "../../contexts/LoadingContext";
import MessageContext from "../../contexts/MessageContext";

import {
  DetailsContainer,
  ImageContainer,
  InfoContainer,
  InfoHeader,
  InfoHeaderTitle,
  InfoHeaderColorPicker,
  InfoHeaderSizes,
  InfoHeaderSize,
  InfoBuy,
  Price,
  Actions,
} from "./styles";

import ButtonAction from "./ButtonAction";

const sizes = [
  { size: 10 },
  { size: 12 },
  { size: 14 },
  { size: 16 },
  { size: 18 },
];

export default function Details() {
  const [product, setProduct] = useState({});
  const { setMessage } = useContext(MessageContext);
  const { addRequest, removeRequest } = useContext(LoadingContext);

  const { sku } = useParams();

  useEffect(() => {
    loadProducts();
  }, []); // eslint-disable-line

  async function loadProducts() {
    addRequest();
    fetch(`http://localhost:3333/products?sku=${sku}`)
      .then(r => r.json())
      .then(d => setProduct(d[0]))
      .catch(() => setMessage("Ocorreu um erro ao carregar o produto..."))
      .finally(() => removeRequest());
  }

  return (
    <DetailsContainer>
      <ImageContainer>
        <img src={product.image} alt="" />
      </ImageContainer>

      <InfoContainer>
        <InfoHeader>
          <InfoHeaderTitle>{product.name}</InfoHeaderTitle>

          <div>
            <strong>Selecionar cor: Branco</strong>
            <InfoHeaderColorPicker />
          </div>

          <div>
            <strong>Selecionar tamanho</strong>
            <InfoHeaderSizes>
              {sizes.map(s => (
                <InfoHeaderSize key={s.size}>{s.size}</InfoHeaderSize>
              ))}
            </InfoHeaderSizes>
          </div>
        </InfoHeader>

        <InfoBuy>
          <Price>R$ {product.price}</Price>

          <Actions>
            <ButtonAction type="primary">Comprar</ButtonAction>

            <ButtonAction type="cancel">Cancelar</ButtonAction>
          </Actions>
        </InfoBuy>
      </InfoContainer>
    </DetailsContainer>
  );
}
