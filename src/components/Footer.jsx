import React from "react";
import styled from "styled-components";

import { FooterLogo } from "./styled/Logos";
import { FooterNavLinks } from "./styled/NavLinks";
import { SubscribeForm } from "./SubscribeForm";

const Footer = () => {
  return (
    <Wrapper>
      <div className='footer-container'>
        <FooterLogo />
        <FooterNavLinks />
        <div className='subscribe'>
          <h5>Subscribe To Get The Latest News!</h5>
          <SubscribeForm />
        </div>  
      </div>
      <div className='copyright'>
        <p>&copy;{new Date().getFullYear()} Furniture House. All Rights Reserved.</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: var(--clr-grey-8);
  .footer-container {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    padding: 3rem 1rem;
    align-items: center;

    background: var(--clr-gunmetal);
  }
  .subscribe {
    text-align: center;
    h5 {
      color: var(--clr-grey-9);

      margin-bottom: 1rem;
    }
  }
  .copyright {
    width: 100%;
    padding: 0.3rem 0;
    text-align: center;
    background: var(--clr-gunmetal-dark);
    grid-column: 1/-1;
    justify-self: center;
    margin: 0 auto;
    p {
      color: var(--clr-grey-9);
      font-size: 0.9rem;
    }
  }
  @media screen and (max-width: 1024px) {
    .footer-container {
      justify-self: start;
      grid-template-columns: 1fr 1fr;
      padding: 2rem 1rem;

      grid-template-areas:
        "a b"
        "c c";
    }
    .subscribe {
      margin: 2rem 0;
      grid-area: c;
      h5 {
        font-size: 0.8rem;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .footer-container {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "a b"
        "c c";

      justify-self: start;
    }
    .subscribe {
      grid-area: c;
      margin: 1.5rem 0;
      h5 {
        font-size: 0.8rem;
      }
    }
    .copyright {
      p {
        font-size: 0.8rem;
      }
    }
  }
`;

export default Footer;
