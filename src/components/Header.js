import React from "react";
import styled from "styled-components";
import Logo from "../icons/Logo.js";
import HamburgerIcon from "../icons/HamburgerIcon.js";

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

const Margin = styled.div`
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

const StyledLogo = styled(Logo)`
  margin: 15px;
`;

const Headline = styled.h1`
  font-size: 25px;
  color: rgb(0, 195, 238);

  flex-grow: 1;
  padding-top: 8px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serifw;
`;

const BurgerContainer = styled.button`
  color: transparent;
  transition: transform 1s ease-in-out;
  transform: ${({ open }) => (open ? "rotate(-90deg)" : "rotate(0)")};

  cursor: pointer;
`;

function Header({ open, setOpen }) {
  return (
    <Title>
      <Margin open={open}>
        <StyledLogo />
      </Margin>
      <Headline>EventListener</Headline>
      <BurgerContainer onClick={() => setOpen(!open)} open={open}>
        <HamburgerIcon />
      </BurgerContainer>
    </Title>
  );
}

export default Header;
