import { useState } from "react";

export default function FormComponent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.match(/^\S+@\S+\.\S+$/))
            newErrors.email = "Valid email required";
        if (!formData.company.trim())
            newErrors.company = "Company name is required";
        if (!formData.phone.trim())
            newErrors.phone = "Phone number is required";
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
        // TODO: Actual form submission logic
        alert("Demo Request Submitted!");
    };

    return submitted ? (
        <div className="text-green-600 text-center font-semibold">
            Thank you! We'll contact you shortly.
        </div>
    ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full p-3 border rounded ${
                    errors.name ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            <input
                type="email"
                placeholder="Your Email"
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

            <button
                type="submit"
                className="bg-primary text-white py-3 px-6 rounded hover:bg-primary-dark w-full"
            >
                Request Demo
            </button>
        </form>
    );
}
