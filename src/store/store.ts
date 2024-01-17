import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import mainApi from "./api/main-api";
import themeSlice from "./slices/theme-slice.ts";

export const store = configureStore({
    reducer: {
        [mainApi.reducerPath]: mainApi.reducer,
        [themeSlice.name]: themeSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainApi.middleware)
})

export type TRootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch)