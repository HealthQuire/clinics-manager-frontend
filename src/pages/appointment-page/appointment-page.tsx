import {
    AppointmentForm,
    AppointmentFormButton,
    AppointmentFormLabel,
    AppointmentFormSubtitle,
    AppointmentFormTextArea,
    AppointmentFormTitle,
    AppointmentFormWrapper,
    AppointmentPageWrapper,
    PopupButton,
    PopupContainer,
    PopupSubtitle,
    PopupTitle,
    PopupWrapper
} from './styles.ts';
import { useParams } from 'react-router-dom';
import { useGetTimeCellByIdQuery } from '../../store/api/timecell-api.ts';
import { Preloader } from '../../components/preloader/preloader.tsx';
import { usePostAppointmentMutation } from '../../store/api/appointment-api.ts';
import { useEffect, useState } from 'react';

const AppointmentPage = () => {
    const params = useParams();
    const timecellData = useGetTimeCellByIdQuery(params.timecellid ?? '');
    const [postAppointment, result] = usePostAppointmentMutation();
    const [complains, setComplains] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [comment, setComment] = useState('');
    const [direction, setDirection] = useState('');
    const [popupActive, setPopupActive] = useState(false);

    useEffect(() => {
        if (result.isSuccess) {
            setPopupActive(true);
        }
    }, [result]);

    const createAppointmentText = () => {
        return `Medical report ${timecellData.data.date.split('T')[0]}
        
        Patient name: ${timecellData.data.customer.firstname} ${
            timecellData.data.customer.lastname
        } ${timecellData.data.customer.fathername}
        
        Patient birthdate: ${String(timecellData.data.customer.birthdate).split('T')[0]}
        
        Patient gender: ${timecellData.data.customer.gender ? 'male' : 'female'}
        
        Doctor name: ${timecellData.data.doctor.firstname} ${timecellData.data.doctor.lastname} ${
            timecellData.data.doctor.fathername
        }
        
        Complains: ${complains}
        
        Diagnosis: ${diagnosis}
        
        Doctor comment: ${comment}
        
        Direction: ${direction}
        `;
    };

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('123123');
        postAppointment({
            content: createAppointmentText(),
            title: `${timecellData.data.customer.firstname} ${
                timecellData.data.customer.lastname
            } ${timecellData.data.customer.fathername} ${timecellData.data.date.split('T')[0]}`,
            status: 1,
            timecell: params.timecellid ?? ''
        });
    };

    return (
        <AppointmentPageWrapper>
            {timecellData.data ? (
                <AppointmentFormWrapper>
                    <AppointmentFormTitle>
                        {timecellData.data.customer.firstname} {timecellData.data.customer.lastname}{' '}
                        {timecellData.data.date.split('T')[0]} - {timecellData.data.time}
                    </AppointmentFormTitle>
                    <AppointmentFormSubtitle>{timecellData.data.comment}</AppointmentFormSubtitle>
                    <AppointmentForm onSubmit={submitForm}>
                        <h1>Medical report</h1>
                        <AppointmentFormLabel htmlFor="complains">
                            Patient complains:
                        </AppointmentFormLabel>
                        <AppointmentFormTextArea
                            value={complains}
                            name="complains"
                            id="complains"
                            required={true}
                            onChange={(e) => setComplains(e.target.value)}
                            placeholder="Write here..."
                        ></AppointmentFormTextArea>

                        <AppointmentFormLabel htmlFor="diagnosis">
                            Patient diagnosis:
                        </AppointmentFormLabel>
                        <AppointmentFormTextArea
                            value={diagnosis}
                            name="diagnosis"
                            id="diagnosis"
                            required={true}
                            onChange={(e) => setDiagnosis(e.target.value)}
                            placeholder="Write here..."
                        ></AppointmentFormTextArea>

                        <AppointmentFormLabel htmlFor="comment">Comment:</AppointmentFormLabel>
                        <AppointmentFormTextArea
                            value={comment}
                            name="comment"
                            id="comment"
                            required={true}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Write here..."
                        ></AppointmentFormTextArea>

                        <AppointmentFormLabel htmlFor="comment">
                            Direction to patient:
                        </AppointmentFormLabel>
                        <AppointmentFormTextArea
                            value={direction}
                            name="direction"
                            id="direction"
                            required={true}
                            onChange={(e) => setDirection(e.target.value)}
                            placeholder="Write here..."
                        ></AppointmentFormTextArea>

                        <AppointmentFormButton type="submit" value="Create appointment" />
                    </AppointmentForm>
                </AppointmentFormWrapper>
            ) : (
                <Preloader />
            )}

            {popupActive && (
                <PopupContainer>
                    <PopupWrapper>
                        <PopupTitle></PopupTitle>
                        <PopupSubtitle></PopupSubtitle>
                        <PopupButton to="/">go</PopupButton>
                    </PopupWrapper>
                </PopupContainer>
            )}
        </AppointmentPageWrapper>
    );
};

export default AppointmentPage;
