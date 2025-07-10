import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useSignupMutation } from "../app/features/auth/authApiSlice";
import { setCredentials } from "../app/features/auth/authSlice";

import Button from "../components/basic/Button";
import InputField from "../components/basic/InputField";
import Dropdown from "../components/basic/Dropdown";
import { BlockTitle } from "../components/typography";

export default function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signup, { isLoading: apiLoading }] = useSignupMutation();
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        const {
            country,
            state,
            city,
            zip_code,
            work_address,
            number_of_employees,
            company_name,
            ...rest
        } = data;

        const transformedData = {
            ...rest,
            company_details: {
                country,
                state,
                city,
                zip_code,
                work_address,
                company_name,
                number_of_employees,
            },
        };

        try {
            const res = await signup(transformedData).unwrap();
            // console.log("Signup success:", res);
            dispatch(setCredentials(res?.data));
            reset();
            navigate(-1);
        } catch (err) {
            console.error("Signup failed:", err?.data?.message || err);
            // Optionally show error message
        }
    };

    const companySize = [
        { label: "1-10", value: "1-10" },
        { label: "11-50", value: "11-50" },
        { label: "51-100", value: "51-100" },
        { label: "100+", value: "100+" },
    ];

    const password = watch("password");
    // const fieldValues = watch();
    // console.log("form fieldValues", fieldValues);

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-8">
            <div className="flex flex-col items-start justify-start">
                <BlockTitle title="Sign Up" />
                <p className="text-gray-600">
                    Fill out the below details to get started...
                </p>
            </div>
            <div className="grid grid-cols-[1fr_0.5fr] gap-8">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="border-[1.5px] rounded-lg p-5 grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    {/* Email */}
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
                                label="Professional Email Address"
                                required
                                error={errors.email?.message}
                                {...field}
                            />
                        )}
                    />

                    {/* First Name */}
                    <Controller
                        name="first_name"
                        control={control}
                        rules={{ required: "First Name is required" }}
                        render={({ field }) => (
                            <InputField
                                label="First Name"
                                required
                                error={errors.first_name?.message}
                                {...field}
                            />
                        )}
                    />

                    {/* Last Name */}
                    <Controller
                        name="last_name"
                        control={control}
                        rules={{ required: "Last Name is required" }}
                        render={({ field }) => (
                            <InputField
                                label="Last Name"
                                required
                                error={errors.last_name?.message}
                                {...field}
                            />
                        )}
                    />

                    {/* Phone Number */}
                    <Controller
                        name="phone_number"
                        control={control}
                        rules={{ required: "Phone number is required" }}
                        render={({ field }) => (
                            <InputField
                                label="Phone Number"
                                type="number"
                                maxLength={10}
                                required
                                error={errors.phone_number?.message}
                                {...field}
                            />
                        )}
                    />

                    {/* Professional Title */}
                    <Controller
                        name="title"
                        control={control}
                        rules={{ required: "Title is required" }}
                        render={({ field }) => (
                            <InputField
                                label="Professional Title"
                                required
                                error={errors.title?.message}
                                {...field}
                            />
                        )}
                    />

                    {/* Dropdown */}
                    <Controller
                        name="number_of_employees"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Dropdown
                                label="Number of Employees"
                                options={companySize}
                                required
                                error={
                                    errors.number_of_employees &&
                                    "This field is required"
                                }
                                {...field}
                            />
                        )}
                    />

                    {/* Company Name */}
                    <Controller
                        name="company_name"
                        control={control}
                        rules={{ required: "Company Name is required" }}
                        render={({ field }) => (
                            <InputField
                                label="Company Name"
                                required
                                error={errors.company_name?.message}
                                {...field}
                            />
                        )}
                    />

                    {/* Work Address */}
                    <Controller
                        name="work_address"
                        control={control}
                        rules={{ required: "Work Address is required" }}
                        render={({ field }) => (
                            <InputField
                                label="Work Address"
                                required
                                error={errors.work_address?.message}
                                {...field}
                            />
                        )}
                    />

                    {/* City */}
                    <Controller
                        name="city"
                        control={control}
                        rules={{ required: "City is required" }}
                        render={({ field }) => (
                            <InputField
                                label="City"
                                required
                                error={errors.city?.message}
                                {...field}
                            />
                        )}
                    />

                    {/* State */}
                    <Controller
                        name="state"
                        control={control}
                        rules={{ required: "State is required" }}
                        render={({ field }) => (
                            <InputField
                                label="State/Province"
                                required
                                error={errors.state?.message}
                                {...field}
                            />
                        )}
                    />

                    {/* Zip */}
                    <Controller
                        name="zip_code"
                        control={control}
                        rules={{ required: "ZIP Code is required" }}
                        render={({ field }) => (
                            <InputField
                                label="ZIP Code"
                                required
                                error={errors.zip_code?.message}
                                {...field}
                            />
                        )}
                    />

                    {/* Country */}
                    <Controller
                        name="country"
                        control={control}
                        rules={{ required: "Country is required" }}
                        render={({ field }) => (
                            <InputField
                                label="Country"
                                required
                                error={errors.country?.message}
                                {...field}
                            />
                        )}
                    />

                    {/* Password Fields */}
                    <div className="bg-gray-100 p-5 col-span-2 flex gap-10">
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

                        <Controller
                            name="confirm_password"
                            control={control}
                            rules={{
                                required: "Confirm Password is required",
                                validate: (value) =>
                                    value === password ||
                                    "Passwords do not match",
                            }}
                            render={({ field }) => (
                                <InputField
                                    type="password"
                                    label="Confirm Password"
                                    required
                                    error={errors.confirm_password?.message}
                                    {...field}
                                />
                            )}
                        />
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2">
                        <Button
                            type="submit"
                            label="Create Free Account"
                            className="w-full"
                            loading={apiLoading}
                        />
                    </div>
                </form>

                {/* Sidebar Content */}
                <div>
                    <h3 className="font-semibold">
                        Create a Lorman Account Today and Receive:
                    </h3>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>
                            Access to Articles, Whitepapers, Reports and more
                        </li>
                        <li>Manage continuing education credit requirements</li>
                        <li>Download course information</li>
                        <li>View purchases and training history</li>
                        <li>Search Preferences for tailored content</li>
                        <li>Exclusive training opportunity alerts</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
