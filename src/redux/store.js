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

import { contactsReduser } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

const contactsConfig = {
    key: 'contactsKey',
    storage,
};


export const store = configureStore({
    reducer: {
        contactsData: persistReducer(contactsConfig , contactsReduser),
        filter: filterReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, PAUSE, REHYDRATE, PERSIST, PURGE, REGISTER]
            },
        }),
    
})

export const persistor = persistStore(store);