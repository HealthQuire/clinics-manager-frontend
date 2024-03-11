import {
    HomePageWrapper,
    QuickActionsButton,
    QuickActionsButtonIcon,
    QuickActionsButtonText,
    QuickActionsWrapper,
    TodayAppointmentsItemTitle,
    TodayAppointmentsList,
    TodayAppointmentsListItem,
    TodayAppointmentsTitle,
    TodayAppointmentsWrapper,
    TodayAppointmentsItemButton,
    TodayAppointmentsItemComment,
    TodayAppointmentsItemStatus,
    GreetingBlock,
} from "./styles.ts";
import { useGetTodayDoctorTimeCellsQuery } from "../../store/api/timecell-api.ts";
import { Preloader } from "../../components/preloader/preloader.tsx";
import capitalize from "../../utils/capitalize.ts";
import { useGetCurrentDoctorQuery } from "../../store/api/doctor-api.ts";
import { faUser, faTable, faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
    const todayTimeCells = useGetTodayDoctorTimeCellsQuery();
    const doctorData = useGetCurrentDoctorQuery();

    return (
        <HomePageWrapper>
            <GreetingBlock>
                {doctorData.data ? (
                    "Welcome back, " +
                    doctorData.data.firstname +
                    " " +
                    doctorData.data.lastname
                ) : (
                    <Preloader />
                )}
            </GreetingBlock>
            <QuickActionsWrapper>
                <QuickActionsButton
                    color1="#8E7AB5"
                    color2="#B784B7"
                    to="/timetable"
                >
                    <QuickActionsButtonIcon>
                        <FontAwesomeIcon icon={manage} size="3x" />
                    </QuickActionsButtonIcon>
                    <QuickActionsButtonText>
                        Manage doctors
                    </QuickActionsButtonText>
                </QuickActionsButton>
                <QuickActionsButton
                    color1="#E493B3"
                    color2="#EEA5A6"
                    to="/appointment-history"
                >
                    <QuickActionsButtonIcon>
                        <FontAwesomeIcon icon={faHistory} size="3x" />
                    </QuickActionsButtonIcon>
                    <QuickActionsButtonText>
                        Manage customers
                    </QuickActionsButtonText>
                </QuickActionsButton>
            </QuickActionsWrapper>
            <TodayAppointmentsWrapper>
                <TodayAppointmentsTitle>
                    Today appointments:
                </TodayAppointmentsTitle>
                <TodayAppointmentsList>
                    {todayTimeCells.data ? (
                        todayTimeCells.data.map((timeCell) => (
                            <TodayAppointmentsListItem key={timeCell._id}>
                                <FontAwesomeIcon icon={faUser} size="xl" />
                                <TodayAppointmentsItemTitle>
                                    {capitalize(timeCell.customer.lastname)}{" "}
                                    {capitalize(timeCell.customer.firstname)}{" "}
                                    {capitalize(
                                        timeCell.customer.fathername ?? "-",
                                    )}
                                </TodayAppointmentsItemTitle>
                                <TodayAppointmentsItemStatus>
                                    {timeCell.time}
                                </TodayAppointmentsItemStatus>
                                <TodayAppointmentsItemComment>
                                    Comment: {timeCell.comment}
                                </TodayAppointmentsItemComment>
                                <TodayAppointmentsItemButton
                                    to={"appointment/" + timeCell._id}
                                >
                                    Create examination
                                </TodayAppointmentsItemButton>
                            </TodayAppointmentsListItem>
                        ))
                    ) : (
                        <Preloader />
                    )}
                </TodayAppointmentsList>
            </TodayAppointmentsWrapper>
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
