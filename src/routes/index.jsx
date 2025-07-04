import { useRoutes } from "react-router-dom";

//auth routes
import SignUp from "../auth/SignUp";

//main routes
import MainRoutes from "./MainRoutes";
import NavRoutes from "./NavRoutes";
import OtherRoutes from "./OtherRoutes";

export default function Routes(props) {
    let isLoggedIn = false;
    const routes = useRoutes([
        {
            path: "/*",
            element: [
                <MainRoutes {...props} />,
                <NavRoutes {...props} />,
                <OtherRoutes {...props} />,
            ],
        },
    ]);
    const authRoutes = useRoutes([
        {
            path: "/",
            children: [{ path: "sign-up", element: <SignUp /> }],
        },
    ]);
    return <main className="">{isLoggedIn ? routes : authRoutes}</main>;
}
