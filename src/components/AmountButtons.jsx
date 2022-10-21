import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <Wrapper>
      <button className='amount-btn' onClick={decrease}>
        <FaMinus />
      </button>
      <p className='amount'>{amount}</p>
      <button className='amount-btn' onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 112px;
  align-items: baseline;
  justify-content: space-between;
  /* margin: 0 auto; */
  .amount-btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .amount {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    width: 75px;
  }
`;

export default AmountButtons;
