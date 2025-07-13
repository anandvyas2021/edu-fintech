import { useRoutes, Outlet } from "react-router-dom";
import Home from "./Home";

//training solutions
import EnterpriseSolutions from "./TrainingSolutions/EnterpriseSolutions";
import IndividualSolutions from "./TrainingSolutions/IndividualSolutions";

//webinar pages
import WebinarsPage from "./WebinarsPage";
import WebinarDetails from "./WebinarsPage/WebinarDetails";

import Cart from "../../cart";
import PayPalCardCheckout from "../../cart/payment/PayPalCardCheckout";

export default function MainRoutes(props) {
    const routes = useRoutes([
        { path: "/", element: <Home /> },
        {
            path: "/training",
            children: [
                { path: "", element: <WebinarsPage /> },
                { path: "details", element: <WebinarDetails /> },
                {
                    path: "solutions",
                    children: [
                        {
                            path: "team-and-enterprise",
                            element: <EnterpriseSolutions />,
                        },
                        {
                            path: "individual",
                            element: <IndividualSolutions />,
                        },
                    ],
                },
            ],
        },
        { path: "/cart", element: <Cart /> },
        { path: "/checkout", element: <PayPalCardCheckout /> },
    ]);
    return <div className="">{routes}</div>;
}
