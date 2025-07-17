import { useState } from "react";
import FiltersLayout from "../../../components/layouts/FiltersLayout";
import WebinarList from "../../../components/layouts/WebinarList";

export default function WebinarsPage() {
    const [filters, setFilters] = useState({
        topics: [],
        credits: [],
        states: [],
    });
    const [view, setView] = useState("grid");
    const [sort, setSort] = useState("relevance");
    const [favourites, setFavourites] = useState([]);
    const [category, setCategory] = useState("all");

    const handleFilterChange = (type, value) => {
        setFilters((prev) => {
            const current = prev[type];
            const updated = current.includes(value)
                ? current.filter((v) => v !== value)
                : [...current, value];
            return { ...prev, [type]: updated };
        });
    };

    const toggleFavourite = (id) => {
        setFavourites((prev) =>
            prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
        );
    };

    return (
        <section className="max-w-7xl mx-auto px-4 py-8 ">
            <h1 className="text-3xl font-bold mb-6">Learning Library</h1>

            <FiltersLayout
                filters={filters}
                setFilters={setFilters}
                view={view}
                setView={setView}
                sort={sort}
                setSort={setSort}
                category={category}
                setCategory={setCategory}
            >
                <WebinarList
                    filters={filters}
                    view={view}
                    sort={sort}
                    favourites={favourites}
                    toggleFavourite={toggleFavourite}
                />
            </FiltersLayout>
        </section>
    );
}
