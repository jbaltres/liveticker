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

function Modal({ children, pw }) {
  return (
    <ModalWrapper>
      <InputWrapper>
        <Link to="/addCalendarEntry">
          <ActionButton>X</ActionButton>
        </Link>
        {children}
      </InputWrapper>
    </ModalWrapper>
  );
}

export default Modal;
