import {
    HomePageWrapper,
    QuickActionsButton,
    QuickActionsButtonIcon,
    QuickActionsButtonText,
    QuickActionsWrapper,
    TodayAppointmentsWrapper,
    GreetingBlock,
} from "./styles.ts";
import { Preloader } from "../../components/preloader/preloader.tsx";
import { useGetCurrentDoctorQuery } from "../../store/api/doctor-api.ts";
import {
    faUser,
    faTable,
    faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
    return (
        <HomePageWrapper>
            <GreetingBlock>Welcome back, Manager Managerov!</GreetingBlock>
            <QuickActionsWrapper>
                <QuickActionsButton
                    color1="#8E7AB5"
                    color2="#B784B7"
                    to="/manage-doctors"
                >
                    <QuickActionsButtonIcon>
                        <FontAwesomeIcon icon={faUserDoctor} size="3x" />
                    </QuickActionsButtonIcon>
                    <QuickActionsButtonText>
                        Manage doctors
                    </QuickActionsButtonText>
                </QuickActionsButton>
                <QuickActionsButton
                    color1="#E493B3"
                    color2="#EEA5A6"
                    to="/manage-customers"
                >
                    <QuickActionsButtonIcon>
                        <FontAwesomeIcon icon={faUser} size="3x" />
                    </QuickActionsButtonIcon>
                    <QuickActionsButtonText>
                        Manage patients
                    </QuickActionsButtonText>
                </QuickActionsButton>
                <QuickActionsButton
                    color1="#93B3E4"
                    color2="#A5A6EE"
                    to="/manage-timecells"
                >
                    <QuickActionsButtonIcon>
                        <FontAwesomeIcon icon={faTable} size="3x" />
                    </QuickActionsButtonIcon>
                    <QuickActionsButtonText>
                        Manage timecells
                    </QuickActionsButtonText>
                </QuickActionsButton>
            </QuickActionsWrapper>
            <TodayAppointmentsWrapper></TodayAppointmentsWrapper>
        </HomePageWrapper>
    );
};

export default HomePage;

// HOMEPAGE:
// today customers
// some statistics maybe

// APPOINTMENT:
// just a huge form
// with a lot of fields

// TIMETABLE:
// detailed timetable with all customers of the week

// APPOINTMENT HISTORY
// just all doctor's appointments
