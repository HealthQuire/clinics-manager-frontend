import styled from 'styled-components';
import theme from '../../styles/theme.ts';

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    height: 96px;
    background-color: ${theme.colors.bgDark};
    padding: 0 16px;
`;
