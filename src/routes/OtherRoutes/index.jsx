import { useRoutes, Outlet } from "react-router-dom";

import DemoPage from "./DemoPage";
import LearningPath from "./LearningPath";
import CategoryDetails from "./LearningPath/CategoryDetails";

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
    ]);
    return <div className="">{routes}</div>;
}
