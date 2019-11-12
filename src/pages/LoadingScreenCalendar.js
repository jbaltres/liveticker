import React from "react";
import styled, { keyframes } from "styled-components";
import { Redirect } from "react-router-dom";
import PatchFoxIcon from "../icons/PatchFox";

const turner = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

const flicker = keyframes`
  0% {
    opacity:0.1;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }
  
  2% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }
  8% {
    opacity:0.1;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }
  9% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }
  12% {
    opacity:0.1;
    text-shadow: 0px 0px rgba(242, 22, 22, 1);
  }
  20% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
  }
  25% {
    opacity:0.3;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
  }
  30% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
  }
  
  70% {
    opacity:0.7;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
  }
  
  72% {
    opacity:0.2;
    text-shadow:0px 0px 29px rgba(242, 22, 22, 1)
  }
  
  77% {
    opacity:.9;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
  }
  100% {
    opacity:.9;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
  }
}
`;

const StyledLogo = styled(PatchFoxIcon)`
  width: 200px;
  height: 200px;
  animation: ${flicker} 2s infinite linear;
`;

const FlickerDiv = styled.div`
  animation: ${turner} 4s infinite linear;
`;

const Margin = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 150px;
`;

const BodyStartpage = styled.div`
  background-color: black;
  height: 100vh;
`;

const BurritoAppWrapper = styled.div`
  margin-top: 50px;
`;

const SpanWrapper = styled.div`
  display: flex;
  justify-content: center;
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
`;

const Span3 = styled.span`
  margin-right: 0px;
  font-style: bold;
  font-size: 2em;
  color: rgb(185, 116, 243);
`;

const Span4 = styled.div`
  margin: 0px;
  font-style: bold;
  font-size: 2em;
  color: rgb(0, 195, 238);
  animation: ${flicker} 55s infinite linear;
`;

export default function LoadingCalendar() {
  const [toMain, setToMain] = React.useState(false);

  React.useEffect(() => {
    const handle = setTimeout(() => setToMain(true), 4700);

    return () => {
      clearTimeout(handle);
    };
  }, []);

  return (
    <>
      {toMain ? (
        <Redirect to="/dayevents" />
      ) : (
        <BodyStartpage>
          <FlickerDiv>
            <Margin>
              <StyledLogo />
            </Margin>
          </FlickerDiv>
          <SpanWrapper>
            <BurritoAppWrapper>
              <Span1>Powered</Span1>
              <Span2>by</Span2>
              <Span3>PatchFox</Span3>
              <Span4>@pdxphilippmac</Span4>
            </BurritoAppWrapper>
          </SpanWrapper>
        </BodyStartpage>
      )}
    </>
  );
}
