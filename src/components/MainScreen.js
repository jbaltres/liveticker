import React from "react";
import Header from "./Header";
import Counter from "./Counter";
import SectionContent from "./SectionContent";
import styled from "styled-components";
import { locations } from "../api/LocationsArray";

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
  return (
    <>
      <Header />
<<<<<<< HEAD
      {locations.map(location => {
        return (
          <Flexbox>
            <Counter time={location.time} />
            <Textarea location={location} />
          </Flexbox>
        );
      })}
=======
      <Flexbox>
        <Counter />
        <SectionContent />
      </Flexbox>
      <Flexbox>
        <Counter />
        <SectionContent />
      </Flexbox>
>>>>>>> master
    </>
  );
}

export default MainScreen;
