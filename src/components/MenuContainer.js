import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuBox = styled.nav`
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 70%;
  align-items: flex-end;
  padding: 15px;
  background: linear-gradient(rgba(75, 195, 230, 1), rgba(229, 72, 138, 0.7));
  position: fixed;
  right: 0;
  transition: transform 1s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 200;
`;

const NavigationText = styled.li`
  font-size: 20px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
  text-shadow: ${props => (props.active ? " 2px 3px 2px white" : "")};
  list-style: none;
  margin-top: 25px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function MenuContainer({ showMenu, handleMenuLink }) {
  return (
    <>
      <MenuBox open={showMenu}>
        <StyledLink onClick={() => handleMenuLink(!showMenu)} to="/home">
          <NavigationText>EventListener</NavigationText>
        </StyledLink>
        <StyledLink onClick={() => handleMenuLink(!showMenu)} to="/new">
          <NavigationText>Add New Event</NavigationText>
        </StyledLink>
        <StyledLink onClick={() => handleMenuLink(!showMenu)} to="/dayevents">
          <NavigationText>Calendar</NavigationText>
        </StyledLink>
        <StyledLink
          onClick={() => handleMenuLink(!showMenu)}
          to="/dayeventoverlay"
        >
          <NavigationText>New Calendar Entry </NavigationText>
        </StyledLink>
      </MenuBox>
    </>
  );
}
