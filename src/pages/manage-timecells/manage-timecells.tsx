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
import { faTable, faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {
    AppointmentHistoryTimecellPopupButton,
    AppointmentHistoryTimecellPopupContainer,
    AppointmentHistoryTimecellPopupTitle,
    AppointmentHistoryTimecellPopupWrapper,
} from "../appointment-history/style.ts";
import { useGetCustomersQuery } from "../../store/api/customer-api.ts";
import {
    useGetTimeCellsQuery,
    usePostTimeCellMutation,
} from "../../store/api/timecell-api.ts";
import { useGetDoctorsQuery } from "../../store/api/doctor-api.ts";

const ManageTimecellsPage = () => {
    const doctorsQuery = useGetDoctorsQuery();
    const timecellQuery = useGetTimeCellsQuery();
    const customerQuery = useGetCustomersQuery();
    const [popupActive, setPopupActice] = useState(false);
    const [createTimecell, result] = usePostTimeCellMutation();
    const [comment, setComment] = useState("");
    const [customerId, setCustomerId] = useState("");
    const [doctorId, setDoctorId] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [showCustomers, setShowCustomers] = useState(false);
    const [showDoctors, setShowDoctors] = useState(false);
    const [formActive, setFormActive] = useState(false);

    useEffect(() => {
        console.log(result);
    }, [result]);

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {
            comment: comment,
            customer: customerId,
            doctor: doctorId,
            time: time,
            date: date,
        };

        await createTimecell(data);

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
                        <ManageDoctorsFormLabel htmlFor="comment">
                            Comment
                        </ManageDoctorsFormLabel>
                        <ManageDoctorsFormInput
                            value={comment}
                            name="comment"
                            id="comment"
                            required={true}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="comment here..."
                        />
                        <ManageDoctorsFormLabel htmlFor="time">
                            Time (hh:mm)
                        </ManageDoctorsFormLabel>
                        <ManageDoctorsFormInput
                            value={time}
                            name="time"
                            id="time"
                            required={true}
                            onChange={(e) => setTime(e.target.value)}
                            placeholder="time here..."
                        />
                        <ManageDoctorsFormLabel htmlFor="date">
                            Date (YYYY-MM-DD)
                        </ManageDoctorsFormLabel>
                        <ManageDoctorsFormInput
                            value={date}
                            name="date"
                            id="date"
                            required={true}
                            onChange={(e) => setDate(e.target.value)}
                            placeholder="date here..."
                        />
                        <h2 onClick={() => setShowDoctors(!showDoctors)}>
                            {showDoctors
                                ? "hide doctors selector"
                                : "show doctors selector"}
                        </h2>
                        <h3>
                            {doctorId ?? "selected customer id:" + doctorId}
                        </h3>
                        {showDoctors && (
                            <div>
                                {doctorsQuery?.data?.map((item, index) => (
                                    <div
                                        style={{
                                            cursor: "pointer",
                                            border: "1px solid #333333",
                                            borderRadius: "4px",
                                            padding: "8px",
                                        }}
                                        onClick={() => setDoctorId(item._id)}
                                        key={index}
                                    >
                                        {item.lastname} {item.firstname}
                                    </div>
                                ))}
                            </div>
                        )}
                        <h2
                            style={{ marginTop: "128px" }}
                            onClick={() => setShowCustomers(!showCustomers)}
                        >
                            {showCustomers
                                ? "hide doctors selector"
                                : "show doctors selector"}
                        </h2>
                        <h3>
                            {customerId ?? "selected customer id:" + customerId}
                        </h3>
                        {showCustomers && (
                            <div>
                                {customerQuery?.data?.map((item, index) => (
                                    <div
                                        style={{
                                            cursor: "pointer",
                                            border: "1px solid #333333",
                                            borderRadius: "4px",
                                            padding: "8px",
                                        }}
                                        onClick={() => setCustomerId(item._id)}
                                        key={index}
                                    >
                                        {item.lastname} {item.firstname}
                                    </div>
                                ))}
                            </div>
                        )}
                        <ManageDoctorsFormButton
                            type="submit"
                            value="Create doctor"
                        />
                    </div>
                )}
            </ManageDoctorsForm>
            <ManageDoctorsList>
                {timecellQuery.data ? (
                    timecellQuery?.data?.map((doctor, index) => (
                        <ManageDoctorsListItem key={index}>
                            <ManageDoctorsListItemIcon>
                                <FontAwesomeIcon icon={faTable} size="2x" />
                            </ManageDoctorsListItemIcon>
                            <ManageDoctorsListItemTitle>
                                {doctor.doctor?.firstname}{" "}
                                {doctor.doctor?.lastname}
                            </ManageDoctorsListItemTitle>
                            <ManageDoctorsListItemTitle>
                                {doctor.customer?.firstname}{" "}
                                {doctor.customer?.lastname}
                            </ManageDoctorsListItemTitle>

                            <ManageDoctorsListItemComment>
                                {doctor.comment} {String(doctor.date)}{" "}
                                {doctor.time}
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

export default ManageTimecellsPage;
