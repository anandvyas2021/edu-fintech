import React from "react";
import { useRoutes, Outlet } from "react-router-dom";

import SubscriptionPlans from "./SubscriptionPlans";

export default function NavRoutes(props) {
    const routes = useRoutes([
        { path: "/plans", element: <SubscriptionPlans /> },
        { path: "/plans", element: <SubscriptionPlans /> },
    ]);
    return <div className="">{routes}</div>;
}
