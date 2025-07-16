import { useState } from "react";
import {
    Loader,
    CirclePlus,
    CircleCheck,
    CalendarRange,
    Clock,
} from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Overview from "./detailsTabs/Overview";
import Agenda from "./detailsTabs/Agenda";
import Credits from "./detailsTabs/Credits";
import Faculty from "./detailsTabs/Faculty";
import AccessPass from "./detailsTabs/AccessPass";

import {
    useGetWebinarByIdQuery,
    useGetWebinarBySlugQuery,
} from "../../../app/features/webinars/webinarApiSlice";
import {
    useAddToWishlistMutation,
    useRemoveFromWishlistMutation,
} from "../../../app/features/wishlist/wishlistApiSlice";

import Modal from "../../../components/basic/Modal";
import Button from "../../../components/basic/Button";
import PurchaseOptions from "../../../components/layouts/PurchaseOptions";

export default function WebinarDetails() {
    const [activeTab, setActiveTab] = useState("Overview");
    const [isPurchaseModal, setIsPurchaseModal] = useState(false);

    const navigate = useNavigate();
    const [params] = useSearchParams();
    let currentWebinarSlug = params?.get("name"),
        currentWebinarId = params?.get("_id");

    const { data, isLoading, refetch } = currentWebinarSlug
        ? useGetWebinarBySlugQuery(currentWebinarSlug)
        : useGetWebinarByIdQuery(currentWebinarId);

    const [addToWishlist, { isLoading: addWishLoading }] =
        useAddToWishlistMutation();
    const [removeFromWishlist, { isLoading: removeWishLoading }] =
        useRemoveFromWishlistMutation();

    let webinar = data?.data;

    const handlePurchaseClose = () => {
        setIsPurchaseModal(false);
    };

    const handleWishlist = async (id, action) => {
        if (action === "add") {
            await addToWishlist(id).unwrap();
        } else {
            await removeFromWishlist(id).unwrap();
        }
        return await refetch();
    };

    if (!isLoading && !webinar) {
        return (
            <div className="text-center mt-20 text-lg">Webinar not found.</div>
        );
    }

    // console.log("w", isLoading, webinar);

    let isLive = webinar?.type === "live";
    console.log("isLive", isLive);

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
                    {isLoading ? (
                        <>
                            <div className="flex flex-col gap-4 w-full animate-pulse">
                                <div className="h-80 rounded-lg bg-gray-300"></div>
                                <div className="h-96 rounded-lg bg-gray-300"></div>
                            </div>
                            <div className="w-full md:w-80 rounded-lg bg-gray-300 animate-pulse"></div>
                        </>
                    ) : (
                        <>
                            <div className="flex-1 space-y-4">
                                <img
                                    src={webinar?.image}
                                    alt={webinar?.title}
                                    className="w-full h-64 object-cover rounded-lg"
                                />

                                <h1 className="text-3xl font-bold">
                                    {webinar?.title}
                                </h1>
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
                                        <Overview
                                            overview={webinar?.overview}
                                        />
                                    )}

                                    {activeTab === "Agenda" && (
                                        <Agenda agenda={webinar?.agenda} />
                                    )}

                                    {activeTab === "Credits" && (
                                        <Credits credits={webinar?.credits} />
                                    )}

                                    {activeTab === "Faculty" && (
                                        <Faculty
                                            faculty={webinar?.overview?.faculty}
                                        />
                                    )}
                                    {activeTab === "All-Access Pass" && (
                                        <AccessPass />
                                    )}
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="w-full md:w-80 space-y-6">
                                <div className="border p-4 rounded-lg space-y-4">
                                    {isLive ? (
                                        <div>
                                            <span className="capitalize text-base font-semibold text-red-500">
                                                {webinar?.type} Webinar
                                            </span>
                                            <div className="text-sm font-semibold text-gray-700">
                                                <hr />
                                                <div className="flex items-center gap-2 mt-2">
                                                    <CalendarRange size={18} />
                                                    {webinar?.date}
                                                </div>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <Clock size={18} />
                                                    {webinar?.time}
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}

                                    <div>
                                        <span className="capitalize text-base font-semibold text-red-500">
                                            {`${
                                                isLive
                                                    ? "Also available as"
                                                    : "Available in"
                                            }:`}
                                        </span>
                                        <hr />
                                        <div className="capitalize text-sm font-semibold mt-2 text-gray-700">
                                            {isLive ? (
                                                `${webinar?.otherType} Course`
                                            ) : (
                                                <>
                                                    <p>{"On-Demand Course"}</p>
                                                    <p>{"MP3 Download"}</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <Button
                                        label="Purchase Options"
                                        className="w-full"
                                        onClick={() =>
                                            setIsPurchaseModal((prev) => !prev)
                                        }
                                    />

                                    <div className="flex items-center gap-2">
                                        <button
                                            className={`flex items-center gap-2 text-sm font-semibold  ${
                                                webinar?.inWishlist
                                                    ? "text-green-600"
                                                    : "text-blue-600"
                                            }`}
                                            onClick={() =>
                                                handleWishlist(
                                                    webinar?._id,
                                                    "add"
                                                )
                                            }
                                            disabled={webinar?.inWishlist}
                                        >
                                            {addWishLoading ||
                                            removeWishLoading ||
                                            isLoading ? (
                                                <Loader className="animate-spin" />
                                            ) : webinar?.inWishlist ? (
                                                <CircleCheck />
                                            ) : (
                                                <CirclePlus />
                                            )}
                                            {`${
                                                webinar?.inWishlist
                                                    ? "Added"
                                                    : "Add"
                                            } to Wishlist`}
                                        </button>
                                        {webinar?.inWishlist ? (
                                            <p
                                                className="text-xs font-semibold hover:underline cursor-pointer text-red-600"
                                                onClick={() =>
                                                    handleWishlist(
                                                        webinar?._id,
                                                        "remove"
                                                    )
                                                }
                                            >
                                                Remove
                                            </p>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="border p-4 rounded-lg">
                                    <h4 className="font-medium mb-2">
                                        Credits
                                    </h4>
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

                                {webinar?.relatedTrainings?.length ? (
                                    <div className="border p-4 rounded-lg">
                                        <h4 className="font-medium mb-2">
                                            Related Training
                                        </h4>
                                        <div className="space-y-3">
                                            {webinar?.relatedTrainings?.map(
                                                (rt) => (
                                                    <div
                                                        key={rt?._id}
                                                        className="border p-2 rounded hover:bg-gray-50 cursor-pointer"
                                                        onClick={async () => {
                                                            navigate(
                                                                rt?.slug
                                                                    ? `/training/details?name=${rt?.slug}`
                                                                    : `/training/details?_id=${rt?._id}`
                                                            );
                                                            await refetch();
                                                        }}
                                                    >
                                                        <div className="text-xs text-gray-500">
                                                            {rt?.type}
                                                            {rt?.date &&
                                                                ` - ${rt?.date}`}
                                                        </div>
                                                        <div className="font-medium text-sm">
                                                            {rt?.title}
                                                        </div>
                                                        <button
                                                            // onClick={() =>
                                                            //     navigate(
                                                            //         `/webinars/${rt._id}`
                                                            //     )
                                                            // }
                                                            className="text-xs mt-1 hover:underline text-blue-600"
                                                        >
                                                            Learn More
                                                        </button>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ) : null}

                                <div className="mt-8 text-gray-700 max-w-3xl">
                                    <h3 className="font-semibold text-lg mb-2">
                                        Why Us?
                                    </h3>
                                    <p>
                                        Over 38 years and 1.4 million customers
                                        worth of experience providing continuing
                                        education. Our passion is providing you
                                        world-class training to help you succeed
                                        in business and as a professional.
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Modal
                title="Purchase Options"
                open={isPurchaseModal}
                handleClose={handlePurchaseClose}
            >
                <PurchaseOptions webinar={webinar} />
            </Modal>
        </>
    );
}
