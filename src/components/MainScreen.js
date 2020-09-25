import React from "react";
import Counter from "./Counter";
import SectionContent from "./SectionContent";
import styled from "styled-components";
import axios from "axios";
import firebase from "../Firebase"
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
    firebase
    .firestore()
    .collection("locations")
    .onSnapshot((snapshot)=>{
      console.log(snapshot.docs[3].id.headline)
    })
    },[])
      
    

  return (
    <h1>{locations.id}</h1>
  );
    }  

export default MainScreen;
