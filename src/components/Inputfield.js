import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 16px;
  border: none;
  margin: 10px 20px;
  border-radius: 10px;
  height: 30px;
  text-align: center;
  width: 73%;

  :hover::placeholder {
    color: white;
  }

  ::placeholder {
    color: rgba(185, 166, 243);
    text-align: center;
    font-size: ${props => (props.size ? "20px" : "16px")};
    font-style: italic;
  }

  :focus {
    border: none;
    padding: 19px;
    font-size: 20px;
    width: 85%;
    text-align: center;
    background-color: rgba(37, 206, 198, 1);
  }

  :hover {
    color: white;
    border: none;
    background-color: rgba(37, 206, 198, 1);
  }
`;

function Inputfields({ ...props }) {
  return (
    <>
      <Input {...props} />
    </>
  );
}

export default Inputfields;
