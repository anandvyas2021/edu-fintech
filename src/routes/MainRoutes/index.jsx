import React from "react";
import { useRoutes, Outlet } from "react-router-dom";
import Home from "./Home";
import EnterpriseSolutions from "./EnterpriseSolutions";
import WebinarsPage from "./WebinarsPage";
import WebinarDetails from "./WebinarsPage/WebinarDetails";

export default function MainRoutes(props) {
    const routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/team-and-enterprise", element: <EnterpriseSolutions /> },
        {
            path: "/training",
            children: [
                { path: "", element: <WebinarsPage /> },
                { path: "details", element: <WebinarDetails /> },
            ],
        },
    ]);
    return <div className="">{routes}</div>;
}
