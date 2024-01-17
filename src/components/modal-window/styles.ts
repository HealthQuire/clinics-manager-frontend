import styled from "styled-components";
import "@fontsource/roboto/500.css";
import closeIcon from "../../assets/images/icons/close.png";
import { fadeInAnim } from "../../styles/animations.ts";

export const ModalWindowWrapper = styled.div`
  position: fixed;
  display: flex;
  z-index: 100;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  animation: ${fadeInAnim} 0.3s ease backwards;
`;

export const ContentContainer = styled.div`
  width: 50vw;
  height: 50vh;
  min-width: 500px;
  background-color: ${(props) => props.theme.colors.bgPrimary};
  border-radius: 32px;
  padding: 24px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 32px;
  height: 24px;
`;

export const CloseButton = styled.div`
  background-image: url("${closeIcon}");
  background-size: cover;
  height: 24px;
  width: 24px;
  cursor: pointer;
  transition: transform 0.5s ease;

  &:hover {
    transform: rotate(15deg);
  }
`;

export const Title = styled.div`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 1.7em;
`;
