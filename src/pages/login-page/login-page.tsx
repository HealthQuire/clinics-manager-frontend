import {
    Button,
    FormLabel,
    FormTextBox,
    HeaderLogo,
    InputGroup,
    LoginForm,
    LoginPageContainer,
    LoginPageWrapper,
} from "./styles.ts";
import { useState } from "react";
import { Simulate } from "react-dom/test-utils";
import submit = Simulate.submit;
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // submit!
        event.preventDefault();
        localStorage.setItem("doctorid", "65ed60c5018ab38eb252f952");
        navigate("/");
    };

    return (
        <LoginPageWrapper>
            <LoginPageContainer>
                <HeaderLogo />
                <LoginForm onSubmit={onSubmit}>
                    <InputGroup>
                        <FormTextBox
                            value={login}
                            onChange={(event) => {
                                setLogin(event.target.value);
                            }}
                            type="email"
                            name="email"
                            id="email"
                            required={true}
                        />
                        <FormLabel htmlFor="email">Ваша почта:</FormLabel>
                    </InputGroup>

                    <InputGroup>
                        <FormTextBox
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            type="password"
                            name="password"
                            id="password"
                            required={true}
                        />
                        <FormLabel htmlFor="password">Пароль:</FormLabel>
                    </InputGroup>

                    <Button
                        onClick={submit}
                        type="submit"
                        disabled={isLoading || !(login && password)}
                    >
                        {isLoading ? "Загрузка..." : "Войти"}
                    </Button>
                    {error && <div style={{ color: "red" }}>{error}</div>}
                </LoginForm>
            </LoginPageContainer>
        </LoginPageWrapper>
    );
};

export default LoginPage;
