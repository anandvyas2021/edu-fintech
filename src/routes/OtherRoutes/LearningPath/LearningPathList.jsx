import { useState } from "react";
import LearningPathCard from "../../../components/cards/LearningPathCard";

import { learningPathsData } from "../../../utils/dummy";

export default function LearningPathList() {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("featured");

    const filteredData = learningPathsData
        .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            if (sort === "title-asc") return a.title.localeCompare(b.title);
            if (sort === "title-desc") return b.title.localeCompare(a.title);
            if (sort === "date") return new Date(b.date) - new Date(a.date);
            return 0; // featured: default order
        });

    return (
        <section className="space-y-6">
            {/* Filters */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <input
                    type="text"
                    placeholder="Search"
                    className="border p-2 w-full md:w-1/2"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    className="border p-2"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="featured">Featured</option>
                    <option value="title-asc">Title (A-Z)</option>
                    <option value="title-desc">Title (Z-A)</option>
                    <option value="date">Release Date (Newest)</option>
                </select>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredData?.map((item) => (
                    <LearningPathCard key={item._id} item={item} />
                ))}
            </div>

            <button className="bg-primary text-white px-4 py-2 rounded mx-auto block">
                View All
            </button>
        </section>
    );
}
