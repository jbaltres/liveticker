import React from "react";
import Counter from "./Counter";
import SectionContent from "./SectionContent";
import styled from "styled-components";
import Axios from "axios";
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
  const [newSection, NewSection] = React.useState(false);

  React.useEffect(() => {
    Axios.get("http://localhost:3001/locations")
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
          <>
            {newSection && <h1>LOL</h1>}
            <Flexbox>
              <Counter time={location.time} />
              <SectionContent location={location} />
            </Flexbox>
          </>
        );
      })}
    </>
  );
}

export default MainScreen;
