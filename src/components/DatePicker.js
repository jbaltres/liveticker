import React from "react";
import styled from "styled-components";

const Picker = styled.input`
  background-image: linear-gradient(
    rgba(75, 195, 230, 1),
    rgba(229, 72, 138, 1)
  );
  border: white 1px solid;
  height: 30px;
  color: white;
  text-align: center;
  border-radius: 15px;
`;

function DatePicker() {
  return <Picker type="date" />;
}

export default DatePicker;
