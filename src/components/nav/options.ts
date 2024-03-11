import {
    faHospital,
    faUserDoctor,
    faTable,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

export const OptionContainers = [
    {
        to: "/",
        icon: faHospital,
        text: "Home",
    },
    {
        to: "/manage-doctors",
        icon: faUserDoctor,
        text: "Manage doctors",
    },
    {
        to: "/manage-customers",
        icon: faUser,
        text: "Manage patients",
    },
    {
        to: "/manage-timecells",
        icon: faTable,
        text: "Manage timetable",
    },
];
