import React from "react";
import DatePicker from "../components/DatePicker";
import styled from "styled-components";
import axios from "axios";
import Inputfields from "../components/Inputfield";
import { Link } from "react-router-dom";

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
`;

const WeekCardContainer = styled.section`
  display: flex;
  padding: 10px;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(37, 206, 197, 1), black) 50 15%;
  margin: 3px;
`;

const LogoIMG = styled.img`
  max-height: 70px;

  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

const WeekContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PartyName = styled.h2`
  color: rgb(250, 72, 123);
  margin: 0px;
  display: flex;
`;

const PartyDescription = styled.p`
  color: rgb(250, 72, 123);
  margin: 0px;
  display: flex;
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

const FlipCard = styled.div`
  background-color: transparent;
  width: 100%;
  height: 80px;
  perspective: 1000px;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1.5s;
  transform-style: preserve-3d;

  :hover {
    transform: rotateY(180deg);
  }
`;

const FlipCardFront = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  color: black;
`;

const FlipCardBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  color: white;
  transform: rotateY(180deg);
`;

const OverlayButton = styled.div`
  padding: 10px 10px;
  background-image: linear-gradient(
    rgba(75, 195, 230, 1),
    rgba(229, 72, 138, 1)
  );
  color: white;
  margin-bottom: 10px;
  border: none;
  border-radius: 15px;
  font-size: 18px;
  width: 60%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: white;
  text-align: center;
`;

function Warning() {
  alert("Tap on Card to show more Details!");
}

export default function DayEvents() {
  const [weekLocations, setWeekLocations] = React.useState([]);
  const [dateValue, setDateValue] = React.useState("");
  const [locationName, setLocationName] = React.useState("");

  const handleLocationChange = event => {
    setLocationName(event.target.value);
  };

  React.useEffect(() => {
    axios
      .get("/weeklocations")
      .then(response => {
        console.log(response);
        setWeekLocations(response.data);
        if (locationName === "") {
          Warning();
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [locationName]);

  const results = weekLocations.filter(location =>
    location.locationname.toLowerCase().includes(locationName.toLowerCase())
  );

  return (
    <>
      {/* <DatePicker />
    <Inputfields
      placeholder="Date"
      value={dateValue}
      onChange={event => setDateValue(event.target.value)}
    /> */}
      <Inputfields
        placeholder="Locationname"
        value={locationName}
        onChange={handleLocationChange}
      />
      <ButtonWrapper>
        <OverlayButton>
          <StyledLink to="/dayeventoverlay">Neues Event</StyledLink>
        </OverlayButton>
      </ButtonWrapper>
      <CalendarWrapper>
        {results.map(location => {
          return (
            <WeekCardContainer>
              <FlipCard>
                <FlipCardInner>
                  <FlipCardFront>
                    <ImageContainer>
                      <LogoIMG src={location.locationlogo} />
                    </ImageContainer>
                    <WeekContentContainer>
                      <PartyName>{location.partyname}</PartyName>
                      <PartyDescription>
                        {location.partydescription}
                      </PartyDescription>
                    </WeekContentContainer>
                  </FlipCardFront>
                  <FlipCardBack>
                    <WeekContentContainer>
                      <Musik>{location.actor}</Musik>
                      <Location>{location.locationname}</Location>
                      <Adress>{location.adress}</Adress>
                    </WeekContentContainer>
                  </FlipCardBack>
                </FlipCardInner>
              </FlipCard>
            </WeekCardContainer>
          );
        })}
      </CalendarWrapper>
    </>
  );
}
