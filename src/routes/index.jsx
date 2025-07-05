import { useRoutes } from "react-router-dom";

import MainRoutes from "./MainRoutes";
import NavRoutes from "./NavRoutes";
import OtherRoutes from "./OtherRoutes";
import AuthRoutes from "../auth";

export default function Routes(props) {
    const routes = useRoutes([
        {
            path: "/*",
            element: [
                <MainRoutes {...props} />,
                <NavRoutes {...props} />,
                <OtherRoutes {...props} />,
                <AuthRoutes {...props} />,
            ],
        },
    ]);

    return <main className="">{routes}</main>;
}
