import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuBox = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50%;
  align-items: flex-end;
  padding: 10px;
  background: linear-gradient(rgba(75, 195, 230, 0.7), rgba(229, 72, 138, 0.7));
  position: fixed;
  right: 0;
  transition: transform 1s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
`;

const NavigationText = styled.li`
  font-size: 20px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
  text-shadow: ${props => (props.active ? " 2px 3px 2px white" : "")};
  list-style: none;
  margin-top: 25px;
`;

export default function MenuContainer({ open }) {
  return (
    <>
      <MenuBox open={open}>
        <Link to="/">
          <NavigationText active>EventListener</NavigationText>
        </Link>
        <Link to="/new">
          <NavigationText>Add New Event</NavigationText>
        </Link>
        <Link to="/dayevents">
          <NavigationText>Calendar</NavigationText>
        </Link>
      </MenuBox>
    </>
  );
}
