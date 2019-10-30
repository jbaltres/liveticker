import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  margin: 10px 20px;
  border-radius: 10px;
  height: 24px;
  text-align: center;
  padding: 0.5em 4em;

  :hover::placeholder {
    color: white;
  }

  ::placeholder {
    color: rgba(185, 166, 243);
    text-align: center;
  }

  :focus {
    border: none;
    width: 80%;
  }

  :hover {
    background-color: rgb(255, 58, 80);
    color: white;
    border: none;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Inputfields({ ...props }) {
  return (
    <FormWrapper>
      <Input {...props} />
    </FormWrapper>
  );
}

export default Inputfields;
