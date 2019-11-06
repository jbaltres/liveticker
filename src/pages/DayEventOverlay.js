import React from "react";
import DatePicker from "../components/DatePicker";
import styled from "styled-components";
import axios from "axios";
import Modal from "../components/Modal";
import Inputfields from "../components/Inputfield";

const LogoIMG = styled.img``;

const WeekContentContainer = styled.div`
  display: flex;
`;

const PartyName = styled.h2`
  color: rgb(250, 72, 123);
  margin: 0px;
`;

const PartyDescription = styled.p`
  color: rgb(250, 72, 123);
  margin: 0px;
`;

const Musik = styled.p`
  color: rgb(229, 90, 189);
  margin: 0px;
`;

const Location = styled.p`
  color: rgb(186, 116, 243);
  margin: 0px;
`;

const Adress = styled.p`
  color: rgb(0, 195, 238);
  margin: 0px;
`;

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
`;

export default function DayEvents() {
  const [weekLocations, setWeekLocations] = React.useState([]);
  const [imgSrc, setImgSrc] = React.useState("");
  const [partyName, setPartyName] = React.useState("");
  const [partyDescription, setPartyDescription] = React.useState("");
  const [music, setMusic] = React.useState("");
  const [locationname, setLocationname] = React.useState("");
  const [adress, setAddress] = React.useState("");

  React.useEffect(() => {
    axios
      .get("/weeklocations")
      .then(response => {
        console.log(response);
        setWeekLocations(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
      <DatePicker />
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
        </Modal>
        <Button onClick={addToJsonDb}>🖕🏻</Button>
      </ModalWrapper>
      {weekLocations.map(location => {
        return (
          <WeekCardContainer>
            <LogoIMG src={location.locationlogo} />
            <WeekContentContainer></WeekContentContainer>
            <PartyName>{location.partyname}</PartyName>
            <PartyDescription>{location.partydescription}</PartyDescription>
            <Musik>{location.actor}</Musik>
            <Location>{location.locationname}</Location>
            <Adress>{location.adress}</Adress>
          </WeekCardContainer>
        );
      })}
    </>
  );
}
