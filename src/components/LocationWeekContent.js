import React from "react";
import styled from "styled-components";

const WeekCardContainer = styled.div`
  display: flex;
`;

const LogoIMG = styled.div``;

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

function LocationWeekContent() {
  return (
    <>
      <WeekCardContainer></WeekCardContainer>
      <LogoIMG></LogoIMG>
      <WeekContentContainer></WeekContentContainer>
      <PartyName>Trash</PartyName>
      <PartyDescription>Wodka-0 18€</PartyDescription>
      <Musik>DJ YEEZY</Musik>
      <Location>B1</Location>
      <Adress>6430 Gary Ct, 92115 San Diego (Show me)</Adress>
    </>
  );
}

export default LocationWeekContent;
