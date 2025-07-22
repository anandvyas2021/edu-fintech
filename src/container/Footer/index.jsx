import { NavLink, useNavigate } from "react-router-dom";

export default function Footer() {
    let navigate = useNavigate();

    return (
        <footer className="relative mx-5 shadow-xl bg-[#F8FAFC] text-gray-700 !font-sans rounded-lg">
            {/* Link Sections */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-gray-200">
                {/* Contact Info */}
                <div className="col-span-2">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Contact
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                            📞 +1 8956238956
                        </li>
                        <li className="flex items-start gap-2">
                            📍 1725 Pennsylvania Avenue NW, Washington, DC 20006
                        </li>
                        <a
                            href="mailto:support@cpaworkshop.com"
                            className="flex items-start gap-2"
                        >
                            📧 support@cpaworkshop.com
                        </a>
                    </ul>
                </div>

                {/* Navigation columns */}
                {[
                    {
                        title: "Navigate",
                        links: [
                            { label: "About us", slug: "about-us" },
                            { label: "Speakers", slug: "professionals" },
                            { label: "Success Stories", slug: "" },
                        ],
                    },
                    {
                        title: "Follow Us",
                        links: [
                            { label: "Facebook", slug: "" },
                            { label: "Instagram", slug: "" },
                            { label: "LinkedIn", slug: "" },
                            { label: "Twitter", slug: "" },
                        ],
                    },
                ].map((col) => (
                    <div key={col.title}>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                            {col.title}
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            {col?.links?.map((item, i) => (
                                <li key={i}>
                                    <NavLink
                                        to={`/${item?.slug}`}
                                        className="hover:text-indigo-600 transition"
                                    >
                                        {item?.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-200 py-4 px-6 text-sm text-gray-900 flex flex-col md:flex-row justify-between items-center">
                <p>
                    ©Copyright{" "}
                    <a href="#" className="text-indigo-600 hover:underline">
                        fintech.com
                    </a>{" "}
                    All rights reserved. 2025
                </p>
                <div className="flex space-x-6 mt-2 md:mt-0">
                    <p
                        className="cursor-pointer hover:text-indigo-600"
                        onClick={() => navigate("/cancellation-policy")}
                    >
                        Cancellation Policy
                    </p>
                    <p
                        className="cursor-pointer hover:text-indigo-600"
                        onClick={() => navigate("/privacy-policy")}
                    >
                        Privacy & Policy
                    </p>
                    <p
                        className="cursor-pointer hover:text-indigo-600"
                        onClick={() => navigate("/terms-conditions")}
                    >
                        Terms & Condition
                    </p>
                </div>
            </div>

            {/* Gradient Background */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 pointer-events-none opacity-60 blur-lg" />
        </footer>
    );
}
