import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store, persistor } from "./app/store.jsx";
import { PersistGate } from "redux-persist/integration/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import MainApp from "./MainApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <React.StrictMode>
                <MainApp />
            </React.StrictMode>
        </PersistGate>
    </Provider>
);
