import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { OptionContainers } from './options.ts';
import { nanoid } from '@reduxjs/toolkit';

import {
    HeaderBox,
    HeaderWrapper,
    HeaderTitleContainer,
    OptionContainer,
    OptionBody,
    HeaderUnName,
    HeaderTop,
    HeaderBottom,
    LeftWall,
    NonActiveZone,
    optionIconStyle,
    arrowIconStyle,
    HeaderLogo
} from './styles';

export default function Nav() {
    return (
        <HeaderWrapper>
            <HeaderTop>
                <HeaderTitleContainer to="/">
                    <HeaderLogo />
                </HeaderTitleContainer>
                <HeaderUnName>NAVIGATE</HeaderUnName>
                <HeaderBox>
                    {OptionContainers.map((option) => (
                        <OptionContainer key={nanoid()} to={option.to}>
                            <LeftWall />
                            <NonActiveZone>
                                <OptionBody>
                                    <FontAwesomeIcon style={optionIconStyle} icon={option.icon} />
                                    <p>{option.text}</p>
                                </OptionBody>
                            </NonActiveZone>
                        </OptionContainer>
                    ))}
                </HeaderBox>
            </HeaderTop>
            <HeaderBottom to="https://github.com/HealthQuire">
                <FontAwesomeIcon style={arrowIconStyle} icon={faAnglesRight} />
                HealthQuire
            </HeaderBottom>
        </HeaderWrapper>
    );
}
