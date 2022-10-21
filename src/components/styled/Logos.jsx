import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.png";

export const HeaderLogo = () => {
  return (
    <StyledHeaderLogo>
      <img className='logo' src={logo} alt='Furniture House' />
    </StyledHeaderLogo>
  );
};

const StyledHeaderLogo = styled.div`
  width: 30%;
  min-width: 150px;
  justify-self: center;
  grid-area: a;
  .logo {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    justify-self: start;
  }

  @media screen and (max-width: 767px) {
    justify-self: center;
    grid-area: a;
  }
`;

export const FooterLogo = () => {
  return (
    <StyledFooterLogo>
      <img className='logo' src={logo} alt='Furniture House' />
    </StyledFooterLogo>
  );
};

const StyledFooterLogo = styled.div`
  width: 30%;
  min-width: 150px;
  justify-self: center;

  .logo {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    justify-self: start;
  }
  @media screen and (max-width: 768px) {
    grid-area: a;
    justify-self: start;
  }
`;
