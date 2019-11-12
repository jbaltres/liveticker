import React from "react";
import Modal from "../components/Modal";
import TimeInputfield from "../components/TimeInputfield";
import Inputfields from "../components/Inputfield";
import styled from "styled-components";
import axios from "axios";
import ActionButton from "../components/Button";
import { useHistory } from "react-router-dom";

const StyledParagraph = styled.p`
  justify-content: center;
  color: #f6f6f4;
  margin: 10px 0px 30px 0px;
  font-size: 20px;
`;

const StyledAcceptButton = styled.div`
  position: absolute;
  right: -22px;
  bottom: -40px;
`;

const ButtonContainer = styled.div`
  position: relative;
`;

const ModalSpacer = styled.div`
  height: 20px;
`;

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

  let history = useHistory();

  function routeTo() {
    history.push("/add");
  }

  function handleAcceptClick() {
    if (passwordValue !== "1234") {
      alert("Bitte geben Sie das richtige Passwort ein");
      return;
    }
    if (timeValue.length < 1) {
      alert("Bitte geben Sie eine Eventdauer ein");
      return;
    }
    if (headerValue.length < 1) {
      alert("Bitte geben Sie einen Eventnamen ein");
      return;
    }
    if (descriptionValue.length < 1) {
      alert("Beschreiben Sie bitte ihr Event");
      return;
    }
    if (entranceFeeValue.length < 1) {
      alert("Wie hoch ist der Eintritt? Bitte Wert angeben");
      return;
    }
    if (locationNameValue.length < 1) {
      alert("Wie heißt ihre Location?");
      return;
    }
    if (adressValue.length < 1) {
      alert("Bitte geben Sie eine Adresse ein");
      return;
    }
    if (passwordValue === "1234" && timeValue.length > 0) {
      addToJsonDb();
      routeTo();
    }
  }

  return (
    <Modal height={false} pw={passwordValue}>
      <ModalSpacer />
      <Inputfields
        value={headerValue}
        onChange={event => setHeaderValue(event.target.value)}
        placeholder="Special Name"
      />
      <Inputfields
        value={descriptionValue}
        onChange={event => setDescriptionValue(event.target.value)}
        placeholder="Special Beschreibung"
      />
      <Inputfields
        type="number"
        value={entranceFeeValue}
        onChange={event => setEntranceFeeValue(event.target.value)}
        placeholder="Eintrittspreis"
      />
      <Inputfields
        value={locationNameValue}
        onChange={event => setLocationNameValue(event.target.value)}
        placeholder="Location Name"
      />
      <Inputfields
        value={adressValue}
        onChange={event => setAdressValue(event.target.value)}
        placeholder="Addresse"
      />
      <Inputfields
        type="password"
        placeholder="Passwort"
        value={passwordValue}
        onChange={event => setPasswordValue(event.target.value)}
        pw={passwordValue}
      />
      <TimeInputfield
        value={timeValue}
        onChange={event => setTimeValue(event.target.value)}
        placeholder="99"
        maxLength="3"
      />
      <StyledParagraph>Sekunden</StyledParagraph>
      <ButtonContainer>
        <StyledAcceptButton>
          <ActionButton
            bgColor={true}
            currywurst={addToJsonDb}
            acceptClick={handleAcceptClick}
          >
            √
          </ActionButton>
        </StyledAcceptButton>
      </ButtonContainer>
    </Modal>
  );
}
