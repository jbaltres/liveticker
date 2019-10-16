import React from "react";
import styled from "styled-components";

const TextWrapper = styled.div`
  display: flex;
  background-color: rgba(34, 34, 34, 1);
  flex-direction: column;
  height: 150px;
  justify-content: center;
  max-width: 220px;
`;

const SpecialName = styled.h2`
  color: rgb(251, 72, 123);
  font-size: 25px;
  margin: 0px;
  font-family: sans-serif;
`;

const SpecialDescription = styled.h3`
  font-size: 16.5px;
  color: rgb(251, 72, 123);
  margin: 0px 0px 10px 0px;
  font-family: sans-serif;
`;

const EntranceFee = styled.span`
  color: greenyellow;
`;

const SectionName = styled.div`
  color: white;
`;

const SectionGPS = styled.div`
  color: white;
  min-width: 100px;
  overflow-x: scroll;
`;

<<<<<<< HEAD:src/components/Textarea.js
function Textarea({ location }) {
  return (
    <Textbox>
      <SpecialName>{location.headline}</SpecialName>
      <SpecialDescription>{location.subheadline}</SpecialDescription>
      <EntranceFee>{location.entranceFee} € Eintritt</EntranceFee>
      <SectionName>{location.locationName}</SectionName>
      <SectionGPS>{location.adress}</SectionGPS>
    </Textbox>
=======
function SectionContent() {
  return (
    <TextWrapper>
      <SpecialName>Churros for 1€</SpecialName>
      <SpecialDescription>Every Churro 1€</SpecialDescription>
      <EntranceFee>Eintritt: 5€</EntranceFee>
      <SectionName>Denni´s Churros</SectionName>
      <SectionGPS>Am Stockweg 10, 49201 Köln</SectionGPS>
    </TextWrapper>
>>>>>>> master:src/components/SectionContent.js
  );
}
export default SectionContent;
