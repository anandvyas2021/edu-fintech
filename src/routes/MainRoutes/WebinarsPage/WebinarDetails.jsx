import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Overview from "./detailsTabs/Overview";
import Agenda from "./detailsTabs/Agenda";
import Credits from "./detailsTabs/Credits";
import Faculty from "./detailsTabs/Faculty";
import AccessPass from "./detailsTabs/AccessPass";

import { mockWebinars } from "../../../utils/dummy";
import Button from "../../../components/basic/Button";
import Modal from "../../../components/basic/Modal";
import PurchaseOptions from "../../../components/layouts/PurchaseOptions";

export default function WebinarDetails() {
    const [activeTab, setActiveTab] = useState("Overview");
    const [isPurchaseModal, setIsPurchaseModal] = useState(false);

    const [params] = useSearchParams();
    let currentWebinarSlug = params?.get("name");
    const navigate = useNavigate();
    const webinar = mockWebinars.find(
        (item) => item?.slug === currentWebinarSlug
    );

    const handlePurchaseClose = () => {
        setIsPurchaseModal(false);
    };

    if (!webinar) {
        return (
            <div className="text-center mt-20 text-lg">Webinar not found.</div>
        );
    }

    return (
        <>
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
                            {[
                                "Overview",
                                "Agenda",
                                "Credits",
                                "Faculty",
                                "All-Access Pass",
                            ].map((tab) => (
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
                            ))}
                        </div>
                        <div className="mt-4">
                            {activeTab === "Overview" && (
                                <Overview overview={webinar?.overview} />
                            )}

                            {activeTab === "Agenda" && (
                                <Agenda agenda={webinar?.agenda} />
                            )}

                            {activeTab === "Credits" && (
                                <Credits credits={webinar?.credits} />
                            )}

                            {activeTab === "Faculty" && (
                                <Faculty faculty={webinar?.overview?.faculty} />
                            )}
                            {activeTab === "All-Access Pass" && <AccessPass />}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="w-full md:w-80 space-y-6">
                        <div className="border p-4 rounded-lg space-y-4">
                            <div>
                                <span className="text-gray-500 text-sm">
                                    {webinar?.type}
                                </span>
                                <div className="font-medium">
                                    {webinar?.date}
                                </div>
                            </div>

                            <div>
                                <div className="text-sm text-gray-500">
                                    Also available as:
                                </div>
                                <div className="text-gray-700 font-medium">
                                    {webinar?.otherType} Course
                                </div>
                            </div>
                            <Button
                                label="Purchase Options"
                                className="w-full"
                                onClick={() =>
                                    setIsPurchaseModal((prev) => !prev)
                                }
                            />

                            <button className="text-blue-600 text-sm hover:underline">
                                + Add to Wishlist
                            </button>
                        </div>

                        <div className="border p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Credits</h4>
                            <div className="flex flex-wrap gap-2">
                                {webinar?.credit?.map((credit, idx) => (
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
                            <h4 className="font-medium mb-2">
                                Related Training
                            </h4>
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

                        <div className="mt-8 text-gray-700 max-w-3xl">
                            <h3 className="font-semibold text-lg mb-2">
                                Why Us?
                            </h3>
                            <p>
                                Over 38 years and 1.4 million customers worth of
                                experience providing continuing education. Our
                                passion is providing you world-class training to
                                help you succeed in business and as a
                                professional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={isPurchaseModal} handleClose={handlePurchaseClose}>
                <PurchaseOptions />
            </Modal>
        </>
    );
}
