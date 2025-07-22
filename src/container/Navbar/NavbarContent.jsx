import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChevronDown, LogOut, ShoppingCart, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/edu-fintech-logo.png";

import { persistor } from "../../app/store";
import { logout } from "../../app/features/auth/authSlice";
import { useLogoutMutation } from "../../app/features/auth/authApiSlice";

import Button from "../../components/basic/Button";
import Loader from "../../components/basic/Loader";

const navItems = [
    {
        name: "Training Solutions",
        hasDropdown: true,
        parentRoute: "/training/solutions",
        items: [
            {
                label: "Teams & Enterprise",
                desc: "Training solutions to support your workforce's continuing education, compliance, and upskilling needs.",
                slug: "team-and-enterprise",
            },
            {
                label: "Professionals",
                desc: "Unlimited access to Learning library for your personal training and development",
                slug: "individual",
            },
        ],
    },
    {
        name: "Courses",
        items: ["Frontend", "Backend", "Fullstack"],
        slug: "training",
    },
    // {
    //     name: "Resources",
    //     hasDropdown: true,
    //     parentRoute: "",
    //     items: [
    //         {
    //             label: "Professional Directory",
    //             desc: "Explore our directory of subject-matter experts to connect with a qualified professional in your field",
    //             slug: "professionals",
    //         },
    //         {
    //             label: "Blog",
    //             desc: "Your one-stop shop for industry news, keen insights, and continuing education resources",
    //             slug: "blog",
    //         },
    //         {
    //             label: "Articles & White Papers",
    //             desc: "Digital resources across a variety of topics to support and enhance your online learning",
    //             slug: "",
    //         },
    //     ],
    // },
    // { name: "Plans", slug: "plans", hasDropdown: false },
];

export default function NavbarContent() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoggedIn } = useSelector((state) => state.auth);

    // console.log("auth", user, isLoggedIn);
    const [logoutServer, { isLoading: apiLoading }] = useLogoutMutation();

    const Dropdown = ({ items, parentRoute }) => (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 top-6 mt-2 min-w-[600px] bg-white shadow-lg rounded-lg p-4 py-6 z-50 flex gap-2"
        >
            {items?.map((item, i) => (
                <div
                    key={i}
                    className="group p-2 flex-1 sm:flex-none w-[300px] rounded-md cursor-pointer bg-blue-50"
                    onClick={() =>
                        item?.slug && navigate(`${parentRoute}/${item?.slug}`)
                    }
                >
                    <div className="group-hover:text-blue-600 font-semibold mb-1 cursor-pointer py-1">
                        {item?.label}
                    </div>
                    <p className="text-xs">{item?.desc}</p>
                </div>
            ))}
        </motion.div>
    );

    const logoutHandler = async () => {
        try {
            await logoutServer();
        } catch (err) {
            console.error("Server logout failed", err);
        } finally {
            dispatch(logout());
            persistor.purge();
            // navigate("/login");
        }
        dispatch(logout());
    };

    return (
        <nav className="relative w-full h-[75px] px-6 pl-20 flex items-center justify-between shadow-md z-50 bg-white">
            {/* Logo */}
            <figure
                className="text-2xl font-bold cursor-pointer text-blue-600"
                onClick={() => navigate("/")}
            >
                <img src={logo} alt="edu-fintech" className="size-[75px]" />
            </figure>

            {/* Nav Links */}
            <div
                className="relative flex items-center h-full"
                onMouseLeave={() => setOpenDropdown(null)}
            >
                <div className="flex space-x-6 h-full">
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative h-full"
                            onMouseEnter={() =>
                                item?.hasDropdown && setOpenDropdown(index)
                            }
                            onClick={() => item?.slug && navigate(item?.slug)}
                        >
                            <div className="flex items-center space-x-1 cursor-pointer h-full font-medium text-gray-700 hover:text-blue-600">
                                <div className="flex items-center h-full">
                                    {item?.name}
                                </div>
                                {item?.hasDropdown && <ChevronDown size={16} />}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dropdown container at fixed left position */}
                <AnimatePresence>
                    {openDropdown !== null &&
                        navItems[openDropdown]?.hasDropdown && (
                            <div
                                className="absolute left-0"
                                onMouseEnter={() =>
                                    setOpenDropdown(openDropdown)
                                }
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <Dropdown
                                    items={navItems[openDropdown]?.items}
                                    parentRoute={
                                        navItems[openDropdown]?.parentRoute
                                    }
                                />
                            </div>
                        )}
                </AnimatePresence>
            </div>

            {/* Search + Button + User Auth */}
            <div className="flex items-center space-x-4 relative">
                <ShoppingCart
                    color="blue"
                    size={30}
                    className="cursor-pointer hover:scale-105 transition-all"
                    onClick={() => navigate("/cart")}
                />
                <input
                    type="text"
                    placeholder="Search..."
                    className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button
                    label="Request Demo"
                    onClick={() => navigate("/demo")}
                />

                {isLoggedIn ? (
                    <div className="relative">
                        <div
                            onClick={() => setShowUserMenu(!showUserMenu)}
                            className="cursor-pointer"
                        >
                            <UserCircle className="text-blue-600" size={28} />
                        </div>
                        {showUserMenu && (
                            <div className="absolute right-0 top-10 mt-2 w-60 shadow-xl border border-blue-200 rounded-md z-50 bg-gray-100">
                                <div className="px-3 py-2">
                                    <div className="capitalize">
                                        Hello,{" "}
                                        <span className="font-semibold text-blue-600">
                                            {user?.first_name} {user?.last_name}
                                        </span>
                                    </div>
                                    <hr />
                                    {/* <div
                                        onClick={() => {
                                            setShowUserMenu(false);
                                            navigate("/profile");
                                        }}
                                        className="hover:bg-gray-400 cursor-pointer"
                                    >
                                        Profile
                                    </div>
                                    <div
                                        onClick={() => {
                                            setShowUserMenu(false);
                                            navigate("/orders");
                                        }}
                                        className="hover:bg-gray-100 cursor-pointer"
                                    >
                                        Orders
                                    </div> */}

                                    <button
                                        className={`group w-full p-1 rounded-lg flex justify-center ${
                                            apiLoading
                                                ? "hover:bg-red-100 cursor-not-allowed"
                                                : "cursor-pointer"
                                        }`}
                                        disabled={apiLoading}
                                        onClick={logoutHandler}
                                    >
                                        {apiLoading ? (
                                            <Loader />
                                        ) : (
                                            <>
                                                <LogOut className="group-hover:text-red-600" />
                                                <p className="font-semibold group-hover:text-red-600">
                                                    Logout
                                                </p>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => navigate("/auth/login")}
                            className="text-sm px-3 py-1 rounded hover:text-blue-600"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => navigate("/auth/sign-up")}
                            className="text-sm px-3 py-1 rounded hover:text-blue-600"
                        >
                            Sign Up
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}
