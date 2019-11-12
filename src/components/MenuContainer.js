import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MenuBox = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 70%;
  align-items: flex-end;
  padding: 15px;
  background: linear-gradient(rgba(75, 195, 230, 1), rgba(229, 72, 138, 0.7));
  position: fixed;
  right: 0;
  transition: transform 1s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(110%)")};
  z-index: 200;
  margin-top: 80px;
`;

const activeClassName = "active";
const StyledNavLink = styled(NavLink).attrs({
  activeClassName: activeClassName
})`
  &.${activeClassName} {
    color: rgb(251, 72, 123);
    text-shadow: white 2px 4px 2px;
  }
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
  text-shadow: ${props => (props.active ? " 2px 3px 2px white" : "")};
  list-style: none;
  margin-top: 25px;
`;

export default function MenuContainer({ showMenu, handleMenuLink }) {
  return (
    <>
      <MenuBox open={showMenu}>
        <StyledNavLink
          onClick={() => handleMenuLink(!showMenu)}
          activeClassName="chosen"
          to="/home"
        >
          EventListener
        </StyledNavLink>
        <StyledNavLink
          onClick={() => handleMenuLink(!showMenu)}
          activeClassName="chosen"
          to="/new"
        >
          Neues Event
        </StyledNavLink>
        <StyledNavLink
          onClick={() => handleMenuLink(!showMenu)}
          activeClassName="chosen"
          to="/dayevents"
        >
          Kalender
        </StyledNavLink>
      </MenuBox>
    </>
  );
}
