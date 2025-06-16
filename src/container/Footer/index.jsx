import React from "react";

export default function Footer() {
    return (
        <footer className="relative mx-5 shadow-xl bg-[#F8FAFC] text-gray-700 !font-sans rounded-lg">
            {/* Top CTA Section */}
            <div className="max-w-5xl mx-auto px-6 py-16 text-center">
                <div className="mb-6 flex justify-center">
                    <div className="bg-indigo-700 text-white rounded-full p-4">
                        {/* Placeholder for logo icon */}
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6l4 2"
                            />
                        </svg>
                    </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                    Book An Appointment Today
                </h2>
                <p className="mt-3 text-gray-500 max-w-xl mx-auto">
                    Book an appointment with our handpicked mental health and
                    wellness experts whenever or wherever you want!
                </p>
                <button className="mt-6 inline-flex items-center px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition">
                    Book Appointment
                    <span className="ml-2">→</span>
                </button>
            </div>

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
                            📧 hello@unifiedui.com
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
            <div className="border-t border-gray-200 py-4 px-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
                <p>
                    ©Copyright{" "}
                    <a href="#" className="text-indigo-600 hover:underline">
                        UnifiedUI.com
                    </a>{" "}
                    All rights reserved. 2024
                </p>
                <div className="flex space-x-6 mt-2 md:mt-0">
                    <a href="#" className="hover:text-indigo-600">
                        Privacy & Policy
                    </a>
                    <a href="#" className="hover:text-indigo-600">
                        Terms & Condition
                    </a>
                </div>
            </div>

            {/* Gradient Background */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 pointer-events-none opacity-60 blur-lg" />
        </footer>
    );
}
