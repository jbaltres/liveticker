import React from "react";
import styled from "styled-components";
import axios from "axios";
import Modal from "../components/Modal";
import Inputfields from "../components/Inputfield";
import { Link } from "react-router-dom";

const WeekCardContainer = styled.main`
  display: flex;
  flex-direction: column;
  background-color: rgba(34, 34, 34, 1);
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
  width: 100px;
  height: 30px;
  font-size: 28px;
  margin: 20px;
`;

const InputWrapperSpace = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(rgba(75, 195, 230, 0.5), rgba(229, 72, 138, 0.5));
  border-radius: 15px;
`;

export default function DayEvent() {
  const [imgSrc, setImgSrc] = React.useState("");
  const [partyName, setPartyName] = React.useState("");
  const [partyDescription, setPartyDescription] = React.useState("");
  const [music, setMusic] = React.useState("");
  const [locationname, setLocationname] = React.useState("");
  const [adress, setAddress] = React.useState("");

  function addToJsonDb() {
    axios
      .post("/weeklocations", {
        locationlogo: imgSrc,
        partyname: partyName,
        partydescription: partyDescription,
        actor: music,
        locationname: locationname,
        adress: adress,
        date: "20-11-2019"
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <>
      <ModalWrapper>
        <Modal>
          <Inputfields
            value={imgSrc}
            onChange={event => setImgSrc(event.target.value)}
            placeholder="Img Src"
          />
          <Inputfields
            value={partyName}
            onChange={event => setPartyName(event.target.value)}
            placeholder="Partyname"
          />
          <Inputfields
            value={partyDescription}
            onChange={event => setPartyDescription(event.target.value)}
            placeholder="Description"
          />
          <Inputfields
            value={music}
            onChange={event => setMusic(event.target.value)}
            placeholder=" Music"
          />
          <Inputfields
            value={locationname}
            onChange={event => setLocationname(event.target.value)}
            placeholder="Locationname"
          />
          <Inputfields
            value={adress}
            onChange={event => setAddress(event.target.value)}
            placeholder="Address"
          />
          <Link to="/addCalendarEntry">
            <Button onClick={addToJsonDb}>
              <span role="img" aria-label="HI">
                👌🏾
              </span>
            </Button>
          </Link>
        </Modal>
      </ModalWrapper>
      <WeekCardContainer>
        <InputWrapperSpace />
      </WeekCardContainer>
    </>
  );
}
