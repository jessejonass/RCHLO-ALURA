import { useContext } from "react";
import FilterContext from "../../contexts/FilterContext";
import Menu from "../Menu";

import {
  Main,
  Container,
  HeaderDesktop,
  HeaderMobile,
  HeaderDrawer,
  HeaderLogo,
  HeaderSearch,
} from "./styles";

function Header() {
  const { setFilter } = useContext(FilterContext);

  return (
    <Main>
      <Container>
        <HeaderMobile>
          <HeaderDrawer active>
            <img src={`${window.location.origin}/assets/menu.svg`} alt="menu" />
            <p>menu</p>
          </HeaderDrawer>

          <HeaderDrawer>
            <img
              src={`${window.location.origin}/assets/close.svg`}
              alt="fechar menu"
            />
            <p>fechar</p>
          </HeaderDrawer>
          <HeaderLogo>
            <img
              src={`${window.location.origin}/assets/rchlo.svg`}
              alt="Logo"
            />
          </HeaderLogo>
        </HeaderMobile>

        <HeaderDesktop>
          <HeaderLogo>
            <img
              src={`${window.location.origin}/assets/riachuelo.svg`}
              alt="Logo"
            />
          </HeaderLogo>
        </HeaderDesktop>

        <HeaderSearch>
          <img src="assets/search.svg" alt="lupa" />
          <input
            type="search"
            placeholder="O que você está procurando?"
            onChange={(event) => setFilter(event.target.value)}
          />
        </HeaderSearch>

        <Menu />
      </Container>
    </Main>
  );
}

export default Header;
