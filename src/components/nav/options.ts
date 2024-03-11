import { faHospital, faUserDoctor, faBriefcase } from '@fortawesome/free-solid-svg-icons';

export const OptionContainers = [
    {
        to: '/',
        icon: faHospital,
        text: 'Home'
    },
    {
        to: '/timetable',
        icon: faBriefcase,
        text: 'Time Table'
    },
    {
        to: '/appointment-history',
        icon: faUserDoctor,
        text: 'Appointments'
    }
];
