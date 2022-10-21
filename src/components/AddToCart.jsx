import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import AmountButtons from "./AmountButtons";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const { addToCart } = useCartContext();

  const increase = () => {
    setAmount((prevState) => {
      let tempAmount = prevState + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((prevState) => {
      let tempAmount = prevState - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper className='colors'>
      <span className='bold'>Colors:</span>
      <div className='colorBtns-container'>
        {colors.map((color, index) => {
          return (
            <button
              onClick={() => setSelectedColor(color)}
              className={` ${selectedColor === color ? "color-btn active" : "color-btn"}`}
              id={id}
              key={index}
              style={{ backgroundColor: color }}
            >
              {selectedColor === color && <FaCheck className='icon' />}
            </button>
          );
        })}
      </div>
      <div className='btn-container'>
        <AmountButtons increase={increase} decrease={decrease} amount={amount} />
        <Link
          onClick={() => addToCart(id, selectedColor, amount, product)}
          className='btn'
          to='/cart'
        >
          Add To Cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  .colors {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .colorBtns-container {
    display: flex;
    gap: 0.5rem;
  }
  .color-btn {
    border-radius: 50%;
    height: 1.5rem;
    width: 1.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.4;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
`;

export default AddToCart;
