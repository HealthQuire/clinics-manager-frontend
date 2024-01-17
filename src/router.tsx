import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./pages/home-page";
import RouterWrapper from "./components/router-wrapper/router-wrapper";
import SignIn from "./pages/auth/sign-in";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RouterWrapper />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "auth",
                element: <Outlet />,
                children: [
                    {
                        path: "signin",
                        element: <SignIn />,
                    },
                ],
            },
        ],
    },
]);

export default router;
