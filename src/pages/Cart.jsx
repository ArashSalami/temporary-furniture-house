import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartContent from "../components/CartContent";
import { useCartContext } from "../context/cartContext";

const Cart = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper>
        <div className='empty'>
          <h2>Cart is empty</h2>
          <Link className='btn' to='/products'>
            Products
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <CartContent />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 67.1vh;
  .empty {
    text-align: center;
    h2 {
      padding: 2rem 0;
    }
  }
`;

export default Cart;
