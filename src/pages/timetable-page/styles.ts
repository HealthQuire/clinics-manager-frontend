import styled from 'styled-components';
import theme from '../../styles/theme.ts';

export const TimeTableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
`;

export const TimeTableTitle = styled.div`
    font-size: 36px;
    font-weight: 900;
    margin: 16px;
`;

export const TimeTableContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    color: #999999;
    font-weight: bolder;
    padding: 20px;
`;

export const TimeTableDayColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TimeTableDayColumnTitle = styled.div``;

export const TimeTableDayCell = styled.div`
    display: flex;
    justify-content: end;
    align-items: end;
    width: 150px;
    height: 60px;
    border: 1px solid #eeeeee;
    font-size: 20px;
`;

export const ActiveTimeTableDayCell = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    flex-direction: column;
    width: 150px;
    height: 60px;
    color: ${theme.colors.accentOne};
    border: 1px solid #eeeeee;
    font-size: 20px;
    cursor: pointer;
`;

export const PopupContainer = styled.div`
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

export const PopupWrapper = styled.div`
    width: 400px;
    min-height: 20vh;
    background-color: ${theme.colors.bgPrimary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 64px;
    padding: 64px;
`;

export const PopupTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

export const PopupContent = styled.text`
    text-align: left;
    background-color: #ffffff;
    color: #000000;
    margin: 32px 0;
    padding: 32px;
`;

export const PopupButton = styled.div`
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
