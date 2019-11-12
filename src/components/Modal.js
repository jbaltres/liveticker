import React from "react";
import styled from "styled-components";
import InputWrapper from "./InputWrapper";

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${props => (props.height ? "27%" : "10%")};
`;

function Modal({ children, height }) {
  return (
    <ModalWrapper height={height}>
      <InputWrapper>{children}</InputWrapper>
    </ModalWrapper>
  );
}

export default Modal;
