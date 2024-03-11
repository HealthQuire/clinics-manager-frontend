import { createBrowserRouter } from "react-router-dom";
import RouterWrapper from "./components/router-wrapper/router-wrapper";
import LoginPage from "./pages/login-page/login-page.tsx";
import HomePage from "./pages/home-page/home-page.tsx";
import ManageDoctors from "./pages/manage-doctors/manage-doctors.tsx";
import ManageCustomers from "./pages/manage-customers/manage-customers.tsx";
import ManageTimecells from "./pages/manage-timecells/manage-timecells.tsx";

const ProtectedRoute = ({ children }) => {
    const res = localStorage.getItem("doctorid");
    if (!res) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <RouterWrapper />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "",
                element: (
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "manage-doctors/",
                element: (
                    <ProtectedRoute>
                        <ManageDoctors />
                    </ProtectedRoute>
                ),
            },
            {
                path: "manage-customers/",
                element: (
                    <ProtectedRoute>
                        <ManageCustomers />
                    </ProtectedRoute>
                ),
            },
            {
                path: "manage-timecells/",
                element: (
                    <ProtectedRoute>
                        <ManageTimecells />
                    </ProtectedRoute>
                ),
            },
            {
                path: "documentation",
                element: "Sorry... Not implemented yet",
            },
        ],
    },
]);

export default router;
