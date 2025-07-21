import { useRoutes, Outlet } from "react-router-dom";

import DemoPage from "./DemoPage";
import LearningPath from "./LearningPath";
import CategoryDetails from "./LearningPath/CategoryDetails";

import PrivacyPolicy from "./company/PrivacyPolicy";
import TermsAndConditions from "./company/TermsAndConditions";
import CancellationPolicy from "./company/CancellationPolicy";

export default function OtherRoutes(props) {
    const routes = useRoutes([
        { path: "/demo", element: <DemoPage /> },
        {
            path: "/learning-path",
            children: [
                { path: "", element: <LearningPath /> },
                {
                    path: "general-business",
                    element: <CategoryDetails />,
                },
            ],
        },
        { path: "/privacy-policy", element: <PrivacyPolicy /> },
        { path: "/terms-conditions", element: <TermsAndConditions /> },
        { path: "/cancellation-policy", element: <CancellationPolicy /> },
    ]);
    return <div className="">{routes}</div>;
}
