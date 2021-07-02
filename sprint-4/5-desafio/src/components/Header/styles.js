import styled from 'styled-components';

export const Main = styled.header`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

export const Container = styled.div`
  margin: auto;
  width: 95%;
  max-width: 1200px;
`;

export const HeaderDesktop = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const HeaderMobile = styled.div`
  display: none;
  margin-bottom: 25px;

  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

export const HeaderDrawer = styled.button`
  display: ${props => props.active ? 'block' : 'none'};
  background: none;
  border: none;

  /* width: 24px; */
  opacity: 54%;
  text-transform: lowercase;
  font-size: 0.5625rem;
  font-weight: 400;
  line-height: 0;
`;

export const HeaderLogo = styled.h1`
  height: 70px;
  line-height: 70px;
  text-align: center;

  @media (max-width: 1200px) {
    flex-grow: 1;
  }

  img {
    height: 25px;
    transform: translateY(10px);
  }
`;

export const HeaderSearch = styled.div`
  position: relative;

  img{
    width: 24px;
    opacity: 26%;
    top: 8px;
    position: absolute;
    padding-left: 10px;
    color: rgba(0, 0, 0, 0.26);
    line-height: 40px;
  }

  input {
    height: 40px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.23);
    padding-left: 40px;
    transition: ease-in-out 0.1s;

    &:hover {
      border-color: #000;
    }

    &::placeholder {
      font-size: 0.9375rem;
      font-weight: 600;
      font-family: "Open Sans";
      color: #9b9b9b;
    }
  }
`;
