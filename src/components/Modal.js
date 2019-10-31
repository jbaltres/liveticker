import React from "react";
import styled from "styled-components";
import Inputfields from "./Inputfield";
import TimeInputfield from "./TimeInputfield";
import InputWrapper from "./InputWrapper";
import ActionButton from "./Button";
import Axios from "axios";
import { Link } from "react-router-dom";

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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Modal() {
  function addToJsonDb() {
    Axios.post("http://localhost:3001/locations", {
      time: timeValue,
      headline: formValue,
      subheadline: formValue2,
      entranceFee: formValue3,
      locationName: formValue4,
      adress: formValue5
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const [timeValue, setTimeValue] = React.useState("");
  const [formValue, setFormValue] = React.useState("");
  const [formValue2, setFormValue2] = React.useState("");
  const [formValue3, setFormValue3] = React.useState("");
  const [formValue4, setFormValue4] = React.useState("");
  const [formValue5, setFormValue5] = React.useState("");
  const [formValue6, setFormValue6] = React.useState("");

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
        <StyledParagraph>Seconds</StyledParagraph>
        <Inputfields
          value={formValue}
          onChange={event => setFormValue(event.target.value)}
          placeholder="Special Name"
          name="name"
        />
        <Inputfields
          value={formValue2}
          onChange={event => setFormValue2(event.target.value)}
          placeholder="Special Description"
        />
        <Inputfields
          value={formValue3}
          onChange={event => setFormValue3(event.target.value)}
          placeholder="Entrance Fee"
        />
        <Inputfields
          value={formValue4}
          onChange={event => setFormValue4(event.target.value)}
          placeholder="Location Name"
        />
        <Inputfields
          value={formValue5}
          onChange={event => setFormValue5(event.target.value)}
          placeholder="Adress"
        />
        {/* <Inputfields
          type="password"
          onChange={event => setFormValue6(event.target.value)}
          placeholder="Password"
        /> */}
        <StyledLink to="/">
          <ActionButton bgColor={true} handleClick={() => addToJsonDb()}>
            √
          </ActionButton>
        </StyledLink>
      </InputWrapper>
    </ModalWrapper>
  );
}

export default Modal;

// function for key value pair objects
// function getInputValue(key, value){
//   setInput(input[key] = value);
// }
