import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cartContext";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  console.log(cart);
  return (
    <Wrapper className=' section-center section'>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className='link-container'>
        <Link className='btn' to='/products'>
          Continue Shopping
        </Link>
        <button type='button' className='btn-secondary' onClick={clearCart}>
          Clear Cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
  }
  .header {
    display: flex;
    gap: 2rem;
    justify-content: space-around;
    border-bottom: 1px solid var(--clr-grey-8);
    padding-bottom: 2rem;
  }
`;
export default CartContent;
