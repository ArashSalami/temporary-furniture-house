import React from "react";
import styled from "styled-components";
import { NavToggleBtn } from "./styled/Buttons";
import { HeaderLogo } from "./styled/Logos";
import { HeaderNavLinks } from "./styled/NavLinks";
import CartAuthContainer from "./CartAuthContainer";

const Header = () => {
  return (
    <Wrapper>
      <div className='header-container'>
        <HeaderLogo />
        <HeaderNavLinks className='nav-links' />
        <CartAuthContainer />

        <NavToggleBtn />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: var(--clr-grey-8);
  .header-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: "a b c";
    height: 8rem;
    align-items: center;
    padding: 1rem;
    /* background: var(--clr-grey-8); */

    background: var(--clr-gunmetal);
    @media screen and (max-width: 1024px) {
      padding: 1rem;
    }
    @media screen and (max-width: 767px) {
      /* grid-template-columns: 1fr 1fr 1fr; */
      grid-template-areas: "c a b";
    }
  }
  .cart-btn-container {
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 767px) {
    .nav-links {
      display: none;
    }
    .cart-btn-container {
    }
  }
`;

export default Header;
