import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAccessToken } from '../../utils/auth.ts';
import { ITimeCell } from './timecell-api.ts';

export interface IAppointment {
    _id: string;
    timecell: ITimeCell;
    title: string;
    content: string;
    status: number;
}

export interface IAppointmentBody {
    title: string;
    timecell: string;
    content: string;
    status: number;
}

export const appointmentApi = createApi({
    reducerPath: 'APPOINTMENT_API',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API_URL}/appointment`,
        prepareHeaders: (headers) => {
            headers.set('Authorization', getAccessToken());
            return headers;
        }
    }),
    tagTypes: ['APPOINTMENT'],
    endpoints: (builder) => ({
        getDoctorAppointment: builder.query<IAppointment[], void>({
            query: () => `/${localStorage.getItem('doctorid')}`,
            providesTags: ['APPOINTMENT']
        }),

        getAppointmentById: builder.query({
            query: (id: string) => `/${id}`,
            providesTags: ['APPOINTMENT']
        }),

        getDoctorAppointments: builder.query<IAppointment[], string>({
            query: (searchString: string) =>
                `/doctor/${localStorage.getItem('doctorid')}/${searchString ? searchString : '-'}`,
            providesTags: ['APPOINTMENT']
        }),

        postAppointment: builder.mutation<IAppointment, IAppointmentBody>({
            query(body: IAppointmentBody) {
                return {
                    url: `/`,
                    method: 'POST',
                    body
                };
            },
            invalidatesTags: ['APPOINTMENT']
        }),

        patchAppoitnment: builder.mutation<
            IAppointment,
            { update: Partial<IAppointmentBody>; id: string }
        >({
            query(body: { update: Partial<IAppointmentBody>; id: string }) {
                return {
                    url: `/${body.id}`,
                    method: 'PATCH',
                    body: body.update
                };
            },
            invalidatesTags: ['APPOINTMENT']
        }),

        deleteAppointment: builder.mutation<IAppointment, { id: string }>({
            query(body: { id: string }) {
                return {
                    url: `/${body.id}`,
                    method: 'DELETE'
                };
            },
            invalidatesTags: ['APPOINTMENT']
        })
    })
});

export const {
    useGetAppointmentByIdQuery,
    useDeleteAppointmentMutation,
    usePatchAppoitnmentMutation,
    usePostAppointmentMutation,
    useGetDoctorAppointmentsQuery
} = appointmentApi;
