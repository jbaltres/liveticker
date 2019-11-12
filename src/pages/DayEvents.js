import React from "react";
import styled, { keyframes } from "styled-components";
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
  width: 70px;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

const WeekContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
`;

const ContentContainerBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
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
  align-self: center;
`;

const Location = styled.p`
  color: rgb(186, 116, 243);
  margin: 0px;
  align-self: center;
`;

const Adress = styled.p`
  color: rgb(0, 195, 238);
  margin: 0px;
  align-self: center;
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
  margin: 10px 0px;
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

const InputfieldContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0px;
`;

const DateContainer = styled.div`
  margin-top: 10px;
  color: rgb(0, 195, 238);
`;

const FilterStyle = styled.div`
  width: -webkit-fill-available;
  text-align: center;
  margin: 5px auto 5px auto;
  font-size: 20px;
  font-style: bold;
  color: rgb(0, 195, 238);
`;

const flicker = keyframes`
  0% {
    opacity:0.1;
    text-shadow: 0px 0px 29px rgba(229, 90, 189, 1);
  }
  
  50% {
    opacity:0.3;
    text-shadow: 0px 0px 29px rgba(229, 90, 189, 0.5);
  }
  
  100% {
    opacity:.9;
    text-shadow: 0px 0px 29px rgba(229, 90, 189, 0.1);
  }
}
`;

const Span3 = styled.span`
  width: -webkit-fill-available;
  text-align: center;
  animation: ${flicker} 5s linear;
  font-size: 16px;
  font-style: italic;
  color: rgb(185, 116, 243);
`;

export default function DayEvents() {
  const [weekLocations, setWeekLocations] = React.useState([]);
  const [dateValue, setDateValue] = React.useState("");

  const handleLocationChange = event => {
    setDateValue(event.target.value);
  };

  React.useEffect(() => {
    axios
      .get("/weeklocations")
      .then(response => {
        console.log(response);
        setWeekLocations(response.data);

        if (dateValue === "") {
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [dateValue]);

  const results = weekLocations.filter(location =>
    location.date.toLowerCase().includes(dateValue.toLowerCase())
  );

  return (
    <>
      <FilterStyle>
        <details>
          <summary>
            FILTER
            <div>
              <Span3>Tap or Hover on a Card to show more Details</Span3>
            </div>
          </summary>

          <InputfieldContainer>
            <Inputfields
              size={true}
              placeholder="dd-mm-yyyy "
              value={dateValue}
              onChange={handleLocationChange}
            />
          </InputfieldContainer>
          <ButtonWrapper>
            <OverlayButton>
              <StyledLink to="/dayeventoverlay">Neues Event</StyledLink>
            </OverlayButton>
          </ButtonWrapper>
        </details>
      </FilterStyle>

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
                      <DateContainer>Datum: {location.date}</DateContainer>
                    </WeekContentContainer>
                  </FlipCardFront>
                  <FlipCardBack>
                    <ContentContainerBack>
                      <Musik>{location.actor}</Musik>
                      <Location>{location.locationname}</Location>
                      <Adress>{location.adress}</Adress>
                    </ContentContainerBack>
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
