import { useSearchParams } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

import { useGetEducatorBySlugQuery } from "../../../app/features/educators/educatorApiSlice";

import BackNavigate from "../../../components/basic/BackNavigate";

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
    let [params] = useSearchParams();
    let educatorSlug = params?.get("name");

    const { data, isLoading } = useGetEducatorBySlugQuery(educatorSlug);
    let educatorDetails = data?.data;

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
            {/* Profile */}
            <BackNavigate />
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <img
                    src={educatorDetails?.image}
                    alt={educatorDetails?.slug}
                    className="rounded-full w-48 h-48 object-cover shadow"
                />
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">
                        {educatorDetails?.name}
                    </h2>
                    <p className="text-sm mt-1 text-gray-600">
                        {educatorDetails?.qualifications}
                    </p>
                    <p className="text-sm mt-1 text-gray-600">
                        {educatorDetails?.company}
                    </p>

                    <div className="flex items-center text-gray-500 mt-4 space-x-10">
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
            <div className="mb-8">
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

            <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    About
                </h3>
                <div
                    className="px-4"
                    dangerouslySetInnerHTML={{ __html: educatorDetails?.about }}
                />
            </div>
        </div>
    );
}
