import styled from 'styled-components';
import logo from '../../assets/tiny.png';
import theme from '../../styles/theme.ts';

export const LoginPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`;

export const HeaderLogo = styled.div`
    background-image: url('${logo}');
    background-size: cover;
    width: 310px;
    height: 55px;
    background-position: center;
    margin-bottom: 20px;
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
    gap: 32px;
`;

export const LoginPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 128px 40px;
    background-color: #f6f6ff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 6px;
    width: 35%;
    min-width: 600px;
`;

export const FormLabel = styled.label`
    color: #8d8d8d;
    position: absolute;
    top: 20px;
    left: 13px;
    background: #ffffff;
    transition: 0.2s ease-in-out;
    cursor: text;
    border-radius: 4px;
`;

export const InputGroup = styled.div`
    position: relative;
    width: 100%;
    box-sizing: border-box;
`;

export const FormTextBox = styled.input`
    outline: none;
    border: 2px solid #dadce0;
    width: 100%;
    padding: 16px 13px;
  font-size: 16px;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: #ffffff !important;
    &:-webkit-autofill + ${FormLabel} {
        background-color: #ffffff; !important;
        top: -8px;
        padding: 0 3px;
        font-size: 14px;
    }
    &:valid + ${FormLabel} {
        top: -8px;
        padding: 0 3px;
        font-size: 14px;
    }
    &:focus + ${FormLabel} {
        top: -8px;
        padding: 0 3px;
        font-size: 14px;
    }
`;

export const Button = styled.button`
    background-color: ${theme.colors.accentOne};
    height: 54px;
    border-radius: 5px;
    width: 100%;
    outline: none;
    border: none;
    color: #ffffff;
    font-weight: 400;
    font-size: 20px;
    cursor: pointer;
    transition: 0.4s all;

    &:disabled {
        opacity: 0.5;
    }

    &:hover {
        opacity: 0.8;
        scale: 1.05;
    }
`;
