import styled from 'styled-components';
import router from './router.tsx';
import { RouterProvider } from 'react-router-dom';
import './App.css';

const AppWrapper = styled.div`
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
`;

function App() {
    return (
        <AppWrapper>
            <RouterProvider router={router} />
        </AppWrapper>
    );
}

export default App;
