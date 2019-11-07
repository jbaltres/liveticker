import React from "react";
import styled from "styled-components";

const TextWrapper = styled.div`
  display: flex;
  background-color: rgba(34, 34, 34, 1);
  flex-direction: column;
  justify-content: center;
  max-width: 220px;
  min-height: 170px;
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
  max-width: 200px;
  flex-wrap: wrap;
`;

const style = {
  fontSize: 30
};

function SectionContent({ location }) {
  const [count, setCount] = React.useState(location.time);

  React.useEffect(() => {
    let id = setTimeout(() => {
      if (count >= 1) {
        setCount(count - 1);
      }
    }, 1000);

    return () => clearTimeout(id);
  }, [count]);
  const now = Date.now();
  const offerTime = location.timestamp + parseInt(location.time) * 1000;
  if (offerTime <= now) {
    return (
      <TextWrapper>
        <SpecialName>{location.headline}</SpecialName>
        <SpecialDescription></SpecialDescription>
        <EntranceFee style={style}>Dieses Event ist abegelaufen</EntranceFee>
        <SectionName></SectionName>
        <SectionGPS></SectionGPS>
      </TextWrapper>
    );
  } else {
    return (
      count >= 1 && (
        <TextWrapper>
          <SpecialName>{location.headline}</SpecialName>
          <SpecialDescription>{location.subheadline}</SpecialDescription>
          <EntranceFee>{location.entranceFee} € Eintritt</EntranceFee>
          <SectionName>{location.locationName}</SectionName>
          <SectionGPS>{location.adress}</SectionGPS>
        </TextWrapper>
      )
    );
  }
}
export default SectionContent;
