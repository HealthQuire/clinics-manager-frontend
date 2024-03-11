import styled from 'styled-components';
import theme from '../../styles/theme.ts';

export const AppointmentHistoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 100%;
`;

export const AppointmentHistoryTitle = styled.h1`
    margin: 32px;
    font-size: 24px;
`;

export const AppointmentHistoryList = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`;

export const AppointmentHistoryItem = styled.div`
    display: grid;
    grid-template-columns: 5% 25% 20% 15% 30%;
    gap: 16px;
    align-items: center;
    transition: 0.2s;
    padding: 16px;
    cursor: pointer;
    &:hover {
        background-color: ${theme.colors.bgSecondary};
    }
`;

export const AppointmentHistoryItemTitle = styled.div``;

export const AppointmentHistoryItemDate = styled.div``;

export const AppointmentHistoryItemButton = styled.div`
    background-color: ${theme.colors.bgSecondary};
    color: ${theme.colors.textPrimary};
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    &:focus {
        outline: none;
        border: none;
    }
    &:hover {
        background-color: ${theme.colors.bgPads};
        color: ${theme.colors.textSecondary};
    }
`;

export const AppointmentHistoryItemIcon = styled.div``;

export const AppointmentHistoryItemComment = styled.div`
    font-style: italic;
`;

export const AppointmentHistoryTimecellPopupContainer = styled.div`
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AppointmentHistoryTimecellPopupWrapper = styled.div`
    width: 500px;
    min-height: 50vh;
    background-color: ${theme.colors.bgPrimary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 64px;
    padding: 64px;
`;

export const AppointmentHistoryTimecellPopupTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

export const AppointmentHistoryTimecellPopupContent = styled.text`
    text-align: left;
    background-color: #ffffff;
    color: #000000;
    margin: 32px 0;
    padding: 32px;
`;

export const AppointmentHistoryTimecellPopupButton = styled.div`
    width: 200px;
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

export const AppointmentHistorySearchBar = styled.input`
    background-color: ${theme.colors.bgDark};
    width: 80%;
    height: 48px;
    border-radius: 24px;
    border: 2px solid ${theme.colors.bgSecondary};
    margin-bottom: 32px;
    padding-left: 24px;
    font-weight: 900;
    transition: 0.3s;
    color: #ffffff;

    &:focus {
        outline: none;
        border: 2px solid ${theme.colors.textSecondary};
    }
`;
