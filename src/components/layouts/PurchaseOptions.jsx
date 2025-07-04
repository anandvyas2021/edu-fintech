import { useState } from "react";
import { MonitorPlay, Download, Tag } from "lucide-react";
import { addToCartHandler } from "../../utils/api/helpers";

export default function PurchaseOptions() {
    const [selectedOption, setSelectedOption] = useState("OnDemand Course");

    const options = [
        { label: "OnDemand Course", icon: MonitorPlay, price: 149 },
        { label: "MP3 Download", icon: Download, price: 149 },
        {
            label: "All-Access Pass",
            icon: Tag,
            desc: "Pay once and get a full year of unlimited training in any format, at anytime.",
            price: 699,
        },
    ];

    const totalPrice =
        options.find((opt) => opt.label === selectedOption)?.price || 0;

    return (
        <>
            <p className="text-gray-600 mb-4">
                This program is available in several formats. Please choose the
                best format for your needs:
            </p>

            <div className="space-y-3">
                {options?.map(({ label, icon: Icon, price, desc }) => (
                    <div
                        key={label}
                        className={`flex justify-between items-center gap-2 p-3 border rounded cursor-pointer ${
                            selectedOption === label
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-300"
                        }`}
                        onClick={() => setSelectedOption(label)}
                    >
                        <Icon />
                        <div className="flex flex-col">
                            <span>{label}</span>
                            <span className="text-xs">{desc}</span>
                        </div>
                        <span className="font-medium">${price.toFixed(2)}</span>
                    </div>
                ))}
            </div>

            <div className="bg-gray-50 pt-7 sm:flex sm:flex-row-reverse">
                <button
                    type="button"
                    onClick={() => addToCartHandler()}
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                    Add to Cart
                </button>
                <div className="mt-3 inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 sm:mt-0 sm:w-auto">
                    {`Total: $${totalPrice}`}
                </div>
            </div>
        </>
    );
}
