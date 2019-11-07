import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  border: none;
  height: 33px;
  width: 33px;
  text-align: center;
  border-radius: 50px;
  background-color: ${props =>
    props.close ? "rgb(37, 206, 198)" : "rgb(255, 58, 80)"};
  margin: 10px 0px;
`;
function ActionButton({ bgColor, children, currywurst, acceptClick }) {
  return (
    <Button close={bgColor} onClick={(currywurst, acceptClick)}>
      {children}
    </Button>
  );
}

export default ActionButton;

// function addToJsonDb(hallo, fuenf) {
//   Axios.post("http://localhost:3001/locations", {
//     title: hallo
//   })
//     .then(response => {
//       console.log(response);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }
