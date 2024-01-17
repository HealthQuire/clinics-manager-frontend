import styled, { keyframes } from "styled-components";

interface ICircleSegment {
  color: string;
  size: string;
  position: string;
  id: number;
}

const anim = keyframes`
  0% {
    rotate: 0deg;
  }
  50% {
    rotate: 360deg;
  }
  100% {
    rotate: 720deg;
  }
`;

export const DefaultPreloaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(10px) scale(1.4);
`;

export const CircleSegment = styled.div<ICircleSegment>`
  position: absolute;
  border-width: 10px;
  border-style: solid;
  border-right-color: ${(props) => props.color};
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-top-color: transparent;
  border-radius: ${(props) => props.size};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  animation: ${anim} 3s ease infinite;
`;
