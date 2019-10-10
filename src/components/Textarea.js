import React from "react";
import styled from "styled-components";

const Textbox = styled.div`
  display: flex;
  background-color: rgba(34, 34, 34, 1);
  flex-direction: column;
  height: 120px;
`;

const SpecialName = styled.h2`
  color: rgb(251, 72, 123);
  margin: 0px;
  font-family: sans-serif;
`;

const SpecialDescription = styled.h3`
  color: rgb(251, 72, 123);
  margin: 0px 0px 10px 0px;
  padding: 2px;
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
`;

function Textarea() {
  return (
    <Textbox>
      <SpecialName>Churros for 1€</SpecialName>
      <SpecialDescription>Every Churro 1€</SpecialDescription>
      <EntranceFee>Eintritt: 5€</EntranceFee>
      <SectionName>Denni´s Churros</SectionName>
      <SectionGPS>Am Stockweg 10, 49201 Köln</SectionGPS>
    </Textbox>
  );
}
export default Textarea;
