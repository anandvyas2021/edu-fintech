import { useRoutes, Outlet } from "react-router-dom";

import DemoPage from "./DemoPage";

export default function OtherRoutes(props) {
    const routes = useRoutes([{ path: "/demo", element: <DemoPage /> }]);
    return <div className="">{routes}</div>;
}
