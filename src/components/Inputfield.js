import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #f4f4f6;
  margin: 10px 20px;
  border-radius: 10px;
  height: 24px;
  text-align: center;

  ::placeholder {
    color: rgba(185, 166, 243);
    text-align: center;
  }

  &:focus {
    border: rgb(185, 166, 243) solid 5px;
    margin: 0px;
    height: 4em;
    width: 80%;
  }

  &:hover {
    background-color: rgb(255, 58, 80);
    color: white;
    border: none;
  }
`;

function Inputfields() {
  return (
    <>
      <Input placeholder="Special Name" />
      <Input placeholder="Special Description" />
      <Input placeholder="Entrance Fee" />
      <Input placeholder="Location Name" />
      <Input placeholder="Adress" />
      <Input placeholder="Password" />
    </>
  );
}

export default Inputfields;
