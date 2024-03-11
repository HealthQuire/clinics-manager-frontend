import { configureStore } from '@reduxjs/toolkit';
import { timecellApi } from './api/timecell-api.ts';
import { doctorApi } from './api/doctor-api.ts';
import { customerApi } from './api/customer-api.ts';
import { appointmentApi } from './api/appointment-api.ts';

const store = configureStore({
    reducer: {
        [timecellApi.reducerPath]: timecellApi.reducer,
        [doctorApi.reducerPath]: doctorApi.reducer,
        [customerApi.reducerPath]: customerApi.reducer,
        [appointmentApi.reducerPath]: appointmentApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
            .concat(timecellApi.middleware)
            .concat(doctorApi.middleware)
            .concat(customerApi.middleware)
            .concat(appointmentApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch

export default store;
