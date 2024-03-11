import {
    ActiveTimeTableDayCell,
    PopupButton,
    PopupContainer,
    PopupTitle,
    PopupWrapper,
    TimeTableContainer,
    TimeTableDayCell,
    TimeTableDayColumn,
    TimeTableDayColumnTitle,
    TimeTableTitle,
    TimeTableWrapper
} from './styles.ts';
import { useEffect, useState } from 'react';
import { useGetCurrentWeekDoctorTimeCellsQuery } from '../../store/api/timecell-api.ts';
import TimetablePage from './timetable-page.tsx';
import { customerApi, ICustomer } from '../../store/api/customer-api.ts';

const dayTimes = [
    '7:00',
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00'
];

const getWeekDay = (index: number) => {
    const date = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return String(date.getDate() + index) + ' ' + days[(date.getDay() + index) % 7];
};

const TimeTable = () => {
    const [popupActive, setPopupActive] = useState(false);
    const [timeTableCanvas, setTimeTableCanvas] = useState<Array<Array<string>>>([]);
    const currentWeekCells = useGetCurrentWeekDoctorTimeCellsQuery();
    const [currentCustomer, setCurrentCustomer] = useState<ICustomer | null>(null);

    useEffect(() => {
        setTimeTableCanvas(new Array(7).fill(null).map(() => dayTimes));
    }, []);

    useEffect(() => {
        console.log(currentWeekCells.data);
    }, [currentWeekCells]);

    const handlePopup = (customer: ICustomer) => {
        setCurrentCustomer(customer);
        setPopupActive(true);
    };

    return (
        <TimeTableWrapper>
            <TimeTableTitle>Timetable</TimeTableTitle>
            <TimeTableContainer>
                {timeTableCanvas.map((day, dayIndex) => (
                    <TimeTableDayColumn key={dayIndex}>
                        <TimeTableDayColumnTitle> {getWeekDay(dayIndex)} </TimeTableDayColumnTitle>
                        {day.map((time, timeIndex) => {
                            const today = new Date();
                            today.setDate(today.getDate() + dayIndex);
                            today.setHours(3);
                            today.setMinutes(0);
                            today.setSeconds(0);
                            today.setMilliseconds(0);
                            //console.log(today.toUTCString());
                            const active = currentWeekCells.data?.find((item) => {
                                return (
                                    item.time == time &&
                                    String(new Date(item.date)) == String(today)
                                );
                            });
                            return active ? (
                                <ActiveTimeTableDayCell
                                    onClick={() => handlePopup(active.customer)}
                                    key={timeIndex}
                                >
                                    <div style={{ fontSize: '16px' }}>
                                        {active.customer.lastname} {active.customer.firstname}
                                    </div>
                                    {time}
                                </ActiveTimeTableDayCell>
                            ) : (
                                <TimeTableDayCell key={timeIndex}>{time}</TimeTableDayCell>
                            );
                        })}
                    </TimeTableDayColumn>
                ))}
            </TimeTableContainer>
            {popupActive && (
                <PopupContainer>
                    <PopupWrapper>
                        <PopupTitle>
                            {currentCustomer?.lastname} {currentCustomer?.firstname}
                        </PopupTitle>
                        <PopupButton onClick={() => setPopupActive(false)}>Continue</PopupButton>
                    </PopupWrapper>
                </PopupContainer>
            )}
        </TimeTableWrapper>
    );
};

export default TimeTable;
