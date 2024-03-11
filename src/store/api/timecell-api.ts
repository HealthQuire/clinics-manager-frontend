import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IDoctor } from './doctor-api.ts';
import { ICustomer } from './customer-api.ts';
import { getAccessToken } from '../../utils/auth.ts';

export interface ITimeCell {
    _id: string;
    doctor: IDoctor;
    customer: ICustomer;
    comment?: string;
    date: Date;
    time: string;
}

export interface ITimeCellBody {
    doctor: string;
    customer: string;
    comment?: string;
    date: Date;
    time: string;
}

console.log(
    import.meta.env.VITE_API_URL + '/timecell' + `/today/${localStorage.getItem('doctorid')}`
);

export const timecellApi = createApi({
    reducerPath: 'TIMECELL_API',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL + '/timecell',
        prepareHeaders: (headers) => {
            headers.set('Authorization', getAccessToken());
            return headers;
        }
    }),
    tagTypes: ['TIMECELL'],
    endpoints: (builder) => ({
        getTimeCells: builder.query<ITimeCell[], void>({
            query: () => '/',
            providesTags: ['TIMECELL']
        }),

        getTodayDoctorTimeCells: builder.query<ITimeCell[], void>({
            query: () => `/today/${localStorage.getItem('doctorid')}`,
            providesTags: ['TIMECELL']
        }),

        getCurrentWeekDoctorTimeCells: builder.query<ITimeCell[], void>({
            query: () => `/currentweek/${localStorage.getItem('doctorid')}`,
            providesTags: ['TIMECELL']
        }),

        getTimeCellById: builder.query({
            query: (id: string) => `/${id}`,
            providesTags: ['TIMECELL']
        }),

        postAgent: builder.mutation<ITimeCell, ITimeCellBody>({
            query(body: ITimeCellBody) {
                return {
                    url: `/`,
                    method: 'POST',
                    body
                };
            },
            invalidatesTags: ['TIMECELL']
        }),

        putAgent: builder.mutation<ITimeCell, { update: Partial<ITimeCell>; id: string }>({
            query(body: { update: Partial<ITimeCell>; id: string }) {
                return {
                    url: `/${body.id}`,
                    method: 'PATCH',
                    body: body.update
                };
            },
            invalidatesTags: ['TIMECELL']
        }),

        deleteAgent: builder.mutation<ITimeCell, { id: string }>({
            query(body: { id: string }) {
                return {
                    url: `/${body.id}`,
                    method: 'DELETE'
                };
            },
            invalidatesTags: ['TIMECELL']
        })
    })
});

export const {
    useGetTimeCellByIdQuery,
    useGetTimeCellsQuery,
    usePostAgentMutation,
    usePutAgentMutation,
    useDeleteAgentMutation,
    useGetTodayDoctorTimeCellsQuery,
    useGetCurrentWeekDoctorTimeCellsQuery
} = timecellApi;
