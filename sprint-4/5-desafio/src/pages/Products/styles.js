import styled from 'styled-components';

export const ProducsPageContainer = styled.main`
  margin: 0 auto;
  width: 80%;
  max-width: 1100px;
  padding: 16px;
`;

export const Products = styled.section`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ProductsRow = styled.div`
  margin: 8px;
`;

export const ProductsList = styled.ol`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;
