import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SidebarFilters({ filters, setFilters }) {
    const [expandedTopics, setExpandedTopics] = useState(true);
    const [expandedCredits, setExpandedCredits] = useState(true);
    const [expandedStates, setExpandedStates] = useState(true);

    const handleCheckboxChange = (category, value) => {
        const current = filters[category];
        setFilters({
            ...filters,
            [category]: current.includes(value)
                ? current.filter((v) => v !== value)
                : [...current, value],
        });
    };

    const topics = [
        "Workplace Compliance",
        "AI",
        "Accounting/Tax",
        "Administrative Assistants",
        "Customer Service",
        "Education",
        "Financial Services",
        "General Business Skills",
        "Government",
        "Healthcare",
        "Human Resources",
        "Leadership Development",
        "Legal",
        "Marketing",
        "Nonprofit",
        "Procurement/Supply Chain",
        "Sales",
    ];

    return (
        <aside className="w-full md:w-64 p-4 border-r bg-white space-y-6">
            <input
                type="text"
                placeholder="Search"
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
            />

            {/* Topics */}
            <div>
                <div
                    className="flex justify-between items-center cursor-pointer py-2"
                    onClick={() => setExpandedTopics(!expandedTopics)}
                >
                    <h3 className="font-semibold text-gray-700">Topics</h3>
                    {expandedTopics ? (
                        <ChevronUp size={16} />
                    ) : (
                        <ChevronDown size={16} />
                    )}
                </div>
                {expandedTopics && (
                    <ul className="space-y-2 mt-2 max-h-60 overflow-y-auto pr-2">
                        {topics.map((topic, idx) => (
                            <li
                                key={idx}
                                className="flex items-center space-x-2"
                            >
                                <input
                                    type="checkbox"
                                    checked={filters.topics.includes(topic)}
                                    onChange={() =>
                                        handleCheckboxChange("topics", topic)
                                    }
                                />
                                <span className="text-sm text-gray-700">
                                    {topic}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Credits */}
            <div>
                <div
                    className="flex justify-between items-center cursor-pointer py-2"
                    onClick={() => setExpandedCredits(!expandedCredits)}
                >
                    <h3 className="font-semibold text-gray-700">Credits</h3>
                    {expandedCredits ? (
                        <ChevronUp size={16} />
                    ) : (
                        <ChevronDown size={16} />
                    )}
                </div>
                {expandedCredits && (
                    <div className="mt-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                        />
                    </div>
                )}
            </div>

            {/* Event States */}
            <div>
                <div
                    className="flex justify-between items-center cursor-pointer py-2"
                    onClick={() => setExpandedStates(!expandedStates)}
                >
                    <h3 className="font-semibold text-gray-700">
                        Event States
                    </h3>
                    {expandedStates ? (
                        <ChevronUp size={16} />
                    ) : (
                        <ChevronDown size={16} />
                    )}
                </div>
                {expandedStates && (
                    <div className="mt-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                        />
                    </div>
                )}
            </div>
        </aside>
    );
}
