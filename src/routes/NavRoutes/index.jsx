import React from "react";
import { useRoutes, Outlet } from "react-router-dom";

import SubscriptionPlans from "./SubscriptionPlans";
import Educators from "./Educators";
import EducatorsList from "./Educators/EducatorsList";

export default function NavRoutes(props) {
    const routes = useRoutes([
        { path: "/plans", element: <SubscriptionPlans /> },
        {
            path: "/professionals",
            children: [
                { path: "", element: <Educators /> },
                { path: "list", element: <EducatorsList /> },
            ],
        },
    ]);
    return <div className="">{routes}</div>;
}
