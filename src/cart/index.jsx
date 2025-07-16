import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, Minus, Plus, Loader } from "lucide-react";

import emptyCart from "../assets/empty-cart.png";
import dotLoading from "../assets/dots-loading.gif";
import webinarDummy from "../assets/webinarDummy.jpg";

import {
    useGetCartQuery,
    useRemoveFromCartMutation,
    useUpdateCartMutation,
    useClearCartMutation,
} from "../app/features/cart/cartApiSlice";

import Button from "../components/basic/Button";

export default function Cart({}) {
    const [updateBtn, setUpdateBtn] = useState(null);
    const [removeBtn, setRemoveBtn] = useState(null);

    const { data: cartData, refetch, isLoading, error } = useGetCartQuery();
    const [updateCart, { isLoading: updateLoading }] = useUpdateCartMutation();
    const [removeFromCart, { isLoading: removeItemLoading }] =
        useRemoveFromCartMutation();
    const [clearCart, { isLoading: clearCartLoading }] = useClearCartMutation();

    let navigate = useNavigate();

    let cart_details = cartData?.data?.cart_details;

    const handleRemoveItem = async (_id, i) => {
        let cart_id = cart_details.cart_id;

        setRemoveBtn(i);
        await removeFromCart({
            cart_id,
            item_index: i,
        }).finally(() => {
            setRemoveBtn(null);
        });
    };

    const handleCartClear = async () => {
        await clearCart();
    };

    // console.log("cart", cart_details);

    const handleQuantityChange = async (_id, quantity, type) => {
        let finalQuantity = type === "dec" ? quantity - 1 : quantity + 1;
        let cart_id = cart_details.cart_id;

        setUpdateBtn(type);
        await updateCart({
            cart_id,
            webinar_id: _id,
            quantity: finalQuantity,
        }).finally(() => {
            setUpdateBtn(null);
        });
    };

    // if (error) return <p>Error loading cart</p>;

    return (
        <div className="min-h-screen py-10 px-4">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
                {!isLoading && !Object.keys(cart_details)?.length ? (
                    <div className="w-full flex flex-col items-center justify-center">
                        <img src={emptyCart} className="w-96 " />
                        <h3 className="text-3xl font-semibold text-red-500">
                            Cart is empty!!
                        </h3>
                    </div>
                ) : isLoading ? (
                    <>
                        <div className="lg:w-[70%] w-full h-[450px] rounded-lg animate-pulse bg-gray-300" />
                        <div className="lg:w-[30%] w-full h-[450px] rounded-lg animate-pulse bg-gray-300" />
                    </>
                ) : (
                    <>
                        <div className="lg:w-[70%] w-full bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center justify-between mb-5">
                                <h2 className="text-2xl font-semibold  text-gray-800">
                                    Your Cart
                                </h2>
                                {clearCartLoading ? (
                                    <img src={dotLoading} className="size-8" />
                                ) : (
                                    <p
                                        className="text-xs font-semibold cursor-pointer hover:underline text-red-600"
                                        onClick={handleCartClear}
                                    >
                                        Clear Cart
                                    </p>
                                )}
                            </div>
                            <div className="space-y-6">
                                {cart_details?.details?.items?.map(
                                    (item, i) => (
                                        <div
                                            key={item?.webinar_id}
                                            className="flex items-center gap-4 border-b pb-4"
                                        >
                                            <img
                                                // src={item?.image}
                                                src={webinarDummy}
                                                alt={item?.slug}
                                                className="w-20 h-20 object-cover rounded-md"
                                            />
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-gray-800">
                                                    {item?.title}
                                                </h3>
                                                <p className="text-sm text-gray-500">
                                                    ₹{item?.base_price}
                                                </p>

                                                {/* Quantity Control */}
                                                <div className="flex items-center mt-2 gap-2">
                                                    <button
                                                        className="bg-gray-200 p-1 rounded hover:bg-gray-300"
                                                        disabled={updateLoading}
                                                        onClick={() =>
                                                            handleQuantityChange(
                                                                item?.webinar_id,
                                                                item?.quantity,
                                                                "dec"
                                                            )
                                                        }
                                                    >
                                                        {updateBtn === "dec" &&
                                                        updateLoading ? (
                                                            <Loader
                                                                size={14}
                                                                className="animate-spin"
                                                            />
                                                        ) : (
                                                            <Minus size={14} />
                                                        )}
                                                    </button>
                                                    <span className="px-2 font-medium text-sm">
                                                        {item?.type === "live"
                                                            ? item?.attendees
                                                            : item?.quantity}
                                                    </span>
                                                    <button
                                                        className="bg-gray-200 p-1 rounded hover:bg-gray-300"
                                                        disabled={updateLoading}
                                                        onClick={() =>
                                                            handleQuantityChange(
                                                                item?.webinar_id,
                                                                item?.quantity,
                                                                "inc"
                                                            )
                                                        }
                                                    >
                                                        {updateBtn === "inc" &&
                                                        updateLoading ? (
                                                            <Loader
                                                                size={14}
                                                                className="animate-spin"
                                                            />
                                                        ) : (
                                                            <Plus size={14} />
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                            <button
                                                className="text-red-500 hover:text-red-700"
                                                onClick={() =>
                                                    handleRemoveItem(
                                                        item?.webinar_id,
                                                        i
                                                    )
                                                }
                                            >
                                                {removeItemLoading &&
                                                removeBtn === i ? (
                                                    <Loader
                                                        size={20}
                                                        className="animate-spin"
                                                    />
                                                ) : (
                                                    <Trash2 size={20} />
                                                )}
                                            </button>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        <div className="lg:w-[30%] w-full bg-white p-6 rounded-lg shadow-md h-fit">
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">
                                Summary
                            </h2>
                            <div className="space-y-2 text-sm text-gray-600">
                                {cart_details?.summary?.map((item, i) => (
                                    <div
                                        className="flex justify-between"
                                        key={i}
                                    >
                                        <span>{item?.label}</span>
                                        <div className="flex items-center gap-2">
                                            {item?.type ? (
                                                <span
                                                    className={`text-lg font-bold ${
                                                        item?.type ===
                                                        "discount"
                                                            ? "text-red-600"
                                                            : "text-green-600"
                                                    }`}
                                                >
                                                    {item?.type === "discount"
                                                        ? "-"
                                                        : "+"}
                                                </span>
                                            ) : null}
                                            <span>{item?.value}</span>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex justify-between font-semibold text-gray-800 border-t pt-2 mt-2">
                                    <span>Total</span>
                                    <span>
                                        {cart_details?.details?.payable_amount}
                                    </span>
                                </div>
                            </div>
                            <Button
                                className="mt-6 w-full"
                                label={"Proceed to Checkout"}
                                onClick={() => navigate("/checkout")}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
        // <div>
        //     <h2>Your Cart</h2>
        //     <ul>
        //         {data?.webinars?.map((item) => (
        //             <li key={item._id}>{item?.webinar_id?.title}</li>
        //         ))}
        //     </ul>
        // </div>
    );
}
