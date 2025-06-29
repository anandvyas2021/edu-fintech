import { useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

import { mockWebinars } from "../../../utils/dummy";

export default function WebinarDetails() {
    const [activeTab, setActiveTab] = useState("Overview");

    const [params] = useSearchParams();
    let currentWebinarSlug = params?.get("name");
    const navigate = useNavigate();
    const webinar = mockWebinars.find(
        (item) => item?.slug === currentWebinarSlug
    );

    console.log(currentWebinarSlug, webinar);
    if (!webinar) {
        return (
            <div className="text-center mt-20 text-lg">Webinar not found.</div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8">
            <button
                onClick={() => navigate(-1)}
                className="text-blue-600 hover:underline text-sm"
            >
                ← Back
            </button>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                    <img
                        src={webinar?.image}
                        alt={webinar?.title}
                        className="w-full h-64 object-cover rounded-lg"
                    />

                    <h1 className="text-3xl font-bold">{webinar?.title}</h1>
                    <span className="text-gray-600">
                        {webinar?.date} · {webinar?.type}
                    </span>

                    <p className="text-gray-700 leading-relaxed">
                        {webinar?.description}
                    </p>

                    <div className="flex space-x-4 border-b mt-6 pb-2">
                        {["Overview", "Agenda", "Credits", "Faculty"].map(
                            (tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`text-sm pb-1 ${
                                        activeTab === tab
                                            ? "border-b-2 border-blue-600 text-blue-600"
                                            : "text-gray-600 hover:text-blue-600"
                                    }`}
                                >
                                    {tab}
                                </button>
                            )
                        )}
                    </div>

                    <div className="mt-4">
                        <h2 className="text-xl font-semibold mb-2">Overview</h2>
                        <p className="text-gray-700">{webinar?.details}</p>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-2">
                            Learning Objectives
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {webinar.objectives.map((obj, index) => (
                                <li key={index}>{obj}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-2">Faculty</h3>
                        <div className="flex items-center space-x-4">
                            <img
                                src={webinar?.faculty?.image}
                                alt={webinar?.faculty?.name}
                                className="w-20 h-20 rounded-full object-cover"
                            />
                            <span className="text-gray-700">
                                {webinar?.faculty?.name}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-full md:w-80 space-y-6">
                    <div className="border p-4 rounded-lg space-y-4">
                        <div>
                            <span className="text-gray-500 text-sm">
                                Live Webinar
                            </span>
                            <div className="font-medium">{webinar?.date}</div>
                        </div>

                        <div className="text-sm text-gray-500">
                            Also available as:
                        </div>
                        <div className="text-gray-700 font-medium">
                            {webinar.type === "Live Webinar"
                                ? "OnDemand Course"
                                : "Live Webinar"}
                        </div>

                        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                            Purchase Options
                        </button>

                        <button className="text-blue-600 text-sm hover:underline">
                            Add to Wishlist
                        </button>
                    </div>

                    <div className="border p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Credits</h4>
                        <div className="flex flex-wrap gap-2">
                            {webinar?.credits?.map((credit, idx) => (
                                <span
                                    key={idx}
                                    className="bg-gray-200 text-sm px-2 py-1 rounded"
                                >
                                    {credit}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="border p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Related Training</h4>
                        <div className="space-y-3">
                            {webinar?.relatedTrainings?.map((rt) => (
                                <div
                                    key={rt?._id}
                                    className="border p-2 rounded hover:bg-gray-50 cursor-pointer"
                                >
                                    <div className="text-xs text-gray-500">
                                        {rt?.type}
                                        {rt?.date && ` - ${rt?.date}`}
                                    </div>
                                    <div className="font-medium text-sm">
                                        {rt?.title}
                                    </div>
                                    <button
                                        onClick={() =>
                                            navigate(`/webinars/${rt._id}`)
                                        }
                                        className="text-blue-600 text-xs mt-1 hover:underline"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-gray-700 max-w-3xl">
                <h3 className="font-semibold text-lg mb-2">
                    Why {`YourBrand`}?
                </h3>
                <p>
                    Over 38 years and 1.4 million customers worth of experience
                    providing continuing education. Our passion is providing you
                    world-class training to help you succeed in business and as
                    a professional.
                </p>
            </div>
        </div>
    );
}
