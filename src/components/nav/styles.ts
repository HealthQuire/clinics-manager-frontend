import styled from 'styled-components';
import basicTheme from '../../styles/theme.ts';
import { Link, NavLink } from 'react-router-dom';
import theme from '../../styles/theme.ts';
import logo from '../../assets/upper-logo.png';

export const optionIconStyle = {
    marginRight: '10px',
    fontSize: '15px',
    width: '20px'
};

export const arrowIconStyle = {
    fontSize: '13px',
    width: '20px',
    marginRight: '7px'
};

export const HeaderWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    z-index: 100;
    width: 200px;
    height: 100vh;
    justify-content: space-between;
    align-items: start;
    background-color: ${theme.colors.bgDark};
    cursor: pointer;
    overflow-y: auto;
    overflow-x: hidden;
`;

export const HeaderLogo = styled.div`
    background-image: url(${logo});
    width: 120px;
    height: 90px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    margin-top: 48px;
    margin-bottom: 32px;
    margin-right: 128px;
`;

export const HeaderTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin: 10px 30px 10px 30px;
    width: 190px;
`;

export const HeaderTitleContainer = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    font-size: 20px;
    text-decoration: none;
`;

export const HeaderTitle = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
    text-decoration: none;
    color: ${basicTheme.colors.textPrimary};
`;

export const Title = styled.div`
    margin: 10px;
    text-decoration: none !important;
`;

export const HeaderUnName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    font-size: 12px;
    color: ${basicTheme.colors.textSecondary};
    margin: 20px 0 7px 0;
    width: 100%;
`;

export const HeaderBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: start;
    align-items: start;
    font-size: 16px;
`;

export const LeftWall = styled.div`
    width: 4px;
    height: 90%;
    background-color: ${theme.colors.accentTwo};
    display: none;
    margin-right: 10px;
`;

export const OptionContainer = styled(NavLink)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-decoration: none;
    color: ${basicTheme.colors.textPrimary};
    &:hover {
        opacity: 0.7;
    }
    &.active {
        ${LeftWall} {
            display: flex;
        }
    }
`;

export const NonActiveZone = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const OptionBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`;

export const HeaderBottom = styled(Link)`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin: 10px 30px 30px 30px;
    width: 190px;
    color: ${basicTheme.colors.accentTwo};
`;
