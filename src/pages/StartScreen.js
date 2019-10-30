import React from "react";
import styled from "styled-components";
import Logo from "../icons/Logo.js";

const StyledLogo = styled(Logo)`
  width: 300px;
  height: 300px;
`;

const Margin = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 150px;
  animation: turner 4s infinite linear;
  @keyframes turner {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
`;

const BodyStartpage = styled.div`
  background-color: black;
  height: 100vh;
`;

export default function StartScreen() {
  return (
    <BodyStartpage>
      <Margin>
        <StyledLogo />
      </Margin>
    </BodyStartpage>
  );
}
