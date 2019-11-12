import React from "react";
import styled from "styled-components";
import Logo from "../icons/Logo.js";
import HamburgerIcon from "../icons/HamburgerIcon.js";

const Title = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  width: 100vw;
  background-color: rgb(0, 0, 0);
  margin: 0;
  border-width: 2px;
  border-style: dashed;
  border-image: linear-gradient(to right, rgba(37, 206, 197, 1), black) 50 15%;
  z-index: 400;
`;

const Headline = styled.h1`
  font-size: 25px;
  color: rgb(0, 195, 238);
  flex-grow: 1;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const StyledLogo = styled(Logo)`
  margin: 16px;
`;

const BurgerContainer = styled.div`
  color: transparent;
  transition: transform 1s ease-in-out;
  transform: ${({ open }) => (open ? "rotate(-90deg)" : "rotate(0)")};
  cursor: pointer;
  margin-right: 15px;
`;

function Header({ showMenu, onMenuIconClick }) {
  return (
    <Title>
      <StyledLogo />
      <Headline>EventListener</Headline>
      <BurgerContainer onClick={onMenuIconClick} open={showMenu}>
        <HamburgerIcon />
      </BurgerContainer>
    </Title>
  );
}

export default Header;
