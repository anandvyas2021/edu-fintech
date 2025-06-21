import React from "react";
import ReactDOM from "react-dom/client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";

import MainApp from "./MainApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MainApp />
    </React.StrictMode>
);
