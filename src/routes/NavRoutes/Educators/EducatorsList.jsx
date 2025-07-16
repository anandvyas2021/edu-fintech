import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

import { useGetAllEducatorsQuery } from "../../../app/features/educators/educatorApiSlice";

import { debounce } from "../../../utils/helpers";
import InputField from "../../../components/basic/InputField";
import BackNavigate from "../../../components/basic/BackNavigate";

const specialtiesList = [
    { label: "Human Resources", value: "human-resources" },
    { label: "Construction & Development", value: "construction" },
    { label: "Engineering & Environment", value: "engineering" },
    { label: "Medical", value: "medical" },
    { label: "Legal & Law Practices", value: "legal" },
    { label: "Banking & Finance", value: "finance" },
    { label: "Wealth & Asset Management", value: "wealth" },
    { label: "Accounting & Tax", value: "accounting" },
    { label: "Marketing & Sales", value: "marketing" },
    { label: "Education", value: "education" },
    { label: "Information Technology", value: "it" },
];

export default function EducatorsList() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSpecialties, setSelectedSpecialties] = useState([]);
    const [educators, setEducators] = useState([]);
    const [sortOption, setSortOption] = useState("relevance");
    const [locationFilters, setLocationFilters] = useState({
        state: null,
        zip_code: null,
    });

    let navigate = useNavigate();
    const { data, isLoading } = useGetAllEducatorsQuery();
    // console.log("data", data);

    // Debounced Search Function
    const debouncedSearch = debounce((term) => {
        fetchEducators(term, selectedSpecialties, sortOption);
    }, 500);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        debouncedSearch(e.target.value);
    };

    const handleLocationFilter = (k, v) => {
        setLocationFilters((prev) => ({ ...prev, [k]: v }));
    };

    const handleSpecialtyChange = (value) => {
        const updated = selectedSpecialties.includes(value)
            ? selectedSpecialties.filter((v) => v !== value)
            : [...selectedSpecialties, value];
        setSelectedSpecialties(updated);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    useEffect(() => {
        fetchEducators(searchTerm, selectedSpecialties, sortOption);
    }, [selectedSpecialties, sortOption]);

    const fetchEducators = (term, specialties, sort) => {
        // Replace with your actual API logic
        // console.log("Fetching with:", { term, specialties, sort });

        // Dummy Data
        setEducators(educators);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <BackNavigate />
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Connect with a{" "}
                <span className="text-blue-600">Professional</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-5">
                {/* Filters */}
                <aside className="md:w-1/4 px-3 space-y-6">
                    <div>
                        <label className="font-semibold text-gray-700 block mb-2">
                            Search
                        </label>
                        <div className="relative">
                            <Search
                                className="absolute top-2.5 left-3 text-gray-500"
                                size={18}
                            />
                            <input
                                type="text"
                                placeholder="Name, specialty, city, etc"
                                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-blue-500"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-700 mb-3">
                            Specialty
                        </h3>
                        <div className="space-y-2">
                            {specialtiesList.map((spec) => (
                                <label
                                    key={spec.value}
                                    className="flex items-center gap-2 text-sm text-gray-700"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedSpecialties.includes(
                                            spec.value
                                        )}
                                        onChange={() =>
                                            handleSpecialtyChange(spec.value)
                                        }
                                    />
                                    {spec.label}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="font-semibold text-gray-700 block mb-2">
                            Location
                        </label>
                        <div className="flex flex-col gap-3">
                            <Select
                                className="text-gray-500"
                                size={18}
                                value={locationFilters?.state}
                                onChange={(v) =>
                                    handleLocationFilter("state", v)
                                }
                            />
                            <InputField
                                label="Zip Code"
                                className="w-full"
                                value={locationFilters?.zip_code}
                                onChange={(v) =>
                                    handleLocationFilter("zip_code", v)
                                }
                            />
                        </div>
                    </div>
                </aside>

                {/* Educator List */}
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold text-gray-700">
                            {data?.data?.length} Results
                        </h2>
                        <select
                            className="border px-3 py-1.5 rounded-md focus:outline-blue-500"
                            value={sortOption}
                            onChange={handleSortChange}
                        >
                            <option value="relevance">Sort by Relevance</option>
                            <option value="a-z">Last Name A-Z</option>
                            <option value="z-a">Last Name Z-A</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {isLoading ? (
                            <>
                                {new Array(8)?.fill("_")?.map((v) => (
                                    <div className="h-60 rounded-lg bg-gray-300 animate-pulse" />
                                ))}
                            </>
                        ) : (
                            data?.data?.map((edu) => (
                                <div
                                    key={edu?._id}
                                    className="group bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition cursor-pointer"
                                    onClick={() =>
                                        navigate(
                                            `/professionals/details?name=${edu?.slug}`
                                        )
                                    }
                                >
                                    <figure className="overflow-hidden">
                                        <img
                                            src={edu?.image}
                                            alt={edu?.name}
                                            className="group-hover:scale-110 transition-all duration-150 w-full h-48 object-cover"
                                        />
                                    </figure>
                                    <div className="p-2">
                                        <h3 className="font-semibold text-gray-800">
                                            {edu?.name}
                                        </h3>
                                        <p className="text-xs font-semibold text-gray-500 mt-1">
                                            {edu?.qualifications}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
