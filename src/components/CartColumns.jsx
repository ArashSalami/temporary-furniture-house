import React from "react";
import styled from "styled-components";

const CartColumns = () => {
  return (
    <Wrapper>
      <div className='content'>
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .content {
    display: grid;
    grid-template-columns: 316px 1fr 1fr 1fr auto;
    justify-items: center;
    padding-bottom: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default CartColumns;
