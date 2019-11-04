import React from "react";
import styled from "styled-components";
import InputWrapper from "./InputWrapper";
import ActionButton from "./Button";
import { Link } from "react-router-dom";

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30%;
`;

function Modal({ children, submitForm, pw }) {
  return (
    <ModalWrapper>
      <InputWrapper>
        <ActionButton>X</ActionButton>
        {children}
        <Link to="/">
          <ActionButton bgColor={true} onClick={submitForm}>
            √
          </ActionButton>
        </Link>
      </InputWrapper>
    </ModalWrapper>
  );
}

export default Modal;
