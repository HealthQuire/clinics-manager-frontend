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
    ManageDoctorsListItemTitle,
    ManageDoctorsTitle,
    ManageDoctorsWrapper,
} from "../manage-doctors/styles.ts";
import { Preloader } from "../../components/preloader/preloader.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {
    AppointmentHistoryTimecellPopupButton,
    AppointmentHistoryTimecellPopupContainer,
    AppointmentHistoryTimecellPopupTitle,
    AppointmentHistoryTimecellPopupWrapper,
} from "../appointment-history/style.ts";
import {
    useGetCustomersQuery,
    usePostCustomerMutation,
} from "../../store/api/customer-api.ts";

const ManageCustomersPage = () => {
    const doctorsQuery = useGetCustomersQuery();
    const [popupActive, setPopupActice] = useState(false);
    const [createCustomer, result] = usePostCustomerMutation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [phone, setPhone] = useState("");
    const [lastname, setLastname] = useState("");
    const [fathername, setFathername] = useState("");
    const [description, setDescription] = useState("");
    const [gender, setGender] = useState("");
    const [birthdate, setBirthDate] = useState("");
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
            birthdate: birthdate,
            gender: gender == "male",
            comment: description,
        };

        await createCustomer(data);

        setPopupActice(true);
    };

    return (
        <ManageDoctorsWrapper>
            <ManageDoctorsTitle> Manage customers </ManageDoctorsTitle>
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
                            Patient email
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
                            Patient phone
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
                            Patient password
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
                            Patient firstname
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
                            Patient lastname
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
                            Patient fathername
                        </ManageDoctorsFormLabel>
                        <ManageDoctorsFormInput
                            value={fathername}
                            name="fathername"
                            id="fathername"
                            required={true}
                            onChange={(e) => setFathername(e.target.value)}
                            placeholder="fathername here..."
                        />
                        <ManageDoctorsFormLabel htmlFor="description">
                            Comment
                        </ManageDoctorsFormLabel>
                        <ManageDoctorsFormInput
                            value={description}
                            name="description"
                            id="description"
                            required={true}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="comment here..."
                        />
                        <ManageDoctorsFormLabel htmlFor="gender">
                            Patient gender
                        </ManageDoctorsFormLabel>
                        <ManageDoctorsFormInput
                            value={gender}
                            name="gender"
                            id="gender"
                            required={true}
                            onChange={(e) => setGender(e.target.value)}
                            placeholder="gender here..."
                        />
                        <ManageDoctorsFormLabel htmlFor="birthdate">
                            Patient birthdate
                        </ManageDoctorsFormLabel>
                        <ManageDoctorsFormInput
                            value={birthdate}
                            name="birthdate"
                            id="birthdate"
                            required={true}
                            onChange={(e) => setBirthDate(e.target.value)}
                            placeholder="birthdate here..."
                        />
                        <ManageDoctorsFormButton
                            type="submit"
                            value="Create patient"
                        />
                    </div>
                )}
            </ManageDoctorsForm>
            <ManageDoctorsList>
                {doctorsQuery.data ? (
                    doctorsQuery.data.map((doctor, index) => (
                        <ManageDoctorsListItem key={index}>
                            <ManageDoctorsListItemIcon>
                                <FontAwesomeIcon icon={faUser} size="2x" />
                            </ManageDoctorsListItemIcon>
                            <ManageDoctorsListItemTitle>
                                {doctor.lastname} {doctor.firstname}
                            </ManageDoctorsListItemTitle>
                            <ManageDoctorsListItemComment>
                                {doctor.comment}
                            </ManageDoctorsListItemComment>
                            <ManageDoctorsListItemComment>
                                {doctor.gender}
                            </ManageDoctorsListItemComment>

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
                                : "Patient successfully created"}
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

export default ManageCustomersPage;
