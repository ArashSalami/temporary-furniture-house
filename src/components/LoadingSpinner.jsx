import React from "react";
import styled from "styled-components";

const LoadingSpinner = () => {
  return (
    <Wrapper className='spinner-container'>
      <div className='loading-spinner'></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: 50vh;
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 10px solid var(--clr-grey-5);
    border-top: 10px solid var(--clr-primary-7);
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }
`;
export default LoadingSpinner;
