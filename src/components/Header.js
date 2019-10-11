import React from "react";
import styled from "styled-components";
import Logo from "../icons/Logo.js";

const Title = styled.header`
  height: 80px;
  width: 375px;
  background-color: rgb(0, 0, 0);
  margin: 0;
  display: flex;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(37, 206, 197, 1), black) 50 15%;
`;

const LogoContainer = styled.div`
  align-items: center;
  margin: 15px 15px;
  flex-direction: column;
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

const Menu = styled.img``;

function Header() {
  return (
    <Title>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Headline>EventListener</Headline>
      <Menu></Menu>
    </Title>
  );
}

export default Header;
