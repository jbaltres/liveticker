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

const style = {
  color: "yellowgreen",
  fontSize: 20
};

function Counter({ fontColor, time }) {
  const [count, setCount] = useState(time);

  useEffect(() => {
    let id = setTimeout(() => {
      if (count >= 1) {
        setCount(count - 1);
      }
    }, 1000);
    return () => clearTimeout(id);
  }, [count]);

  const style2 = {
    color: `hsl(${count * 10}, 100%, 33%)`
  };

  if (count >= 10) {
    return (
      <CounterBoxWrapper>
        <CounterDescription>Nur noch:</CounterDescription>
        <CounterWrapper>
          <CounterArea1 counterColor={true}>{count}</CounterArea1>
        </CounterWrapper>
        <CounterUnit>Seconds</CounterUnit>
      </CounterBoxWrapper>
    );
  }
  if (count < 10 && count >= 1) {
    return (
      <CounterBoxWrapper>
        <CounterDescription>Nur noch:</CounterDescription>
        <CounterWrapper>
          <CounterArea1 style={style2}>{count}</CounterArea1>
        </CounterWrapper>
        <CounterUnit>Seconds</CounterUnit>
      </CounterBoxWrapper>
    );
  }
  if (count < 1) {
    return (
      <CounterBoxWrapper>
        <CounterDescription>Nur noch:</CounterDescription>
        <CounterWrapper>
          <CounterArea1 counterColor={false}>0</CounterArea1>
        </CounterWrapper>
        <div style={style}>Dieses Angebot ist abgelaufen</div>
      </CounterBoxWrapper>
    );
  }
}

export default Counter;

CounterArea1.propTypes = {
  fontC: PropTypes.bool
};
