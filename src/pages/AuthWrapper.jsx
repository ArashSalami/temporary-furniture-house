import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import LoadingSpinner from "../components/LoadingSpinner";

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }
  return <>{children}</>;
};

const Wrapper = styled.div``;

export default AuthWrapper;
