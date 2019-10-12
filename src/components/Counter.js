import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CounterBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(34, 34, 34, 0.9);
  margin: 10px 20px;
`;

const CounterDescription = styled.div`
  color: white;
  margin-bottom: 6px;
`;
const CounterWrapper = styled.div`
  display: flex;
`;

const CounterArea1 = styled.div`
  color: ${props => (props.marwin ? "yellowgreen" : "red")};
  font-size: 50px;
  background-color: rgb(0, 0, 0);
  font-family: "Segment7Standard";
  width: fit-content;
  padding: 6px;
  margin-right: 5px;
`;

const CounterArea2 = styled.span`
  color: ${props => (props.marwin ? "yellowgreen" : "red")};
  font-size: 50px;
  font-family: "Segment7Standard";
  background-color: rgb(0, 0, 0);
  width: fit-content;
  padding: 6px;
`;

const CounterUnit = styled.div`
  color: white;
  margin-top: 8px;
`;

function Counter({ fontColor }) {
  return (
    <CounterBoxWrapper>
      <CounterDescription>Nur noch:</CounterDescription>
      <CounterWrapper>
        <CounterArea1 marwin={fontColor}>4</CounterArea1>
        <CounterArea2 marwin={fontColor}>7</CounterArea2>
      </CounterWrapper>
      <CounterUnit>Minutes</CounterUnit>
    </CounterBoxWrapper>
  );
}

export default Counter;

CounterArea1.propTypes = {
  fontC: PropTypes.bool
};
