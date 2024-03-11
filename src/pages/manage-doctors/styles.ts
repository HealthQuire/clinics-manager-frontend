import styled from "styled-components";
import theme from "../../styles/theme.ts";

export const ManageDoctorsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ManageDoctorsTitle = styled.h1`
    margin: 32px;
    font-size: 24px;
`;

export const ManageDoctorsList = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 80%;
    margin: 64px;
`;

export const ManageDoctorsListItem = styled.div`
    display: grid;
    grid-template-columns: 5% 25% 25% 34% 2% 2%;
    gap: 16px;
    align-items: center;
    transition: 0.2s;
    padding: 16px;
    cursor: pointer;
    &:hover {
        background-color: ${theme.colors.bgSecondary};
    }
`;

export const ManageDoctorsListItemTitle = styled.div``;

export const ManageDoctorsListItemComment = styled.div`
    font-style: italic;
`;

export const ManageDoctorsListItemServicesList = styled.div`
    display: flex;
    gap: 16px;
`;

export const ManageDoctorsListItemServicesItem = styled.div`
    background-color: ${theme.colors.accentOne};
    padding: 4px 8px;
    border-radius: 4px;
    color: #ffffff;
`;

export const ManageDoctorsListItemIcon = styled.div`
    cursor: pointer;
`;

export const ManageDoctorsForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 60%;
    padding: 32px;
    border-radius: 16px;
    background-color: ${theme.colors.bgDark};
`;

export const ManageDoctorsFormInput = styled.input`
    background-color: ${theme.colors.bgDark};
    outline: none;
    border: 2px solid #444444;
    padding: 8px;
    border-radius: 8px;
    color: ${theme.colors.textSecondary};
    width: 100%;
    margin-bottom: 32px;
    margin-top: 8px;
`;

export const ManageDoctorsFormLabel = styled.label`
    font-size: 20px;
`;

export const ManageDoctorsFormTitle = styled.h3`
    cursor: pointer;
`;

export const ManageDoctorsFormButton = styled.input`
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
    margin-top: 64px;
    &:hover {
        background-color: ${theme.colors.accentTwo};
    }
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
