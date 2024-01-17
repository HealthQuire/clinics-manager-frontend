import {
  CloseButton,
  ContentContainer,
  ModalHeader,
  ModalWindowWrapper,
  Title,
} from "./styles.ts";
import { ReactNode, SetStateAction, Dispatch } from "react";

interface IModalWindowProps {
  children: ReactNode;
  isActive: boolean;
  windowName: string;
  trigger: Dispatch<SetStateAction<boolean>>;
}

export const ModalWindow = ({
  children,
  isActive,
  trigger,
  windowName,
}: IModalWindowProps) => {
  return isActive ? (
    <ModalWindowWrapper>
      <ContentContainer>
        <ModalHeader>
          <Title> {windowName} </Title>
          <CloseButton onClick={() => trigger(false)} />
        </ModalHeader>
        {children}
      </ContentContainer>
    </ModalWindowWrapper>
  ) : (
    ""
  );
};
