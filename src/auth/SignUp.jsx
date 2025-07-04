import { useForm } from "react-hook-form";
import { Input, Select, Typography } from "@material-tailwind/react";
import Button from "../components/basic/Button";
import InputField from "../components/basic/InputField";
import Dropdown from "../components/basic/Dropdown";

export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data); // API integration goes here
    };

    const employeeNumber = [
        { label: "1-10", value: "1-10" },
        { label: "11-50", value: "11-50" },
        { label: "51-100", value: "51-100" },
        { label: "100+", value: "100+" },
    ];
    const password = watch("password");

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-8">
            <div className="grid grid-cols-[1fr_0.5fr] gap-8">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    <InputField
                        label="Professional Email Address"
                        {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                        })}
                        required
                        error={errors.email && "Valid email is required"}
                    />
                    <InputField
                        label="First Name"
                        {...register("first_name", { required: true })}
                        required
                        error={errors.first_name && "First Name is required"}
                    />
                    <InputField
                        label="Last Name"
                        {...register("last_name", { required: true })}
                        required
                        error={errors.last_name && "Last Name is required"}
                    />
                    <InputField
                        label="Phone Number"
                        type="number"
                        {...register("phone", { required: true })}
                        required
                        maxLength={10}
                        error={errors.phone && "Phone number is required"}
                    />
                    <InputField
                        label="Professional Title"
                        {...register("title", { required: true })}
                        required
                        error={errors.title && "Title is required"}
                    />
                    <Dropdown
                        label="Number of Employees"
                        options={employeeNumber}
                        required
                        {...register("employees", { required: true })}
                    />
                    <InputField
                        label="Company Name"
                        {...register("company", { required: true })}
                        required
                        error={errors.company && "Company Name is required"}
                    />
                    <InputField
                        label="Work Address"
                        {...register("address", { required: true })}
                        required
                        error={errors.address && "Work Address is required"}
                    />
                    <InputField
                        label="City"
                        {...register("city", { required: true })}
                        required
                        error={errors.city && "City is required"}
                    />
                    <InputField
                        label="State/Province"
                        {...register("state", { required: true })}
                        required
                        error={errors.state && "State is required"}
                    />
                    <InputField
                        label="ZIP Code"
                        {...register("zip", { required: true })}
                        required
                        error={errors.zip && "ZIP Code is required"}
                    />
                    <InputField
                        label="Country"
                        {...register("country", { required: true })}
                        required
                        error={errors.country && "Country is required"}
                    />
                    <div className="bg-gray-100 p-5 col-span-2 flex gap-10">
                        <InputField
                            type="password"
                            label="Password"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                            })}
                            required
                            error={
                                errors.password &&
                                "Password must be at least 6 characters"
                            }
                        />
                        <InputField
                            type="password"
                            label="Confirm Password"
                            {...register("confirm_password", {
                                required: true,
                                validate: (value) =>
                                    value === password ||
                                    "Passwords do not match",
                            })}
                            required
                            error={
                                errors.confirm_password &&
                                errors.confirm_password.message
                            }
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2">
                        <Button
                            type="submit"
                            label="Create Free Account"
                            className="w-full"
                        />
                    </div>
                </form>
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
