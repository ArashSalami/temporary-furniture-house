import React from "react";
import { BsStarHalf, BsStarFill, BsStar } from "react-icons/bs";
import styled from "styled-components";

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? <BsStarFill /> : stars >= number ? <BsStarHalf /> : <BsStar />}
      </span>
    );
  });
  console.log(tempStars);

  return (
    <Wrapper>
      <div className='stars'>{tempStars}</div>
      <p>({reviews} Customer Reviews) </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  span {
    color: #ffb900;
    margin-right: 0.3rem;
  }
`;

export default Stars;
