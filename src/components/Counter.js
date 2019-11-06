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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${props => (props.counterColor ? "yellowgreen" : "red")};
  font-size: 50px;
  background-color: rgb(0, 0, 0);
  font-family: "Segment7Standard";
  width: 95px;
  padding: 9px 10px 2px 2px;
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

function Counter({ time }) {
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
    color: `hsl(${count * 2}, 100%, 50%)`
  };

  if (count >= 60) {
    return (
      <CounterBoxWrapper>
        <CounterDescription>Nur noch:</CounterDescription>
        <CounterWrapper>
          <CounterArea1 counterColor={true}>{count}</CounterArea1>
        </CounterWrapper>
        <CounterUnit>Sekunden</CounterUnit>
      </CounterBoxWrapper>
    );
  }
  if (count < 60 && count >= 1) {
    return (
      <CounterBoxWrapper>
        <CounterDescription>Nur noch:</CounterDescription>
        <CounterWrapper>
          <CounterArea1 style={style2}>{count}</CounterArea1>
        </CounterWrapper>
        <CounterUnit>Sekunden</CounterUnit>
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
