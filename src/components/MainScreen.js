import React from "react";
import Counter from "./Counter";
import SectionContent from "./SectionContent";
import styled from "styled-components";
import firebase from "../Firebase"


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

function LocationList() {

  const [locations, setLocation] = React.useState([]);

  React.useEffect(() => {
    firebase
    .firestore()
    .collection("locations")
    .onSnapshot((snapshot)=>{
      const newLocations = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))

      setLocation(newLocations)
    })
    },[])
    
    return locations
}

    const MainScreen = () => {
      const locations = LocationList()
    

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
