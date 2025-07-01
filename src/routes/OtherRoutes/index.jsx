import { useRoutes, Outlet } from "react-router-dom";

import DemoPage from "./DemoPage";
import LearningPath from "./LearningPath/LearningPath";

export default function OtherRoutes(props) {
    const routes = useRoutes([
        { path: "/demo", element: <DemoPage /> },
        { path: "/learning-path", element: <LearningPath /> },
    ]);
    return <div className="">{routes}</div>;
}
