import { useState } from "react";

export default function PurchaseOptions() {
    const [selectedOption, setSelectedOption] = useState("OnDemand Course");

    const options = [
        { label: "OnDemand Course", price: 149 },
        { label: "MP3 Download", price: 149 },
        { label: "All-Access Pass", price: 699 },
    ];

    const totalPrice =
        options.find((opt) => opt.label === selectedOption)?.price || 0;

    return (
        <>
            {/* <ReusableModal
                open={open}
                handleClose={() => setOpen(false)}
                title="Purchase Options"
                footer={
                    <div className="flex justify-between items-center w-full">
                        <p className="font-medium text-gray-800">
                            Total: ${totalPrice.toFixed(2)}
                        </p>
                        <Button color="blue" onClick={() => alert("Added to cart!")}>
                            Add to Cart
                        </Button>
                    </div>
                }
            > */}
            <p className="text-gray-600 mb-4">
                This program is available in several formats. Please choose the
                best format for your needs:
            </p>

            <div className="space-y-3">
                {options.map((opt) => (
                    <div
                        key={opt.label}
                        className={`flex justify-between items-center p-3 border rounded cursor-pointer ${
                            selectedOption === opt.label
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-300"
                        }`}
                        onClick={() => setSelectedOption(opt.label)}
                    >
                        <span>{opt.label}</span>
                        <span className="font-medium">
                            ${opt.price.toFixed(2)}
                        </span>
                    </div>
                ))}
            </div>
            {/* </ReusableModal> */}
        </>
    );
}
