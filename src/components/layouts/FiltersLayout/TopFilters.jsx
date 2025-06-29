import { useState } from "react";
import { List, Grid } from "lucide-react";

export default function TopFilters({
    view,
    setView,
    sort,
    setSort,
    category,
    setCategory,
}) {
    return (
        <div className="flex flex-wrap justify-between items-center gap-4 py-4 border-b">
            <div className="flex gap-6 text-sm font-medium">
                {["all", "ondemand", "live"].map((c) => (
                    <button
                        key={c}
                        className={`pb-1 ${
                            category === c
                                ? "border-b-2 border-blue-600 text-blue-600"
                                : "hover:text-blue-600"
                        }`}
                        onClick={() => setCategory(c)}
                    >
                        {c === "all"
                            ? "All"
                            : c === "ondemand"
                            ? "OnDemand Courses"
                            : "Live Webinars"}
                    </button>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">View:</span>
                    <button
                        className={`p-1 ${
                            view === "grid" ? "text-blue-600" : "text-gray-600"
                        }`}
                        onClick={() => setView("grid")}
                    >
                        <Grid size={18} />
                    </button>
                    <button
                        className={`p-1 ${
                            view === "list" ? "text-blue-600" : "text-gray-600"
                        }`}
                        onClick={() => setView("list")}
                    >
                        <List size={18} />
                    </button>
                </div>

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="border rounded px-2 py-1 text-sm focus:outline-none"
                >
                    <option value="relevance">Relevance</option>
                    <option value="popular">Most Popular</option>
                    <option value="eventDate">Event Date</option>
                    <option value="alphabetical">Alphabetical</option>
                </select>
            </div>
        </div>
    );
}
