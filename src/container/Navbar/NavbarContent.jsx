import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../components/basic/Button";

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
    {
        name: "Resources",
        hasDropdown: true,
        parentRoute: "",
        items: [
            {
                label: "Professional Directory",
                desc: "Explore our directory of subject-matter experts to connect with a qualified professional in your field",
                slug: "professionals",
            },
            {
                label: "Blog",
                desc: "Your one-stop shop for industry news, keen insights, and continuing education resources",
                slug: "blog",
            },
            {
                label: "Articles & White Papers",
                desc: "Digital resources across a variety of topics to support and enhance your online learning",
                slug: "",
            },
        ],
    },
    { name: "Plans", slug: "plans", hasDropdown: false },
];

export default function NavbarContent() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const navigate = useNavigate();

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

    return (
        <nav className="relative w-full h-[70px] px-6 flex items-center justify-between shadow-md z-50 bg-white">
            {/* Logo */}
            <div
                className="text-2xl font-bold cursor-pointer text-blue-600"
                onClick={() => navigate("/")}
            >
                YourLogo
            </div>

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

            {/* Search + Button */}
            <div className="flex items-center space-x-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button
                    label="Request Demo"
                    onClick={() => navigate("/demo")}
                />
            </div>
        </nav>
    );
}
