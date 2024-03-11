import { Outlet } from 'react-router-dom';
import Nav from '../nav/nav.tsx';
import { BodyContainer, RouterContainer, RouterWrapperDiv } from './styles';

export default function RouterWrapper() {
    return (
        <RouterContainer>
            <RouterWrapperDiv>
                <Nav />
                <BodyContainer>
                    <Outlet />
                </BodyContainer>
            </RouterWrapperDiv>
        </RouterContainer>
    );
}
