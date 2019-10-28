import React from "react";
import styled from "styled-components";
import Inputfields from "./Inputfield";
import TimeInputfield from "./TimeInputfield";
import InputWrapper from "./InputWrapper";
import ActionButton from "./Button";
import Axios from "axios";

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
  function addToJsonDb() {
    Axios.post("http://localhost:3001/locations", {
      time: timeValue,
      inputff: "hi"
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const [timeValue, setTimeValue] = React.useState("");

  return (
    <ModalWrapper>
      <InputWrapper>
        <ActionButton>X</ActionButton>
        <TimeInputfield
          value={timeValue}
          onChange={event => setTimeValue(event.target.value)}
          placeholder="99"
          maxLength="3"
        />
        <StyledParagraph>Minutes</StyledParagraph>
        <Inputfields />
        <ActionButton bgColor={true} handleClick={() => addToJsonDb()}>
          √
        </ActionButton>
      </InputWrapper>
    </ModalWrapper>
  );
}

export default Modal;
