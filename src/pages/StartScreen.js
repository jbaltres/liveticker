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

const sizer = keyframes`
  from {font-size: 45px;}
  to {font-size: 30px;}
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

const HeaderHider = styled.div`
  width: 100%;
  height: 65px;
  background-color: black;
  position: absolute;
  z-index: 10000;
`;

const Headline = styled.span`
  display: flex;
  justify-content: center;
  font-style: bold;
  margin-top: 24px;
  color: rgb(0, 195, 238);
  font-size: 45px;
  text-align: center;
  animation: ${sizer} 4.3s infinite linear;
  font-family: Arial, Helvetica, sans-serif;
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
        <>
          <HeaderHider>
            <Headline>Eventlistener</Headline>
          </HeaderHider>
          <BodyStartpage>
            <Margin>
              <StyledLogo />
            </Margin>
          </BodyStartpage>
        </>
      )}
    </>
  );
}
