import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../components/basic/Button";

const navItems = [
    {
        name: "Training Solutions",
        hasDropdown: true,
        items: ["Corporate Training", "Workshops", "Seminars"],
    },
    {
        name: "Courses",
        hasDropdown: true,
        items: ["Frontend", "Backend", "Fullstack"],
    },
    {
        name: "Resources",
        hasDropdown: true,
        items: ["Blog", "Case Studies", "E-books"],
    },
    { name: "Plans", hasDropdown: false },
];

const Dropdown = ({ items }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="absolute top-full mt-2 w-56 bg-white shadow-lg rounded-lg p-4 z-50"
    >
        {items.map((item, i) => (
            <div key={i} className="hover:text-blue-600 cursor-pointer py-1">
                {item}
            </div>
        ))}
    </motion.div>
);

export default function NavbarContent(props) {
    const [openDropdown, setOpenDropdown] = useState(null);

    return (
        <nav className="w-full px-6 py-4 bg-white shadow-md flex items-center justify-between relative z-50">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">YourLogo</div>

            {/* Nav Links */}
            <div className="flex space-x-6 relative">
                {navItems.map((item, index) => (
                    <div
                        key={index}
                        className="relative"
                        onMouseEnter={() =>
                            item.hasDropdown && setOpenDropdown(index)
                        }
                        onMouseLeave={() =>
                            item.hasDropdown && setOpenDropdown(null)
                        }
                    >
                        <div className="flex items-center space-x-1 cursor-pointer font-medium text-gray-700 hover:text-blue-600">
                            <span>{item.name}</span>
                            {item.hasDropdown && <ChevronDown size={16} />}
                        </div>
                        <AnimatePresence>
                            {openDropdown === index && (
                                <Dropdown items={item.items} />
                            )}
                        </AnimatePresence>
                    </div>
                ))}
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
                    onClick={() => alert("Demo Requested!")}
                />
            </div>
        </nav>
    );
}
