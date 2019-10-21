import React from "react";
import styled from "styled-components";

const InputWrapperStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 450px;
  width: 375px;
  background: linear-gradient(rgba(75, 195, 230, 0.7), rgb(229, 72, 138));
  border-radius: 15px;
`;

function InputWrapper({ children }) {
  return <InputWrapperStyle>{children} </InputWrapperStyle>;
}

export default InputWrapper;
