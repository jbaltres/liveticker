import React from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../icons/Logo.js";
import { Redirect } from "react-router-dom";

const StyledLogo = styled(Logo)`
  width: 300px;
  height: 300px;
`;

const turner = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

const Margin = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 150px;
  animation: ${turner} 4s infinite linear;
`;

const BodyStartpage = styled.div`
  background-color: black;
  height: 100vh;
`;

export default function StartScreen() {
  const [toMain, setToMain] = React.useState(false);

  React.useEffect(() => {
    const handle = setTimeout(() => setToMain(true), 4200);

    return () => {
      clearTimeout(handle);
    };
  }, []);

  return (
    <>
      {toMain ? (
        <Redirect to="/home" />
      ) : (
        <BodyStartpage>
          <Margin>
            <StyledLogo />
          </Margin>
        </BodyStartpage>
      )}
    </>
  );
}
