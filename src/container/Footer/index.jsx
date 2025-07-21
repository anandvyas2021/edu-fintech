import { useNavigate } from "react-router-dom";

export default function Footer() {
    let navigate = useNavigate();

    return (
        <footer className="relative mx-5 shadow-xl bg-[#F8FAFC] text-gray-700 !font-sans rounded-lg">
            {/* Link Sections */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 py-10 border-t border-gray-200">
                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Contact
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                            📞 602–774–4735
                        </li>
                        <li className="flex items-start gap-2">
                            📍 11022 South 51st Street Suite 105, Phoenix, AZ
                            85044
                        </li>
                        <li className="flex items-start gap-2">
                            📧 hello@fintech.com
                        </li>
                    </ul>
                </div>

                {/* Navigation columns */}
                {[
                    {
                        title: "Navigate",
                        links: [
                            "Services",
                            "Success Stories",
                            "Discover",
                            "Care",
                            "Download App",
                        ],
                    },
                    {
                        title: "Solution",
                        links: [
                            "Get in Touch",
                            "Technology",
                            "Who’re We?",
                            "Expertise",
                        ],
                    },
                    {
                        title: "Discover",
                        links: [
                            "Latest News",
                            "New Arrivals",
                            "Solution",
                            "Gain Profession",
                            "Career",
                        ],
                    },
                    {
                        title: "Follow Us",
                        links: ["Facebook", "Instagram", "LinkedIn", "Twitter"],
                    },
                ].map((col) => (
                    <div key={col.title}>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                            {col.title}
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            {col.links.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="hover:text-indigo-600 transition"
                                    >
                                        {link}
                                    </a>
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
