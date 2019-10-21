import React from "react";
import styled from "styled-components";
import HamburgerIcon from "../icons/HamburgerIcon";

const MenuBox = styled.nav`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 275px;
  align-items: flex-end;
  padding: 10px;
  background: linear-gradient(rgb(75, 195, 230), rgb(229, 72, 138));
`;

const NavigationText = styled.li`
  font-size: 20px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);

  text-shadow: ${props => (props.active ? " 2px 3px 2px white" : "")};
  list-style: none;
  margin-top: 25px;
`;

export default function MenuContainer(shadowColor) {
  return (
    <>
      <MenuBox>
        <HamburgerIcon />
        <NavigationText active={shadowColor}>EventListener</NavigationText>
        <NavigationText>Calendar</NavigationText>
        <NavigationText>Add New Event</NavigationText>
      </MenuBox>
    </>
  );
}
