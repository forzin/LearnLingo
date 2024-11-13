import { configureStore } from "@reduxjs/toolkit";

import {
    persistStore,
    persistReducer,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const authConfig = {
    key: 'authToken',
    storage,
    whitelist: ['token']
};

import { contactsReduser } from "./contacts/contactsSlice";
import { filterReducer } from "./filters/filterSlice";
import { authReducer } from "./auth/authSlice";

export const store = configureStore({
    reducer: {
        contactsData: contactsReduser,
        filter: filterReducer,
        auth: persistReducer( authConfig, authReducer ),
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, PAUSE, REHYDRATE, PERSIST, PURGE, REGISTER]
            },
        }),
    
})

export const persistor = persistStore(store);
