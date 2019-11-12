import React from "react";
import styled from "styled-components";

const WeekCardContainer = styled.main`
  display: flex;

  width: 100vw;
  padding: 20px;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(37, 206, 197, 1), black) 50 15%;
`;

const LogoIMG = styled.img`
  justify-content: center;
  align-items: center;
`;

const WeekContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
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

const FlipCard = styled.div`
  background-color: transparent;
  width: 100vw;
  height: 80px;
  perspective: 1000px;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;

  text-align: center;
  transition: transform 0.8s;
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

  backface-visibility: hidden;
  color: black;
`;

const FlipCardBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;

  backface-visibility: hidden;
  color: white;
  transform: rotateY(180deg);
`;

export default function LocationDisplay(location) {
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
              <PartyDescription>{location.partydescription}</PartyDescription>
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
}
