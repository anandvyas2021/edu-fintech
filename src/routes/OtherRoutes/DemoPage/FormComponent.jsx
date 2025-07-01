import { useState } from "react";
import Button from "../../../components/basic/Button";

export default function FormComponent() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        users: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim())
            newErrors.firstName = "First name is required";
        if (!formData.lastName.trim())
            newErrors.lastName = "Last name is required";
        if (!formData.email.match(/^\S+@\S+\.\S+$/))
            newErrors.email = "Valid email required";
        if (!formData.company.trim())
            newErrors.company = "Company name is required";
        if (!formData.phone.match(/^[0-9]{10,15}$/))
            newErrors.phone = "Valid phone number required";
        if (!formData.users.match(/^[0-9]+$/))
            newErrors.users = "Enter valid number of users";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validation = validate();
        if (Object.keys(validation).length > 0) {
            setErrors(validation);
            return;
        }
        setErrors({});
        setSubmitted(true);
        alert("Demo Request Submitted!");
        // You can handle actual submission logic here
    };

    return submitted ? (
        <div className="text-green-600 text-center font-semibold">
            Thank you! We'll contact you shortly.
        </div>
    ) : (
        <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto p-4"
        >
            <div>
                <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                    }
                    className={`w-full p-3 border rounded ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                    }
                    className={`w-full p-3 border rounded ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
            </div>

            <div>
                <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                    className={`w-full p-3 border rounded ${
                        errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                )}
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                    }
                    className={`w-full p-3 border rounded ${
                        errors.company ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.company && (
                    <p className="text-red-500 text-sm">{errors.company}</p>
                )}
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                    }
                    className={`w-full p-3 border rounded ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Number of Users"
                    value={formData.users}
                    onChange={(e) =>
                        setFormData({ ...formData, users: e.target.value })
                    }
                    className={`w-full p-3 border rounded ${
                        errors.users ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.users && (
                    <p className="text-red-500 text-sm">{errors.users}</p>
                )}
            </div>

            <div className="flex justify-center md:col-span-2 mt-4">
                <Button label=" Request My Demo" type="submit" />
            </div>
        </form>
    );
}
