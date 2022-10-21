import React from "react";
import { BiUserCheck } from "react-icons/bi";
import styled from "styled-components";

export const LoginBtn = ({ onClick }) => {
  return (
    <StyledAuthBtn onClick={onClick} type='button'>
      <span>Login</span>
      <BiUserCheck className='auth-icon' />
    </StyledAuthBtn>
  );
};

const StyledAuthBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.5rem;
  color: var(--clr-grey-9);
  cursor: pointer;
  span {
    font-size: 0.9rem;
  }
`;

export default LoginBtn;
