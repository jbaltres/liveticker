import React from "react";
import styled from "styled-components";
import axios from "axios";
import Modal from "../components/Modal";
import Inputfields from "../components/Inputfield";
import { Link, useHistory } from "react-router-dom";
import ActionButton from "../components/Button";

const WeekCardContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 20px;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(37, 206, 197, 1), black) 50 15%;
  filter: blur(10px) brightness(0.9);
`;

const ModalWrapper = styled.div`
  position: absolute;
  width: 100vw;
  z-index: 100;
`;

const Button = styled.button`
  color: white;
  border: none;
  height: 40px;
  width: 40px;
  text-align: center;
  border-radius: 50px;
  background-color: rgb(37, 206, 198);
  margin: 20px 0px 20px;
  font-size: 20px;
`;

const InputWrapperSpace = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(rgba(75, 195, 230, 0.5), rgba(229, 72, 138, 0.5));
  border-radius: 15px;
`;

const DateInputfieldWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function DayEvent() {
  const [imgSrc, setImgSrc] = React.useState("");
  const [partyName, setPartyName] = React.useState("");
  const [partyDescription, setPartyDescription] = React.useState("");
  const [music, setMusic] = React.useState("");
  const [locationname, setLocationname] = React.useState("");
  const [adress, setAddress] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
  const [day, setDay] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");

  function addToJsonDb() {
    axios
      .post("/weeklocations", {
        locationlogo: imgSrc,
        partyname: partyName,
        partydescription: partyDescription,
        actor: music,
        locationname: locationname,
        adress: adress,
        date: day + "." + month + "." + year
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
    history.push("/addCalendarEntry");
  }

  function handleAcceptClick() {
    if (passwordValue !== "1234") {
      alert("Please type in the Password");
      return;
    }

    if (imgSrc.length < 1) {
      alert("Mit einem Bild sieht Ihr Event schöner aus");
      return;
    }
    if (partyName.length < 1) {
      alert("Bitte geben Sie einen Eventnamen ein");
      return;
    }
    if (partyDescription.length < 1) {
      alert("Beschreiben Sie Ihr Event kurz");
      return;
    }
    if (music.length < 1) {
      alert("Geben Sie eine Musikrichtung oder einen Dj an");
      return;
    }
    if (locationname.length < 1) {
      alert("Wie heißt ihre Location?");
      return;
    }
    if (adress.length < 1) {
      alert("Bitte geben Sie eine Adresse ein");
      return;
    }
    if (day.length < 2) {
      alert("Bitte geben sie den Tag in `DD` an");
      return;
    }
    if (month.length < 2) {
      alert("Bitte geben sie den Monat in `MM` an");
      return;
    }
    if (year.length < 4) {
      alert("Bitte geben sie das Jahr in `JJJJ` an");
      return;
    }

    addToJsonDb();
    routeTo();
  }

  return (
    <>
      <ModalWrapper>
        <Modal height>
          <Link to="/addCalendarEntry">
            <ActionButton>X</ActionButton>
          </Link>
          <Inputfields
            autoFocus
            value={imgSrc}
            onChange={event => setImgSrc(event.target.value)}
            placeholder="Bild-URL"
          />
          <Inputfields
            value={partyName}
            onChange={event => setPartyName(event.target.value)}
            placeholder="Partyname"
          />
          <Inputfields
            value={partyDescription}
            onChange={event => setPartyDescription(event.target.value)}
            placeholder="Beschreibung"
          />
          <Inputfields
            value={music}
            onChange={event => setMusic(event.target.value)}
            placeholder="DJ oder Musikrichtung"
          />
          <Inputfields
            value={locationname}
            onChange={event => setLocationname(event.target.value)}
            placeholder="Locationname"
          />

          <Inputfields
            value={adress}
            onChange={event => setAddress(event.target.value)}
            placeholder="Addresse"
          />
          <DateInputfieldWrapper>
            <Inputfields
              value={day}
              onChange={event => setDay(event.target.value)}
              placeholder="Tag"
              maxLength="2"
            />
            <Inputfields
              value={month}
              onChange={event => setMonth(event.target.value)}
              placeholder="Monat"
              maxLength="2"
            />
            <Inputfields
              value={year}
              onChange={event => setYear(event.target.value)}
              placeholder="Jahr"
              maxLength="4"
            />
          </DateInputfieldWrapper>
          <Inputfields
            type="password"
            placeholder="Passwort"
            value={passwordValue}
            onChange={event => setPasswordValue(event.target.value)}
            pw={passwordValue}
          />

          <Button bgColor={true} onClick={handleAcceptClick}>
            √
          </Button>
        </Modal>
      </ModalWrapper>
      <WeekCardContainer>
        <InputWrapperSpace />
      </WeekCardContainer>
    </>
  );
}
