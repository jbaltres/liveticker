import React from "react";
import styled from "styled-components";

const Picker = styled.input`
  margin-top: 30px;
  background-image: linear-gradient(
    rgba(75, 195, 230, 1),
    rgba(229, 72, 138, 1)
  );
  font-size: 20px;
  width: 70%;
  color: white;
  text-align: center;
  border-radius: 35px;
  border: none;
  :focus {
    color: gold;
  }
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: center;
`;

function DatePicker() {
  return (
    <Flexbox>
      <Picker
        type="date"
        value="2020-07-22"
        min="2019-12-22"
        onChange={event => console.log(event.target.value)}
      />
    </Flexbox>
  );
}

export default DatePicker;
