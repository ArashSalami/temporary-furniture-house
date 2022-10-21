import styled from "styled-components";
import LoginBtn from "./LoginBtn";
import CartBtn from "./CartBtn";
import { useUserContext } from "../context/userContext";
import LogoutBtn from "./LogoutBtn";

const CartAuthContainer = () => {
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <StyledCartAuthContainer>
      <CartBtn />
      {myUser ? (
        <LogoutBtn onClick={() => logout({ returnTo: window.location.origin })} />
      ) : (
        <LoginBtn onClick={loginWithRedirect} />
      )}
    </StyledCartAuthContainer>
  );
};

const StyledCartAuthContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 3rem;
  grid-area: c;
  @media screen and (max-width: 767px) {
    gap: 2rem;
    grid-area: c;
  }
`;

export default CartAuthContainer;
