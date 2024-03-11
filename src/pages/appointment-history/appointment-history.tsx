import {
    AppointmentHistoryItem,
    AppointmentHistoryItemButton,
    AppointmentHistoryItemComment,
    AppointmentHistoryItemDate,
    AppointmentHistoryItemIcon,
    AppointmentHistoryItemTitle,
    AppointmentHistoryList,
    AppointmentHistorySearchBar,
    AppointmentHistoryTimecellPopupButton,
    AppointmentHistoryTimecellPopupContainer,
    AppointmentHistoryTimecellPopupContent,
    AppointmentHistoryTimecellPopupTitle,
    AppointmentHistoryTimecellPopupWrapper,
    AppointmentHistoryTitle,
    AppointmentHistoryWrapper
} from './style.ts';
import { IAppointment, useGetDoctorAppointmentsQuery } from '../../store/api/appointment-api.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Preloader } from '../../components/preloader/preloader.tsx';
import { useState } from 'react';

export const AppointmentHistoryPage = () => {
    const [popupActive, setPopupActive] = useState(false);
    const [searchString, setSearchString] = useState('');
    const [currentAppointment, setCurrentAppointment] = useState<IAppointment | null>(null);
    const doctorAppointments = useGetDoctorAppointmentsQuery(searchString);

    const showReportPopup = (appointment: IAppointment) => {
        setPopupActive(true);
        setCurrentAppointment(appointment);
        console.log(appointment.content);
    };

    return (
        <AppointmentHistoryWrapper>
            <AppointmentHistoryTitle>Appointments history</AppointmentHistoryTitle>
            <AppointmentHistorySearchBar
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
                placeholder="Customer title.."
            />
            <AppointmentHistoryList>
                {doctorAppointments.data ? (
                    doctorAppointments.data.map((appointment: IAppointment) => (
                        <AppointmentHistoryItem key={appointment._id}>
                            <AppointmentHistoryItemIcon>
                                <FontAwesomeIcon icon={faUser} size="2x" />
                            </AppointmentHistoryItemIcon>
                            <AppointmentHistoryItemTitle>
                                {appointment.title}
                            </AppointmentHistoryItemTitle>
                            <AppointmentHistoryItemComment>
                                {appointment.timecell.comment}
                            </AppointmentHistoryItemComment>
                            <AppointmentHistoryItemDate>
                                {String(appointment.timecell.date).split('T')[0]}
                            </AppointmentHistoryItemDate>
                            <AppointmentHistoryItemButton
                                onClick={() => showReportPopup(appointment)}
                            >
                                Посмотреть заключение
                            </AppointmentHistoryItemButton>
                        </AppointmentHistoryItem>
                    ))
                ) : (
                    <Preloader />
                )}
                {popupActive && (
                    <AppointmentHistoryTimecellPopupContainer>
                        <AppointmentHistoryTimecellPopupWrapper>
                            <AppointmentHistoryTimecellPopupTitle>
                                {currentAppointment?.title}
                            </AppointmentHistoryTimecellPopupTitle>
                            <AppointmentHistoryTimecellPopupContent>
                                {currentAppointment?.content.split('\n').map((item, index) => (
                                    <div style={{ minHeight: '24px' }} key={index}>
                                        {item ? item : ' '}
                                    </div>
                                ))}
                            </AppointmentHistoryTimecellPopupContent>
                            <AppointmentHistoryTimecellPopupButton
                                onClick={() => setPopupActive(false)}
                            >
                                Go back
                            </AppointmentHistoryTimecellPopupButton>
                        </AppointmentHistoryTimecellPopupWrapper>
                    </AppointmentHistoryTimecellPopupContainer>
                )}
            </AppointmentHistoryList>
        </AppointmentHistoryWrapper>
    );
};
