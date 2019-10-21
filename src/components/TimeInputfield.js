import React from "react";
import styled from "styled-components";

const TimeInput = styled.input`
  background-color: black;
  display: block;
  color: rgb(0, 195, 238);
  text-align: center;
  padding-top: 5px;
  width: 120px;
  font-size: 40px;
  padding: 15px;
  font-family: "Segment7Standard";
  justify-content: center;
  margin-bottom: 2px;

  ::placeholder {
    color: rgba(152, 152, 152, 0.4);
    text-align: center;
    font-size: 40px;
    margin: 10px;
  }

  &:hover {
    border: rgb(185, 166, 243) solid 5px;
  }
`;

function TimeInputfield() {
  return <TimeInput placeholder="99" maxLength="3" />;
}

export default TimeInputfield;
