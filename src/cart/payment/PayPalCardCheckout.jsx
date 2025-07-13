import React, { useEffect, useRef, useState } from "react";

export default function PayPalCardCheckout() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState("");
    const [processing, setProcessing] = useState(false);

    const cardNumberRef = useRef();
    const cvvRef = useRef();
    const expiryRef = useRef();

    useEffect(() => {
        if (window.paypal && window.paypal.HostedFields) {
            window.paypal.HostedFields.render({
                createOrder: () => {
                    // Your backend will return an orderID
                    return fetch("/api/paypal/create-order", {
                        method: "POST",
                    })
                        .then((res) => res.json())
                        .then((data) => data.orderID);
                },
                styles: {
                    input: {
                        "font-size": "16px",
                        "font-family": "Arial",
                        color: "#333",
                    },
                    ":focus": {
                        color: "blue",
                    },
                },
                fields: {
                    number: {
                        selector: "#card-number",
                        placeholder: "4111 1111 1111 1111",
                    },
                    cvv: {
                        selector: "#cvv",
                        placeholder: "123",
                    },
                    expirationDate: {
                        selector: "#expiration-date",
                        placeholder: "MM/YY",
                    },
                },
            })
                .then((cardFields) => {
                    setIsLoaded(true);
                    document
                        .getElementById("submit-btn")
                        .addEventListener("click", () => {
                            setProcessing(true);
                            cardFields
                                .submit({
                                    // Optional: Add billing info
                                })
                                .then((res) => {
                                    // Capture the order on backend
                                    return fetch("/api/paypal/capture-order", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                            orderID: res.orderId,
                                        }),
                                    });
                                })
                                .then((res) => res.json())
                                .then((data) => {
                                    alert("Payment successful!");
                                    console.log("Payment captured:", data);
                                    setProcessing(false);
                                })
                                .catch((err) => {
                                    console.error(err);
                                    setError("Payment failed.");
                                    setProcessing(false);
                                });
                        });
                })
                .catch((err) => {
                    console.error("Failed to load card fields", err);
                    setError("Could not initialize payment fields.");
                });
        }
    }, []);

    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Pay with Card</h2>

            <div className="mb-3" id="card-number" ref={cardNumberRef}></div>
            <div className="mb-3" id="expiration-date" ref={expiryRef}></div>
            <div className="mb-3" id="cvv" ref={cvvRef}></div>

            {error && <p className="text-red-500">{error}</p>}

            <button
                id="submit-btn"
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                disabled={!isLoaded || processing}
            >
                {processing ? "Processing..." : "Pay Now"}
            </button>
        </div>
    );
}
