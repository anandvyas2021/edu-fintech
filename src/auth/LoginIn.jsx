import { Lock, Tag } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setCredentials } from "../app/features/auth/authSlice";
import { useLoginMutation } from "../app/features/auth/authApiSlice";

import Button from "../components/basic/Button";
import InputField from "../components/basic/InputField";

export default function LoginIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [login, { isLoading: apiLoading }] = useLoginMutation();

    const onSubmit = async (data) => {
        try {
            const res = await login(data).unwrap();
            // console.log("login success:", res);
            dispatch(setCredentials(res?.data));
            reset();
            navigate(-1);
        } catch (err) {
            console.error("Signup failed:", err?.data?.message || err);
        }
        reset();
    };

    return (
        <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10  rounded-lg overflow-hidden w-full max-w-5xl">
                {/* Login Card */}
                <div className="p-8 bg-gray-50 flex flex-col justify-center items-center">
                    <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                        <Lock size={28} />
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-center">
                        Login
                    </h2>
                    <form
                        className="w-full max-w-sm mt-4 space-y-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Enter a valid email",
                                },
                            }}
                            render={({ field }) => (
                                <InputField
                                    type="email"
                                    placeholder="Email Address"
                                    label="Email Address"
                                    required
                                    error={errors.email?.message}
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password must be at least 6 characters",
                                },
                            }}
                            render={({ field }) => (
                                <InputField
                                    type="password"
                                    label="Password"
                                    required
                                    error={errors.password?.message}
                                    {...field}
                                />
                            )}
                        />
                        <Button
                            label="Login"
                            type="submit"
                            loading={apiLoading}
                            className="w-full"
                            onClick
                        />
                    </form>
                    {/* <p
                        className="text-sm text-blue-500 hover:underline mt-3 cursor-pointer"
                        onClick={() => navigate("/forgot-password")}
                    >
                        Forgot your password?
                    </p> */}
                </div>

                {/* Signup Card */}
                <div className="p-8 bg-gray-50 flex flex-col justify-center items-center">
                    <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                        <Tag size={28} />
                    </div>
                    <h2 className="text-xl font-bold text-center mb-2">
                        Sign Up for an All-Access Pass
                    </h2>
                    <p className="text-sm italic text-center text-gray-600 mb-4">
                        Unlimited Access to:
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc text-start">
                        <li>Live Webinars</li>
                        <li>OnDemand Webinars</li>
                        <li>Videos & Slide Decks</li>
                        <li>MP3 Recordings</li>
                    </ul>
                    <button
                        className="mt-6 bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-900 transition"
                        onClick={() => navigate("/plans")}
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}
