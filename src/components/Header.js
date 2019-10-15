import React from "react";
import styled from "styled-components";
import Logo from "../icons/Logo.js";

const Title = styled.header`
  height: 80px;
  width: 100vw;
  background-color: rgb(0, 0, 0);
  margin: 0;
  display: flex;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(37, 206, 197, 1), black) 50 15%;
`;

const StyledLogo = styled(Logo)`
  margin: 15px;
`;

const Headline = styled.h1`
  font-size: 25px;
  color: rgb(37, 206, 197);
  margin-left: 40px;
  padding-top: 8px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serifw;
`;

function Header() {
  return (
    <Title>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <Headline>EventListener</Headline>
    </Title>
  );
}

export default Header;
