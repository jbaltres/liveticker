import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  border: none;
  height: 84px;
  width: 33px;
  text-align: center;
  border-radius: 50px;
  background-color: ${props =>
    props.close ? "rgb(37, 206, 198)" : "rgb(255, 58, 80)"};
  margin: 10px 0px;
`;
function ActionButton({ bgColor, children }) {
  return <Button close={bgColor}>{children}</Button>;
}

export default ActionButton;
