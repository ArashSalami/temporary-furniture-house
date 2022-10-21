import styled from "styled-components";

import React from "react";
import { PrimaryBtn } from "./styled/Buttons";

export const SubscribeForm = () => {
  return (
    <StyledSubscribeForm>
      <input type='email' name='email' id='email' />
      <PrimaryBtn type='submit'>Subscribe</PrimaryBtn>
    </StyledSubscribeForm>
  );
};
const StyledSubscribeForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  input {
    padding: 0.4rem 0.5rem;
    width: 60%;

    background: var(--clr-grey-9);
    border: none;
    outline: none;
    border-radius: 3px;
  }
`;
