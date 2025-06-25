import React from "react";
import { useRoutes, Outlet } from "react-router-dom";
import Home from "./Home";
import EnterpriseSolutions from "./EnterpriseSolutions";

export default function MainRoutes(props) {
    const routes = useRoutes([{ path: "/", element: <Home /> },{ path: "/team-and-enterprise", element: <EnterpriseSolutions /> }]);
    return <div className="">{routes}</div>;
}
