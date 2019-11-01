import React from "react";
import Counter from "./Counter";
import SectionContent from "./SectionContent";
import styled from "styled-components";
import axios from "axios";
// import { locations } from "../api/LocationsArray";

const Flexbox = styled.main`
  display: flex;
  background-color: rgba(34, 34, 34, 1);
  width: 100vw;
  margin: 0;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(37, 206, 197, 1), black) 50 15%;
`;

function MainScreen() {
  const [locations, setLocation] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/locations")
      .then(response => {
        console.log(response);
        setLocation(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {locations.map(location => {
        return (
          <Flexbox>
            <Counter time={location.time} />
            <SectionContent location={location} />
          </Flexbox>
        );
      })}
    </>
  );
}

export default MainScreen;
