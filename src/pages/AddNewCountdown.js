import React from "react";
import Modal from "../components/Modal";
import TimeInputfield from "../components/TimeInputfield";
import Inputfields from "../components/Inputfield";
import styled from "styled-components";
import axios from "axios";
import ActionButton from "../components/Button";
import { Link } from "react-router-dom";

const StyledParagraph = styled.p`
  justify-content: center;
  color: #f6f6f4;
  margin: 0px;
  font-size: 20px;
`;

// const ActionButtons = styled.button`
//   width: 100px;
//   height: 30px;
//   font-size: 28px;
// `;

export default function AddNewCountdown() {
  const [timeValue, setTimeValue] = React.useState("");
  const [headerValue, setHeaderValue] = React.useState("");
  const [descriptionValue, setDescriptionValue] = React.useState("");
  const [entranceFeeValue, setEntranceFeeValue] = React.useState("");
  const [locationNameValue, setLocationNameValue] = React.useState("");
  const [adressValue, setAdressValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");

  function addToJsonDb() {
    axios
      .post("/locations", {
        time: timeValue,
        headline: headerValue,
        subheadline: descriptionValue,
        entranceFee: entranceFeeValue,
        locationName: locationNameValue,
        adress: adressValue,
        timestamp: Date.now()
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function handleAcceptClick() {
    if (passwordValue !== "1234") {
      alert("Please type in the Password");
      return;
    }
    if (entranceFeeValue.length < 0) {
      alert("Please enter a header value");
      return;
    }
    addToJsonDb();
  }

  return (
    <Modal pw={passwordValue}>
      <TimeInputfield
        value={timeValue}
        onChange={event => setTimeValue(event.target.value)}
        placeholder="99"
        maxLength="3"
      />
      <StyledParagraph>Seconds</StyledParagraph>
      <Inputfields
        value={headerValue}
        onChange={event => setHeaderValue(event.target.value)}
        placeholder="Special Name"
      />
      <Inputfields
        value={descriptionValue}
        onChange={event => setDescriptionValue(event.target.value)}
        placeholder="Special Description"
      />
      <Inputfields
        value={entranceFeeValue}
        onChange={event => setEntranceFeeValue(event.target.value)}
        placeholder="Entrance Fee"
      />
      <Inputfields
        value={locationNameValue}
        onChange={event => setLocationNameValue(event.target.value)}
        placeholder="Location Name"
      />
      <Inputfields
        value={adressValue}
        onChange={event => setAdressValue(event.target.value)}
        placeholder="Address"
      />
      <Inputfields
        type="password"
        placeholder="Password"
        value={passwordValue}
        onChange={event => setPasswordValue(event.target.value)}
        pw={passwordValue}
      />
      <Link to="/">
        <ActionButton
          bgColor={true}
          currywurst={addToJsonDb}
          acceptClick={handleAcceptClick}
        >
          √
        </ActionButton>
      </Link>
    </Modal>
  );
}
