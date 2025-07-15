import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MonitorPlay, Download, Tag, SquareCheck, Loader } from "lucide-react";

import { useAddToCartMutation } from "../../app/features/cart/cartApiSlice";
import { useGetWebinarPricingMutation } from "../../app/features/webinars/webinarApiSlice";

import Dropdown from "../basic/Dropdown";

export default function PurchaseOptions({ webinar }) {
    const [demandAddons, setDemandAddOns] = useState("on-demand");
    const [liveAddons, setLiveAddOns] = useState("recording");
    const [cantAttend, setCantAttend] = useState(false);
    const [attendees, setAttendees] = useState(1);

    let navigate = useNavigate();

    const [getPricing, { data: pricing, isLoading }] =
        useGetWebinarPricingMutation();
    const [addToCart, { data, isLoading: cartAddLoading }] =
        useAddToCartMutation();

    useEffect(() => {
        let obj = {
            webinar_id: webinar?._id,
            addons: webinar?.type === "live" ? liveAddons : demandAddons,
        };

        if (webinar?.type === "live") {
            obj.cantAttend = cantAttend;
            obj.attendees = attendees;
        }
        // console.log("obj", obj);

        getPricing(obj);
    }, [attendees, cantAttend, demandAddons, liveAddons]);

    let pricingData = pricing?.data;
    console.log("data", data, pricingData);

    const options = [
        {
            label: "OnDemand Course",
            value: "on-demand",
            icon: MonitorPlay,
            price: pricingData?.course_price,
        },
        {
            label: "MP3 Download",
            value: "mp3",
            icon: Download,
            price: pricingData?.mp3_download_price,
            isHidden: webinar?.type === "live",
        },
        {
            label: "All-Access Pass",
            value: "all_access_pass",
            icon: Tag,
            desc: "Pay once and get a full year of unlimited training in any format, at anytime.",
            price: pricingData?.all_access_pass_price,
        },
    ];

    const handelDemandUI = () => {
        return (
            <>
                {webinar?.type === "on-demand" && (
                    <p className="text-gray-600 mb-4">
                        This program is available in several formats. Please
                        choose the best format for your needs:
                    </p>
                )}
                <div className="space-y-3">
                    {options?.map(
                        ({
                            label,
                            icon: Icon,
                            value,
                            price,
                            desc,
                            isHidden,
                        }) => (
                            <div
                                key={label}
                                className={`flex justify-between items-center p-3 border rounded cursor-pointer ${
                                    demandAddons === value
                                        ? "border-blue-500 bg-blue-50"
                                        : "border-gray-300"
                                } ${isHidden ? "!hidden" : ""}`}
                                onClick={() => setDemandAddOns(value)}
                            >
                                <div className="flex gap-2">
                                    <Icon />
                                    <div className="flex flex-col">
                                        <span>{label}</span>
                                        <span className="text-xs">{desc}</span>
                                    </div>
                                </div>
                                <span className="font-medium">${price}</span>
                            </div>
                        )
                    )}
                </div>
            </>
        );
    };

    const handelLiveUI = () => {
        const attendeeOptions = [
            { label: "No Attendee", value: 0 },
            { label: "1 Attendee", value: 1 },
            { label: "2 Attendees - save $45", value: 2 },
            { label: "3 Attendees - save $90", value: 3 },
            { label: "4 Attendees - save $135", value: 4 },
            { label: "5 Attendees - save $180", value: 5 },
            { label: "6 Attendees - save $225", value: 6 },
            { label: "7 Attendees - save $270", value: 7 },
            { label: "8 Attendees - save $315", value: 8 },
            { label: "9 Attendees - save $360", value: 9 },
            { label: "10 Attendees - save $405", value: 10 },
        ];

        const addOnsOptions = [
            { label: "Add a recording and save!", value: "recording" },
            { label: `OnDemand Webinar - ${69}`, value: "on-demand" },
            { label: `MP3 Download - ${69}`, value: "mp3" },
        ];

        return (
            <>
                <div className="w-full">
                    <Dropdown
                        // label={"Attendees"}
                        options={attendeeOptions}
                        value={attendees}
                        placeholder="Select number of Attendees"
                        className="w-full mb-5"
                        onChange={setAttendees}
                    />
                    <Dropdown
                        options={addOnsOptions}
                        value={liveAddons}
                        placeholder="Select number of Attendees"
                        className="w-full mb-5"
                        onChange={setLiveAddOns}
                    />
                    {attendees > 1 ? (
                        <div className="mt-3 p-2 rounded-lg border bg-green-50">
                            <h3 className="font-semibold mb-2">Discounts:</h3>
                            <div className="flex justify-between text-green-600">
                                <h6>Attendee Discount</h6>
                                <h6>{`$${pricingData?.attendee_discount}`}</h6>
                            </div>
                        </div>
                    ) : null}
                </div>
            </>
        );
    };

    const addToCartHandler = async () => {
        let obj = { webinar_id: webinar?._id, quantity: 1 };

        if (webinar?.type === "live") {
            obj.cantAttend = cantAttend;
        }
        if (!cantAttend) {
            obj.attendees = attendees;
        }
        await addToCart(obj).finally(() => {
            // navigate("/cart");
        });
    };

    return (
        <div className="flex flex-col items-center justify-between h-full">
            {isLoading ? (
                <Loader size={70} className="m-14 animate-spin" />
            ) : (
                <>
                    <>
                        {webinar?.type === "on-demand" || cantAttend
                            ? handelDemandUI()
                            : handelLiveUI()}
                    </>
                    <div
                        className={`w-full flex ${
                            webinar?.type === "live"
                                ? "flex-row"
                                : "flex-row-reverse"
                        } items-center justify-between py-4 bg-gray-0`}
                    >
                        {webinar?.type === "live" ? (
                            <div className="flex gap-2">
                                <SquareCheck
                                    className={`${
                                        !cantAttend
                                            ? "text-gray-500"
                                            : "text-green-600"
                                    }`}
                                    onClick={() => setCantAttend((v) => !v)}
                                />
                                <p>Can't Attend?</p>
                            </div>
                        ) : null}
                        <div className="sm:flex sm:flex-row-reverse">
                            <button
                                type="button"
                                onClick={() => addToCartHandler()}
                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                            >
                                {cartAddLoading ? (
                                    <Loader className="animate-spin" />
                                ) : (
                                    "Add to Cart"
                                )}
                            </button>
                            <div className="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 sm:mt-0 sm:w-auto">
                                {`Total: $${pricingData?.total_amount}`}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
