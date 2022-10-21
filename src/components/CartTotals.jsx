import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";
import { formatPrice } from "../utils/helperFns";

const CartTotals = () => {
  const { myUser, loginWithRedirect } = useUserContext();
  const { shipping_fee, total_amount } = useCartContext();
  return (
    <Wrapper>
      <div>
        <article className='content'>
          <h5>
            Subtotal: <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            Shipping Fee: <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            Order Total: <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link className='btn login-btn' to='/checkout'>
            Proceed To Checkout
          </Link>
        ) : (
          <button className='btn login-btn' type='button' onClick={loginWithRedirect}>
            Login
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  .content {
    border: 1px solid var(--clr-grey-4);
    padding: 1rem 2rem;
    margin-bottom: 1rem;
    h5,
    p,
    h4 {
      display: grid;
      grid-template-columns: 200px 1fr;
      justify-content: space-between;
    }
    h5,
    p {
      margin-bottom: 1rem;
    }
    h4 {
      margin-top: 1rem;
    }
  }
  .login-btn {
    width: 100%;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
export default CartTotals;
