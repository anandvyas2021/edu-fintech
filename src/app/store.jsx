import { configureStore, combineReducers } from "@reduxjs/toolkit";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";

import { apiSlice } from "./features/api/apiSlice";
import authReducer from "./features/auth/authSlice";
import educatorReducer from "./features/educators/educatorSlice";

const persistConfig = {
    key: "auth",
    storage,
    whitelist: ["user", "accessToken", "isLoggedIn"], // Persist only auth slice
};

const rootReducer = combineReducers({
    auth: persistReducer(persistConfig, authReducer),
    educator: educatorReducer,
    // user: userReducer,
    // transactions: transactionReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    // reducer: persistedReducer,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Required for redux-persist
            // serializableCheck: {
            //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            // },
        }).concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
