import React from "react";
import styled from "styled-components";

const InputWrapperStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  background: linear-gradient(rgb(75, 195, 230), rgb(229, 72, 138));
  border-radius: 15px;
`;

function InputWrapper({ children }) {
  return <InputWrapperStyle>{children} </InputWrapperStyle>;
}

export default InputWrapper;
