import { SignInWrapper } from "./styles";
import { Button, TextField } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

interface ISignInData {
    email: string;
    password: string;
}

const schema = yup.object().shape({
    email: yup
        .string()
        .required("Email is required")
        .email("Email is not valid"),
    password: yup.string().required("Password is required"),
});

const SignInPage = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ISignInData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: ISignInData) => {
        console.log(data);
    };
    return (
        <SignInWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Email"
                            type="email"
                            variant="outlined"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Password"
                            type="password"
                            variant="outlined"
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Sign In
                </Button>
            </form>
        </SignInWrapper>
    );
};

export default SignInPage;
