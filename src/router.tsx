import { createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/home-page"
import RouterWrapper from "./components/router-wrapper/router-wrapper"


const router = createBrowserRouter([
    {
        path: "/",
        element: <RouterWrapper />,
        children: [
            {
                path: "",
                element: <HomePage />
            }
        ]
    }
])

export default router
