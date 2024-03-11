import styled from 'styled-components';
import theme from '../../styles/theme.ts';
import { NavLink } from 'react-router-dom';

export const GreetingBlock = styled.div`
    font-size: 36px;
    font-weight: 900;
    margin: 32px 0;
    height: 150px;
    opacity: 0.8;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-wrap: balanced;
`;

export const HomePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
`;
export const StatisticsWrapper = styled.div``;

export const QuickActionsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    gap: 48px;
`;

export const QuickActionsButton = styled(NavLink)<{ color1: string; color2: string }>`
    display: flex;
    cursor: pointer;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    width: 50%;
    height: 250px;
    border-radius: 48px;
    padding: 48px;
    transition: 0.5s;
    text-decoration: none;
    background: linear-gradient(45deg, ${(props) => props.color1}, ${(props) => props.color2});

    &:hover {
        transform: scale(1.05);
    }
`;

export const QuickActionsButtonIcon = styled.div`
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    width: 96px;
    height: 96px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
`;

export const QuickActionsButtonText = styled.span`
    font-weight: 900;
    font-size: 30px;
    color: #ffffff;
    text-decoration: none !important;
`;

export const TodayAppointmentsWrapper = styled.div`
    margin-top: 128px;
    width: 90%;
    background-color: ${theme.colors.bgDark};
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    padding: 24px 72px;
    border-radius: 48px;
`;

export const TodayAppointmentsTitle = styled.h2`
    font-size: 36px;
    opacity: 0.8;
    margin: 64px;
`;

export const TodayAppointmentsList = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding: 20px;
    gap: 8px;
    border-radius: 5px;
`;

export const TodayAppointmentsListItem = styled.div`
    display: grid;
    width: 95%;
    grid-template-columns: 5% 15% 10% 40% 20%;
    gap: 16px;
    align-items: center;
    transition: 0.2s;
    padding: 16px;
    cursor: pointer;
    &:hover {
        background-color: ${theme.colors.bgSecondary};
    }
`;

export const TodayAppointmentsItemIcon = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #747bff;
`;

export const TodayAppointmentsItemTitle = styled.h3`
    text-align: left;
    font-size: 14px;
`;

export const TodayAppointmentsItemStatus = styled.h3`
    font-weight: 900;
    color: ${theme.colors.textSecondary};
    opacity: 0.8;
    font-size: 16px;
`;

export const TodayAppointmentsItemComment = styled.h3`
    font-style: italic;
    font-size: 14px;
    font-weight: lighter;
`;

export const TodayAppointmentsItemButton = styled(NavLink)`
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
