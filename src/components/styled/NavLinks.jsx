import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../../context/productsContext";
import { useUserContext } from "../../context/userContext";

export const HeaderNavLinks = ({ className }) => {
  const { myUser } = useUserContext();
  return (
    <StyledHeaderNavLinks className={className}>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
        {myUser && (
          <li>
            <Link to='/checkout'>Checkout</Link>
          </li>
        )}
      </ul>
    </StyledHeaderNavLinks>
  );
};

const StyledHeaderNavLinks = styled.nav`
  position: relative;
  justify-self: center;
  grid-area: b;
  ul {
    display: flex;
    gap: 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    a {
      color: var(--clr-grey-9);
      position: relative;
      &::after {
        content: "";
        position: absolute;
        border-bottom: 2px solid var(--clr-primary-7);
        left: 0;
        bottom: 0;
        width: 0;
        transition: var(--transition);
      }
      &:hover::after {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 768px) {
  }
`;

export const SidebarNavLinks = ({ className }) => {
  const { closeSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  const clickHandler = () => {
    closeSidebar();
  };
  return (
    <StyledSidebarNavLinks className={className}>
      <ul>
        <li>
          <Link to='/' onClick={clickHandler}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/products' onClick={clickHandler}>
            Products
          </Link>
        </li>
        <li>
          <Link to='/cart' onClick={clickHandler}>
            Cart
          </Link>
        </li>
        {myUser && (
          <li>
            <Link to='/checkout'>Checkout</Link>
          </li>
        )}
      </ul>
    </StyledSidebarNavLinks>
  );
};

const StyledSidebarNavLinks = styled.nav`
  padding: 0 2rem;
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-size: 1rem;
    font-weight: 600;

    li {
      transition: var(--transition);

      &:hover {
        padding-left: 8px;
      }
    }
    a {
      color: var(--clr-grey-3);
      transition: var(--transition);
      position: relative;

      &::after {
        content: "";
        position: absolute;
        border-bottom: 2px solid var(--clr-primary-7);
        left: 0;
        bottom: 0;
        width: 0;
        transition: var(--transition);
      }
      &:hover::after {
        width: 100%;
      }
      &:hover {
        color: var(--clr-black);
      }
    }
  }
  @media screen and (max-width: 768px) {
  }
`;

export const FooterNavLinks = ({ className }) => {
  const { myUser } = useUserContext();

  return (
    <StyledFooterNavLinks className={className}>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
        {myUser && (
          <li>
            <Link to='/checkout'>Checkout</Link>
          </li>
        )}
      </ul>
    </StyledFooterNavLinks>
  );
};

const StyledFooterNavLinks = styled.nav`
  position: relative;
  justify-self: center;

  ul {
    display: grid;
    grid-template-columns: repeat(2, max(75px));

    place-items: center;
    gap: 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    li {
      font-size: 0.8rem;
    }
    a {
      color: var(--clr-grey-9);
      position: relative;
      &::after {
        content: "";
        position: absolute;
        border-bottom: 2px solid var(--clr-primary-7);
        left: 0;
        bottom: 0;
        width: 0;
        transition: var(--transition);
      }
      &:hover::after {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    ul {
      grid-template-columns: repeat(2, max(75px));
    }
  }
  @media screen and (max-width: 768px) {
    grid-area: b;

    ul {
      gap: 0.5rem;
      font-size: 0.8rem;
    }
  }
`;
