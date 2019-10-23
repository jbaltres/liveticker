import React from "react";
import styled from "styled-components";
import Inputfields from "./Inputfield";
import TimeInputfield from "./TimeInputfield";
import InputWrapper from "./InputWrapper";
import Button from "./Button";

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30%;
`;

const StyledParagraph = styled.p`
  justify-content: center;
  color: #f6f6f4;
  margin: 0px;
  font-size: 20px;
`;

function Modal() {
  return (
    <ModalWrapper>
      <InputWrapper>
        <Button>X</Button>
        <TimeInputfield />
        <StyledParagraph>Minutes</StyledParagraph>
        <Inputfields />
        <Button bgColor={true}>√</Button>
      </InputWrapper>
    </ModalWrapper>
  );
}

export default Modal;
