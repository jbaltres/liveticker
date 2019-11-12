import styled from "styled-components";

const TimeInputfield = styled.input`
  background-color: black;
  display: block;
  color: rgb(0, 195, 238);
  text-align: center;
  padding-top: 5px;
  width: 120px;
  font-size: 40px;
  padding: 15px;
  font-family: "Segment7Standard";
  justify-content: center;
  margin: 10px 2px 2px 2px;

  ::placeholder {
    color: rgba(152, 152, 152, 0.4);
    text-align: center;
    font-size: 40px;
    margin: 10px;
  }

  &:hover {
    border: rgb(185, 166, 243) solid 5px;
  }
`;

export default TimeInputfield;
