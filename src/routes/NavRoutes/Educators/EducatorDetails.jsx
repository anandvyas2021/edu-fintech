import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const specialties = [
    { label: "Legal & Law Practices", color: "bg-green-500", icon: "scale" },
    { label: "Banking & Bankruptcy", color: "bg-orange-500", icon: "bank" },
    { label: "Commercial Law", color: "bg-yellow-600", icon: "building" },
    { label: "Mergers & Acquisitions", color: "bg-yellow-400", icon: "repeat" },
    { label: "Real Estate", color: "bg-blue-500", icon: "home" },
    { label: "Technology & Science", color: "bg-red-500", icon: "flask" },
    { label: "Litigation", color: "bg-green-400", icon: "gavel" },
];

export default function EducatorDetails() {
    const [educatorDetails, setEducatorDetails] = useState(null);
    let [params] = useSearchParams();
    let educator = params?.get("name");
    console.log("educator", educator);

    useEffect(() => {
        //     let data = educators.filter(item=>item?.name)
        //   setEducatorDetails()
    }, [educator]);

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
            {/* Profile */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <img
                    src="https://via.placeholder.com/200x200"
                    alt="Educator"
                    className="rounded-full w-48 h-48 object-cover shadow"
                />
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">
                        John Doe
                    </h2>
                    <p className="text-gray-600 text-lg mt-1">
                        Senior Legal Consultant
                    </p>

                    <div className="flex items-center text-gray-500 mt-4 space-x-4">
                        <div className="flex items-center gap-1">
                            <Mail size={16} />
                            <span>johndoe@example.com</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Phone size={16} />
                            <span>+1 (123) 456-7890</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>New York, USA</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Specialties */}
            <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Specialties
                </h3>
                <div className="flex flex-wrap gap-4">
                    {specialties.map((item, index) => (
                        <div
                            key={index}
                            className={`${item.color} text-white px-4 py-2 rounded shadow flex items-center gap-2 text-sm font-medium`}
                        >
                            <span className="capitalize">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
