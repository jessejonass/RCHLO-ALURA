import styled from 'styled-components';

export const DetailsContainer = styled.div`
  margin: 0 auto;
  width: 85%;
  max-width: 1100px;
  padding: 16px;

  display: flex;
  justify-content: space-around;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  padding: 12px;
  width: 45%;

  @media (max-width: 900px) {
    width: 80%;
    margin: 0 auto;
  }
  display: flex;
  justify-content: center;
  height: 700px;

  img {
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45%;
  padding: 12px;

  @media (max-width: 900px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const InfoHeader = styled.div`
  height: 50%;
  width: 100%;
  padding: 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoHeaderTitle = styled.h1`
  font-weight: 600;
  font-size: 1.6875rem;
  line-height: 1.167;
  margin-bottom: 16px;
`;

export const InfoHeaderColorPicker = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 2px solid black;
  background: #f6f6f6;
  margin: 16px 0;
`;

export const InfoHeaderSizes = styled.div`
  display: flex;
`;

export const InfoHeaderSize = styled.button`
  border: 1px solid #ddd;
  background: inherit;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  font-weight: 600;
  transition: ease-in-out 0.1s;
  margin-top: 12px;

  &:not(:last-child) {
    margin-right: 12px;
  }

  &:hover {
    background: #f6f6f6;
  }
`;

export const InfoBuy = styled.div`
  -webkit-box-shadow: 1px 4px 12px 2px rgba(0,0,0,0.64);
  box-shadow: 1px 4px 12px 2px rgba(0,0,0,0.64);
  height: 40%;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 12px;
`;

export const Price = styled.strong`
  color: red;
  font-weight: 500;
  font-size: 1.6875rem;
`;

export const Actions = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Button = styled.button`
  background: ${props => props.type === 'primary' && 'green'};
  background: ${props => props.type === 'cancel' && 'red'};

  color: #fff;
  border: none;
  border-radius: 4px;
  height: 42px;
  margin-bottom: 8px;
`;
