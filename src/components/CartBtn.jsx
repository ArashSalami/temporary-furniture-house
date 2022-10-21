import React from "react";
import { useCartContext } from "../context/cartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartBtn = ({ onClick }) => {
  const { total_items } = useCartContext();
  return (
    <Link to='/cart'>
      <StyledCartBtn onClick={onClick} type='button'>
        <FaShoppingCart className='cart-icon' />
        <p className='cart-value'>{total_items}</p>
      </StyledCartBtn>
    </Link>
  );
};

const StyledCartBtn = styled.button`
  background: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  color: var(--clr-grey-9);

  .cart-value {
    position: absolute;
    font-size: 0.6rem;
    font-weight: 600;
    background: var(--clr-primary-7);
    padding: 4px 8px;
    border-radius: 50%;
    top: -18px;
    right: -18px;
    color: var(--clr-grey-9);
  }
`;

export default CartBtn;
