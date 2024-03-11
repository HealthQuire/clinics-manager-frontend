import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface ICustomer {
    _id: string;
    userid: string;
    firstname: string;
    lastname: string;
    fathername?: string;
    birthdate: Date;
    gender: boolean;
    comment?: string;
}

export interface ICustomerBody {
    email: string;
    password: string;
    phone?: string;
    firstname: string;
    lastname: string;
    fathername?: string;
    avatarURL?: string;
    birthdate: string;
    gender: boolean;
    comment?: string;
}

const getAccessToken = (): string => {
    const token = localStorage.getItem('access_token');
    return token ? token : '';
};

export const customerApi = createApi({
    reducerPath: 'CUSTOMER_API',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL + '/customer',
        prepareHeaders: (headers) => {
            headers.set('Authorization', getAccessToken());
            return headers;
        }
    }),
    tagTypes: ['CUSTOMER'],
    endpoints: (builder) => ({
        getCustomers: builder.query<ICustomer[], void>({
            query: () => '/',
            providesTags: ['CUSTOMER']
        }),

        getCustomerById: builder.query({
            query: (id: string) => '/' + id,
            providesTags: ['CUSTOMER']
        }),

        postAgent: builder.mutation<ICustomer, ICustomerBody>({
            query(body: ICustomerBody) {
                return {
                    url: `/`,
                    method: 'POST',
                    body: body
                };
            },
            invalidatesTags: ['CUSTOMER']
        }),

        patchAgent: builder.mutation<ICustomer, { update: Partial<ICustomer>; id: string }>({
            query(body: { update: Partial<ICustomer>; id: string }) {
                return {
                    url: `/${body.id}`,
                    method: 'PATCH',
                    body: body.update
                };
            },
            invalidatesTags: ['CUSTOMER']
        }),

        deleteCustomer: builder.mutation<ICustomer, { id: string }>({
            query(body: { id: string }) {
                return {
                    url: `/${body.id}`,
                    method: 'DELETE'
                };
            },
            invalidatesTags: ['CUSTOMER']
        })
    })
});

export const {
    useGetCustomersQuery,
    useGetCustomerByIdQuery,
    usePostAgentMutation,
    usePatchAgentMutation,
    useDeleteCustomerMutation
} = customerApi;
