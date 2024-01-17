import { keyframes } from "styled-components";

export const fadeInAnim = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const flyInAnim = keyframes`
  0% {
    opacity: 0;
    transform: translateY(200px) scale(0.8);
  }
  100%{
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
`;
