import styled, { keyframes } from "styled-components";

const floatMe = keyframes`
  0%   { 
    transform: rotateY(0deg) translate(-50%, -50%);
    background-color:white;
    color: white
  }
  100% {
    transform: rotateY(360deg) translate(-50%, -50%);
    background-color:black;
    color: white
  }
`;

export default styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  width: 300px;
  font-size: 200%;
  height: 200px;
  text-align: center;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 2px 10px 2px black;
  justify-content: center;
  align-items: center;
  transform-origin: left top;
  animation: ${floatMe} 3s;
`;
