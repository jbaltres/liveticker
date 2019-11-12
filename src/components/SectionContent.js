import React from "react";
import styled from "styled-components";

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 220px;
`;

const SpecialName = styled.h2`
  color: rgba(251, 72, 123);
  font-size: 25px;
  margin: 10px;
  margin-left: 0px;
  margin-bottom: 10px;
  font-family: sans-serif;
`;

const SpecialDescription = styled.h3`
  font-size: 16.5px;
  color: rgba(256, 256, 256, 0.8);
  margin: 0px 0px 10px 0px;
  font-family: sans-serif;
  margin-bottom: 10px;
`;

const EntranceFee = styled.span`
  color: rgb(0, 195, 238);
  margin-bottom: 10px;
`;

const SectionName = styled.div`
  color: rgba(256, 256, 256, 0.8);
  margin-bottom: 10px;
`;

const SectionGPS = styled.div`
  color: rgba(256, 256, 256, 0.8);
  max-width: 200px;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const style = {
  fontSize: 20,
  fontStyle: "italic",
  color: "rgba(256, 256, 256, 0.8)"
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
        <EntranceFee style={style}>Dieses Event ist abgelaufen</EntranceFee>
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
