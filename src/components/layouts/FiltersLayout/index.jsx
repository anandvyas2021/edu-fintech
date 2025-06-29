import TopFilters from "./TopFilters";
import SidebarFilters from "./SidebarFilters";

export default function FiltersLayout({
    filters,
    setFilters,
    view,
    setView,
    sort,
    setSort,
    category,
    setCategory,
    children,
}) {
    return (
        <div className="flex flex-col">
            <TopFilters
                view={view}
                setView={setView}
                sort={sort}
                setSort={setSort}
                category={category}
                setCategory={setCategory}
            />

            <div className="flex">
                <SidebarFilters filters={filters} setFilters={setFilters} />

                <div className="flex-1 p-4">{children}</div>
            </div>
        </div>
    );
}
