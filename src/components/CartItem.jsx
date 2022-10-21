import React from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { formatPrice } from "../utils/helperFns";
import AmountButtons from "./AmountButtons";
import { useCartContext } from "../context/cartContext";

const CartItem = ({ amount, color, name, price, image, id }) => {
  const { toggleAmount, removeItem } = useCartContext();
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };
  return (
    <Wrapper>
      <div className='title'>
        <img className='img' src={image} alt={name} />
        <div>
          <h5 className='name'>{name}</h5>
          <p className='color'>
            Color: <span style={{ backgroundColor: color }}></span>
          </p>
          <p className='price-small'>{formatPrice(price)}</p>
        </div>
      </div>
      <p className='price'>{formatPrice(price)}</p>
      <AmountButtons className='toggle' increase={increase} decrease={decrease} amount={amount} />
      <p className='subtotal'>{formatPrice(amount * price)}</p>
      <button type='button' onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 316px 1fr 1fr 1fr auto;
  grid-template-rows: 75px;
  margin: 2rem 0;
  align-items: center;
  justify-items: center;
  .title {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: 1rem;
    justify-self: start;
    img {
      border-radius: 5px;
      height: 75px;
      width: 100px;
    }
    .name {
      font-size: 0.8rem;
    }
  }
  .color {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
      width: 0.75rem;
      height: 0.75rem;
      display: inline-block;
      border-radius: 3px;
    }
  }
  .price-small {
    display: none;
  }
  .amount {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 225px auto auto;
    .amount {
      font-size: 1rem;
    }
    .amount-btn {
      font-size: 0.6rem;
    }
    .subtotal,
    .price {
      display: none;
    }

    .price-small {
      display: block;
    }
  }
`;

export default CartItem;
