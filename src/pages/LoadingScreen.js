import React from "react";
import styled, { keyframes } from "styled-components";
import { Redirect } from "react-router-dom";

const StyledAdd = styled.img`
  width: 300px;
  height: 300px;
`;

const DIV = styled.div`
  transform: rotate(45deg);
`;

const turner = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

const Margin = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
  animation: ${turner} 5.2s infinite linear;
`;

const BodyStartpage = styled.div`
  background-color: black;
  height: 100vh;
`;

const SpanWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BurritoAppWrapper = styled.div`
  margin-top: 50px;
`;

const Span1 = styled.span`
  margin-right: 15px;
  font-style: bold;
  font-size: 2em;
  color: rgb(251, 72, 123);
  /* animation: ${turner} 4s infinite linear; */
`;

const Span2 = styled.span`
  margin-right: 15px;
  font-style: bold;
  font-size: 2em;
  color: rgb(229, 90, 189);
  /* animation: ${turner} 1s infinite linear; */
`;

const Span3 = styled.span`
  margin-right: 0px;
  font-style: bold;
  font-size: 2em;
  color: rgb(185, 116, 243);
`;

const Span4 = styled.span`
  margin: 0px;
  font-style: bold;
  font-size: 2em;
  color: rgb(0, 195, 238);
`;

export default function LoadingScreen() {
  const [toMain, setToMain] = React.useState(false);

  React.useEffect(() => {
    const handle = setTimeout(() => setToMain(true), 5200);

    return () => {
      clearTimeout(handle);
    };
  }, []);

  return (
    <>
      {toMain ? (
        <Redirect to="/home" />
      ) : (
        <BodyStartpage>
          <Margin>
            <DIV>
              <StyledAdd
                src="http://getdrawings.com/free-icon/burrito-icon-58.png"
                alt="Burrito Logo"
              />
            </DIV>
          </Margin>
          <SpanWrapper>
            <BurritoAppWrapper>
              <Span1>Powered</Span1>
              <Span2>by</Span2>
              <Span3>Burrito</Span3>
              <Span4>APP</Span4>
            </BurritoAppWrapper>
          </SpanWrapper>
        </BodyStartpage>
      )}
    </>
  );
}
