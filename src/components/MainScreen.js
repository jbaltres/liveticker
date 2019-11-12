import React from "react";
import Counter from "./Counter";
import SectionContent from "./SectionContent";
import styled from "styled-components";
import axios from "axios";
// import { locations } from "../api/LocationsArray";

const Flexbox = styled.section`
  display: flex;
  width: 100vw;
  margin: 0;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(37, 206, 197, 1), black) 50 15%;
`;

const MainContainer = styled.div`
  overflow: scroll;
`;
function MainScreen() {
  const [locations, setLocation] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/locations")
      .then(response => {
        console.log(response);
        setLocation(response.data.reverse());
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <MainContainer>
      {locations.map(location => {
        return (
          <Flexbox key={location.id}>
            <Counter time={location.time} location={location} />
            <SectionContent location={location} />
          </Flexbox>
        );
      })}
    </MainContainer>
  );
}

export default MainScreen;
