import React from "react";
import styled from "styled-components";
import InputWrapper from "./InputWrapper";
import ActionButton from "./Button";
import { Link } from "react-router-dom";

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${props => (props.height ? "40%" : "10%")};
`;

function Modal({ children, height }) {
  return (
    <ModalWrapper height={height}>
      <InputWrapper>
        <Link to="/add">
          <ActionButton>X</ActionButton>
        </Link>
        {children}
      </InputWrapper>
    </ModalWrapper>
  );
}

export default Modal;
