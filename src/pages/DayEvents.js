import React from "react";
import DatePicker from "../components/DatePicker";
import styled from "styled-components";
import axios from "axios";
import Inputfields from "../components/Inputfield";
import { Link } from "react-router-dom";

const WeekCardContainer = styled.main`
  display: flex;
  background-color: rgba(34, 34, 34, 1);
  width: 100vw;
  padding: 20px;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(37, 206, 197, 1), black) 50 15%;
`;

const LogoIMG = styled.img`
  width: 50%;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

const WeekContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PartyName = styled.h2`
  color: rgb(250, 72, 123);
  margin: 0px;
`;

const PartyDescription = styled.p`
  color: rgb(250, 72, 123);
  margin: 0px;
`;

const Musik = styled.p`
  color: rgb(229, 90, 189);
  margin: 0px;
`;

const Location = styled.p`
  color: rgb(186, 116, 243);
  margin: 0px;
`;

const Adress = styled.p`
  color: rgb(0, 195, 238);

  margin: 0px;
`;

const FlipCard = styled.div`
  background-color: transparent;
  width: 100vw;
  height: 200px;
  perspective: 1000px;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  :hover {
    transform: rotateY(180deg);
  }
`;

const FlipCardFront = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  color: black;
`;

const FlipCardBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  color: white;
  transform: rotateY(180deg);
`;

const OverlayButton = styled.div`
  padding: 10px 10px;
  background-image: linear-gradient(
    rgba(75, 195, 230, 1),
    rgba(229, 72, 138, 1)
  );
  color: white;
  margin-bottom: 10px;
  border: none;
  border-radius: 15px;
  font-size: 18px;
  width: 60%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: white;
  text-align: center;
`;

function Warning() {
  alert("Tap on Card to show more Details!");
}

export default function DayEvents() {
  const [weekLocations, setWeekLocations] = React.useState([]);
  const [dateValue, setDateValue] = React.useState("");
  const [locationName, setLocationName] = React.useState("");
  // const [searchResults, setSearchResults] = React.useState([]);

  const handleLocationChange = event => {
    setLocationName(event.target.value);
  };

  React.useEffect(() => {
    axios
      .get("/weeklocations")
      .then(response => {
        console.log(response);
        setWeekLocations(response.data);
        if (locationName === "") {
          Warning();
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [locationName]);

  const results = weekLocations.filter(location =>
    location.locationname.toLowerCase().includes(locationName.toLowerCase())
  );

  return (
    <>
      {/* <DatePicker />
      <Inputfields
        placeholder="Date"
        value={dateValue}
        onChange={event => setDateValue(event.target.value)}
      /> */}
      <Inputfields
        placeholder="Locationname"
        value={locationName}
        onChange={handleLocationChange}
      />
      <ButtonWrapper>
        <OverlayButton>
          <StyledLink to="/dayeventoverlay">Neues Event</StyledLink>
        </OverlayButton>
      </ButtonWrapper>
      {results.map(location => {
        return (
          <WeekCardContainer>
            <FlipCard>
              <FlipCardInner>
                <FlipCardFront>
                  <ImageContainer>
                    <LogoIMG src={location.locationlogo} />
                    <WeekContentContainer>
                      <PartyName>{location.partyname}</PartyName>
                      <PartyDescription>
                        {location.partydescription}
                      </PartyDescription>
                    </WeekContentContainer>
                  </ImageContainer>
                </FlipCardFront>
                <FlipCardBack>
                  <WeekContentContainer>
                    <Musik>{location.actor}</Musik>
                    <Location>{location.locationname}</Location>
                    <Adress>{location.adress}</Adress>
                  </WeekContentContainer>
                </FlipCardBack>
              </FlipCardInner>
            </FlipCard>
          </WeekCardContainer>
        );
      })}
    </>
  );
}

//   "headline": "Churros für 1€",
//   "subheadline": "Eintritt: 5€",
//   "locationName": "Frankie´s Churros",
//   "entranceFee": "0",
//   "adress": "Gertrudenstrasse 27, 50667 Köln",
//   "time": 155
// },
// {
//   "headline": "50 ct Party",
//   "subheadline": "Jedes Getränk 50ct",
//   "entranceFee": 15,
//   "locationName": "Klappsmühle",
//   "adress": "Am Hohenzollernring 39, 50672 Köln",
//   "time": 35
// },
// {
//   "headline": "3-4-1",
//   "subheadline": "Zahle 1, Trinke 3",
//   "entranceFee": 10,
//   "locationName": "B1",
//   "adress": "La-roche-Sur-Yon-Straße 444, 51647 Gummersbach",
//   "time": 12
// },
// {
//   "headline": "1/2 Preis",
//   "subheadline": "Alle Jumbo´s zum halben Preis",
//   "locationName": "Sausalitos",
//   "entranceFee": "0",
//   "adress": "Hohenzollernring 50, 50672 Köln",
//   "time": 48
// },
// {
//   "headline": "Ladies Night",
//   "subheadline": "Alle Ladies Sekt 4 free",
//   "entranceFee": 6,
//   "locationName": "Diamonds",
//   "adress": "Hohenzollernring 1201, 49201 Köln",
//   "time": 55
// },
// {
//   "headline": "All you can Eat",
//   "subheadline": "Buffet 7,90€",
//   "entranceFee": "18€",
//   "locationName": "Bim Kong Lun",
//   "adress": "Am Stockweg 10, 51645 Gummersbach",
//   "time": 33
// },
// {
//   "headline": "2$ Party ",
//   "subheadline": "Every Longdrink for 2$",
//   "entranceFee": "",
//   "locationName": "Beachcomber",
//   "adress": "4332 Mission Blvd, 90219 San Diego",
//   "time": 23
// },
// {
//   "headline": "Taco Tuesday",
//   "subheadline": "30% on your Bill and free Taco´s",
//   "entranceFee": "10",
//   "locationName": "Denni´s Churros",
//   "adress": "43 Mission Blvd, 90219 San Diego",
//   "time": 77
// },
// {
//   "headline": "Table 250€",
//   "subheadline": "1 Tisch + 0,7 L Smirnoff",
//   "entranceFee": "",
//   "locationName": "Denni´s Churros",
//   "adress": "Kaschemm 2, 12345 Köln",
//   "time": 60
// },
// {
//   "headline": "Daily Wrap 5€",
//   "subheadline": "Today Every Wrap Take away 5€",
//   "entranceFee": "",
//   "locationName": "Rich ´n´ Greens",
//   "adress": "Kyffhäuserstraße 7, 50969 Köln",
//   "time": 60
// },
// {
//   "time": "88",
//   "headline": "Spaces Around",
//   "id": 163
// },
// {
//   "time": "",
//   "headline": "Hallo",
//   "id": 164
// },
// {
//   "time": "44",
//   "headline": "Lukas",
//   "id": 165
// },
// {
//   "time": "12",
//   "headline": "Jonas",
//   "id": 166
// },
// {
//   "time": "1",
//   "headline": "Christina",
//   "id": 167
// },
// {
//   "time": "46",
//   "headline": "Julian",
//   "id": 168
// },
// {
//   "time": "33",
//   "headline": "Lena",
//   "id": 169
// },
// {
//   "time": "22",
//   "headline": "Lena2",
//   "id": 170
// },
// {
//   "time": "29",
//   "headline": "José",
//   "id": 171
// },
// {
//   "time": "17",
//   "headline": "Philipp",
//   "id": 172
// },
// {
//   "time": "88",
//   "headline": "",
//   "id": 173
// },
// {
//   "time": "22",
//   "headline": "Lukas",
//   "subheadline": "danke",
//   "entranceFee": "für ",
//   "locationName": "deine",
//   "adress": "Hilfe",
//   "id": 174
// },
// {
//   "time": "124",
//   "headline": "Der längste Name der Welt mit der längsten PLZ der Welt",
//   "subheadline": "Der längste Name der Welt mit der längsten PLZ der Welt",
//   "entranceFee": "Der längste Name der Welt mit der längsten PLZ der Welt",
//   "locationName": "Der längste Name der Welt mit der längsten PLZ der Welt",
//   "adress": "Der längste Name der Welt mit der längsten PLZ der Welt",
//   "id": 181
// },
// {
//   "time": "124",
//   "headline": "Der längste Name der Welt mit der längsten PLZ der Welt",
//   "subheadline": "Der längste Name der Welt mit der längsten PLZ der Welt",
//   "entranceFee": "Der längste Name der Welt mit der längsten PLZ der Welt",
//   "locationName": "Der längste Name der Welt mit der längsten PLZ der Welt",
//   "adress": "Der längste Name der Welt mit der längsten PLZ der Welt",
//   "id": 181
// },
// {
//   "time": "",
//   "headline": "burritos für n euro",
//   "subheadline": "hammer essen",
//   "entranceFee": "1000",
//   "locationName": "solingen",
//   "adress": "solingen sttrasse",
//   "id": 192
// },
// {
//   "time": "33",
//   "headline": "Das letzte Mal",
//   "subheadline": "Bier für alle",
//   "entranceFee": "1",
//   "locationName": "Spaces",
//   "adress": "Gertrudenstraße 35, 50999 Köln",
//   "id": 193
// },
