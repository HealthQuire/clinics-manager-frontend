import {
    ManageDoctorsForm,
    ManageDoctorsFormButton,
    ManageDoctorsFormInput,
    ManageDoctorsFormLabel,
    ManageDoctorsFormTitle,
    ManageDoctorsList,
    ManageDoctorsListItem,
    ManageDoctorsListItemComment,
    ManageDoctorsListItemIcon,
    ManageDoctorsListItemServicesItem,
    ManageDoctorsListItemServicesList,
    ManageDoctorsListItemTitle,
    ManageDoctorsTitle,
    ManageDoctorsWrapper,
} from "./styles.ts";
import {
    useGetDoctorsQuery,
    usePostDoctorMutation,
} from "../../store/api/doctor-api.ts";
import { Preloader } from "../../components/preloader/preloader.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserDoctor,
    faEdit,
    faRemove,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {
    AppointmentHistoryTimecellPopupButton,
    AppointmentHistoryTimecellPopupContainer,
    AppointmentHistoryTimecellPopupTitle,
    AppointmentHistoryTimecellPopupWrapper,
} from "../appointment-history/style.ts";

const ManageDoctorsPage = () => {
    const doctorsQuery = useGetDoctorsQuery();
    const [popupActive, setPopupActice] = useState(false);
    const [createDoctor, result] = usePostDoctorMutation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [phone, setPhone] = useState("");
    const [lastname, setLastname] = useState("");
    const [fathername, setFathername] = useState("");
    const [description, setDescription] = useState("");
    const [medservises, setMedServises] = useState("");
    const [yearStarted, setYearStarted] = useState("");
    const [formActive, setFormActive] = useState(false);

    useEffect(() => {
        console.log(result);
    }, [result]);

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {
            email: email,
            password: password,
            medcentreid: "DEMO",
            firstname: firstname,
            lastname: lastname,
            fathername: fathername,
            phone: phone,
            avatarUrl: "http://files/images/avatar-demo.png",
            age: 30,
            year_started: parseInt(yearStarted),
            medservicesids: medservises.split(" "),
            description: description,
        };

        await createDoctor(data);

        setPopupActice(true);
    };

    return (
        <ManageDoctorsWrapper>
            <ManageDoctorsTitle> Manage doctors </ManageDoctorsTitle>
            <ManageDoctorsForm onSubmit={submit}>
                <ManageDoctorsFormTitle
                    onClick={() => setFormActive(!formActive)}
                >
                    {formActive ? "Hide form" : "Show form"}{" "}
                </ManageDoctorsFormTitle>
                {formActive && (
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "start",
                            alignItems: "start",
                        }}
                    >
                        {" "}
                        <ManageDoctorsFormLabel htmlFor="email">
                            Doctor email
                        </ManageDoctorsFormLabel>
                        <ManageDoctorsFormInput
                            value={email}
                            name="email"
                            id="email"
                            required={true}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email here..."
                        />
                        <ManageDoctorsFormLabel htmlFor="phone">
                            Doctor phone
                        </ManageDoctorsFormLabel>
                        <ManageDoctorsFormInput
                            value={phone}
                            name="phone"
                            id="phone"
                            required={true}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="phone here..."
                        />
                        <ManageDoctorsFormLabel htmlFor="password">
                            Doctor password
                        </ManageDoctorsFormLabel>
                        <ManageDoctorsFormInput
                            value={password}
                            name="password"
                            id="password"
                            type="password"
                            required={true}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="password here..."
                        />
                        <ManageDoctorsFormLabel htmlFor="firstname">
                            Doctor firstname
                        </ManageDoctorsFormLabel>
                        <ManageDoctorsFormInput
                            value={firstname}
                            name="firstname"
                            id="firstname"
                            required={true}
                            onChange={(e) => setFirstname(e.target.value)}
                            placeholder="firstname here..."
                        />
                        <ManageDoctorsFormLabel htmlFor="lastname">
                            Doctor lastname
                        </ManageDoctorsFormLabel>
                        <ManageDoctorsFormInput
                            value={lastname}
                            name="lastname"
                            id="lastname"
                            required={true}
                            onChange={(e) => setLastname(e.target.value)}
                            placeholder="lastname here..."
                        />
                        <ManageDoctorsFormLabel htmlFor="fathername">
                            Doctor fathername
                        </ManageDoctorsFormLabel>
                        <ManageDoctorsFormInput
                            value={fathername}
                            name="fathername"
                            id="fathername"
                            required={true}
                            onChange={(e) => setFathername(e.target.value)}
                            placeholder="fathername here..."
                        />
                        <ManageDoctorsFormLabel htmlFor="medservices">
                            Doctor medical services
                        </ManageDoctorsFormLabel>
                        <ManageDoctorsFormInput
                            value={medservises}
                            name="medservices"
                            id="medservices"
                            required={true}
                            onChange={(e) => setMedServises(e.target.value)}
                            placeholder="medservices here divided by space..."
                        />
                        <ManageDoctorsFormLabel htmlFor="description">
                            Doctor description
                        </ManageDoctorsFormLabel>
                        <ManageDoctorsFormInput
                            value={description}
                            name="description"
                            id="description"
                            required={true}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="description here..."
                        />
                        <ManageDoctorsFormLabel htmlFor="yearstarted">
                            Doctor year started
                        </ManageDoctorsFormLabel>
                        <ManageDoctorsFormInput
                            value={yearStarted}
                            name="yearstarted"
                            id="yearstarted"
                            required={true}
                            onChange={(e) => setYearStarted(e.target.value)}
                            placeholder="year started here..."
                        />
                        <ManageDoctorsFormButton
                            type="submit"
                            value="Create doctor"
                        />
                    </div>
                )}
            </ManageDoctorsForm>
            <ManageDoctorsList>
                {doctorsQuery.data ? (
                    doctorsQuery.data.map((doctor, index) => (
                        <ManageDoctorsListItem key={index}>
                            <ManageDoctorsListItemIcon>
                                <FontAwesomeIcon
                                    icon={faUserDoctor}
                                    size="2x"
                                />
                            </ManageDoctorsListItemIcon>
                            <ManageDoctorsListItemTitle>
                                {doctor.lastname} {doctor.firstname}
                            </ManageDoctorsListItemTitle>
                            <ManageDoctorsListItemComment>
                                {doctor.description}
                            </ManageDoctorsListItemComment>
                            <ManageDoctorsListItemServicesList>
                                {doctor.medservicesids.map((item, index) => (
                                    <ManageDoctorsListItemServicesItem
                                        key={index}
                                    >
                                        {item}
                                    </ManageDoctorsListItemServicesItem>
                                ))}
                            </ManageDoctorsListItemServicesList>
                            <ManageDoctorsListItemIcon>
                                <FontAwesomeIcon icon={faEdit} size="1x" />
                            </ManageDoctorsListItemIcon>
                            <ManageDoctorsListItemIcon>
                                <FontAwesomeIcon icon={faRemove} size="1x" />
                            </ManageDoctorsListItemIcon>
                        </ManageDoctorsListItem>
                    ))
                ) : (
                    <Preloader />
                )}
            </ManageDoctorsList>
            {popupActive && (
                <AppointmentHistoryTimecellPopupContainer>
                    <AppointmentHistoryTimecellPopupWrapper>
                        <AppointmentHistoryTimecellPopupTitle>
                            {result.isError
                                ? "Error: " + result.error
                                : "Doctor successfully created"}
                        </AppointmentHistoryTimecellPopupTitle>
                        <AppointmentHistoryTimecellPopupButton
                            onClick={() => setPopupActice(false)}
                        >
                            Continue
                        </AppointmentHistoryTimecellPopupButton>
                    </AppointmentHistoryTimecellPopupWrapper>
                </AppointmentHistoryTimecellPopupContainer>
            )}
        </ManageDoctorsWrapper>
    );
};

export default ManageDoctorsPage;
