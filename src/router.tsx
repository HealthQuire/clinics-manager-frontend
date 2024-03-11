import { createBrowserRouter } from 'react-router-dom';
import RouterWrapper from './components/router-wrapper/router-wrapper';
import LoginPage from './pages/login-page/login-page.tsx';
import HomePage from './pages/home-page/home-page.tsx';
import AppointmentPage from './pages/appointment-page/appointment-page.tsx';
import TimetablePage from './pages/timetable-page/timetable-page.tsx';
import { AppointmentHistoryPage } from './pages/appointment-history/appointment-history.tsx';

const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/',
        element: <RouterWrapper />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'appointment/:timecellid',
                element: <AppointmentPage />
            },
            {
                path: 'appointment-history/',
                element: <AppointmentHistoryPage />
            },
            {
                path: 'timetable/',
                element: <TimetablePage />
            },
            {
                path: 'documentation',
                element: 'Sorry... Not implemented yet'
            }
        ]
    }
]);

export default router;
