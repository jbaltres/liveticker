import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CounterBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(34, 34, 34, 0.9);
  margin: 10px 0px 10px 20px;
  width: 120px;
`;

const CounterDescription = styled.div`
  color: white;
  margin-bottom: 6px;
`;
const CounterWrapper = styled.div`
  display: flex;
`;

const CounterArea1 = styled.div`
  color: ${props => (props.counterColor ? "yellowgreen" : "red")};
  font-size: 50px;
  background-color: rgb(0, 0, 0);
  font-family: "Segment7Standard";
  width: fit-content;
  padding: 6px;
  margin-right: 5px;
`;

const CounterUnit = styled.div`
  color: white;
  margin-top: 8px;
`;

function Counter({ fontColor, time }) {
  const [count, setCount] = useState(time);

  useEffect(() => {
    let id = setTimeout(() => {
      if (count >= 1) {
        setCount(count - 1);
      }
    }, 300);
    return () => clearTimeout(id);
  }, [count]);

  return (
    <CounterBoxWrapper>
      <CounterDescription>Nur noch:</CounterDescription>
      <CounterWrapper>
        <CounterArea1 counterColor={fontColor}>{count}</CounterArea1>
      </CounterWrapper>
      <CounterUnit>Seconds</CounterUnit>
    </CounterBoxWrapper>
  );
}

export default Counter;

CounterArea1.propTypes = {
  fontC: PropTypes.bool
};
