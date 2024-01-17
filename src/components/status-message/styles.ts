import styled from "styled-components";
import { fadeInAnim } from "../../styles/animations.ts";

export const StatusMessageWrapper = styled.div`
  animation: ${fadeInAnim} 0.5s ease;
`;

export const TextContainer = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;
