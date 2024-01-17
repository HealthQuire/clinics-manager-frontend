import { RouterProvider } from "react-router-dom"
import styled from "styled-components"
import router from "./router"

const AppWrapper = styled.div`
    background-color: ${props => props.theme.colors.bgPrimary};
    color: ${props => props.theme.colors.textPrimary};
    min-height: 100vh;
`

export default function App() {
    return (
        <AppWrapper>
            <RouterProvider router={router} />
        </AppWrapper>
    )
}
