import React from "react";
import { useRoutes, Outlet } from "react-router-dom";

import SubscriptionPlans from "./SubscriptionPlans";

//educator components
import Educators from "./Educators";
import EducatorsList from "./Educators/EducatorsList";
import EducatorDetails from "./Educators/EducatorDetails";

export default function NavRoutes(props) {
    const routes = useRoutes([
        { path: "/plans", element: <SubscriptionPlans /> },
        {
            path: "/professionals",
            children: [
                { path: "", element: <Educators /> },
                { path: "list", element: <EducatorsList /> },
                { path: "details", element: <EducatorDetails /> },
            ],
        },
    ]);
    return <div className="">{routes}</div>;
}
