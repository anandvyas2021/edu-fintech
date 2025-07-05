import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./features/api/apiSlice";

import authReducer from "./features/auth/authSlice";
// import userReducer from "./features/user/userSlice";
// import transactionReducer from "./features/transactions/transactionSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"], // Persist only auth slice
};

const rootReducer = combineReducers({
    auth: authReducer,
    // user: userReducer,
    // transactions: transactionReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Required for redux-persist
        }).concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
