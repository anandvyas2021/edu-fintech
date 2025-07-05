import { useRoutes, Outlet, Navigate } from "react-router-dom";

import SignUp from "./SignUp";
import LoginIn from "./LoginIn";

export default function AuthRoutes(props) {
    let isLoggedIn = false;

    const routes = useRoutes([
        {
            path: "auth",
            element: isLoggedIn ? <Navigate to="/" /> : <Outlet />,
            children: [
                { path: "sign-up", element: <SignUp /> },
                { path: "login", element: <LoginIn /> },
            ],
        },
    ]);
    return <div className="">{routes}</div>;
}
