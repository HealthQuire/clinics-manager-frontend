import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from '../../styles/theme.ts';

export const AppointmentPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
`;

export const AppointmentForm = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
`;

export const AppointmentFormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AppointmentFormTitle = styled.h1``;

export const AppointmentFormSubtitle = styled.h3`
    font-style: italic;
    font-weight: 400;
`;

export const AppointmentFormLabel = styled.label`
    margin-bottom: 16px;
    opacity: 0.8;
    font-size: 24px;
    font-weight: 900;
`;

export const AppointmentFormButton = styled.input`
    width: 512px;
    color: #ffffff;
    text-align: center;
    text-decoration: none;
    background-color: ${theme.colors.accentOne};
    padding: 14px 20px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 8px;
    &:hover {
        background-color: ${theme.colors.accentTwo};
    }
`;

export const AppointmentFormTextArea = styled.textarea`
    width: 100%;
    margin-bottom: 64px;
    min-height: 256px;
    background-color: ${theme.colors.bgDark};
    outline: none;
    border: 2px solid ${theme.colors.bgSecondary};
    border-radius: 16px;
    padding: 32px;
    color: ${theme.colors.textPrimary};
`;

export const PopupContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PopupWrapper = styled.div`
    width: 512px;
    height: 256px;
    background-color: ${theme.colors.bgPrimary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 64px;
`;

export const PopupTitle = styled.h1``;

export const PopupButton = styled(NavLink)``;

export const PopupSubtitle = styled.h3``;
