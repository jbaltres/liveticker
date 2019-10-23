import React from "react";
import styled from "styled-components";

const MenuBox = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50%;
  align-items: flex-end;
  padding: 10px;
  background: linear-gradient(rgb(75, 195, 230), rgb(229, 72, 138));
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
        <NavigationText active>EventListener</NavigationText>
        <NavigationText>Calendar</NavigationText>
        <NavigationText>Add New Event</NavigationText>
      </MenuBox>
    </>
  );
}
