import { useForm } from "react-hook-form";
import Button from "../components/basic/Button";

export default function DemoRequestForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert("Demo Requested!");
        reset();
    };

    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Our team is happy to answer your questions
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Learn how we can help you meet your compliance & upskilling
                    needs.
                </p>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
                <div>
                    <input
                        {...register("firstName", {
                            required: "First Name is required",
                        })}
                        placeholder="First Name"
                        className={`w-full px-4 py-3 rounded-lg border ${
                            errors.firstName
                                ? "border-red-500"
                                : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.firstName.message}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        {...register("lastName", {
                            required: "Last Name is required",
                        })}
                        placeholder="Last Name"
                        className={`w-full px-4 py-3 rounded-lg border ${
                            errors.lastName
                                ? "border-red-500"
                                : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.lastName.message}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                                message: "Enter a valid email",
                            },
                        })}
                        placeholder="Email Address"
                        className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        {...register("company", {
                            required: "Company Name is required",
                        })}
                        placeholder="Company Name"
                        className={`w-full px-4 py-3 rounded-lg border ${
                            errors.company
                                ? "border-red-500"
                                : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.company && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.company.message}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        {...register("phone", {
                            required: "Phone Number is required",
                            pattern: {
                                value: /^[0-9]{7,15}$/,
                                message: "Enter a valid phone number",
                            },
                        })}
                        placeholder="Phone Number"
                        className={`w-full px-4 py-3 rounded-lg border ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.phone.message}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        {...register("users", {
                            required: "Number of Users is required",
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Enter a valid number",
                            },
                        })}
                        placeholder="Number of Users"
                        className={`w-full px-4 py-3 rounded-lg border ${
                            errors.users ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.users && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.users.message}
                        </p>
                    )}
                </div>

                <div className="md:col-span-2 flex justify-center mt-4">
                    <Button label="Request Demo" type="submit" />
                </div>
            </form>
        </section>
    );
}
