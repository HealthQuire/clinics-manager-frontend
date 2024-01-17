import { StatusMessageWrapper, TextContainer } from "./styles.ts";
import theme from "../../styles/theme.ts";

interface IStatusMessage {
  text: string;
  status: "error" | "warning" | "success" | "neutral";
}

const colorDict = {
  error: theme.colors.error,
  warning: theme.colors.warning,
  success: theme.colors.success,
  neutral: theme.colors.neutralSecondary,
};

export const StatusMessage = ({ text, status }: IStatusMessage) => {
  return (
    <StatusMessageWrapper>
      <TextContainer color={colorDict[status]}> {text} </TextContainer>
    </StatusMessageWrapper>
  );
};
