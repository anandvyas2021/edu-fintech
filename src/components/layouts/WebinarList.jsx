import { useEffect, useState } from "react";
import webinarDummy from "../../assets/webinarDummy.jpg";
import { Heart, HeartOff, HeartIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetAllWebinarsQuery } from "../../app/features/webinars/webinarApiSlice";

export default function WebinarList({
    filters,
    view,
    sort,
    category,
    favourites,
    toggleFavourite,
}) {
    // const [filteredWebinars, setFilteredWebinars] = useState([]);
    // const [webinars, setWebinars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    let [params, setParams] = useSearchParams();
    let page = +(params?.get("page") ?? 1);

    const { data: webinars, isLoading } = useGetAllWebinarsQuery({
        page,
        limit: 10,
    });
    let webinarData = webinars?.data;
    // console.log("page", page, webinarData);

    // useEffect(() => {
    //     const { data, isLoading } = useGetAllWebinarsQuery();
    //     console.log(data);
    // }, [page]);

    useEffect(() => {
        let results = webinarData?.data;
        console.log("res", results);

        if (filters?.topics?.length) {
            results = results?.filter((w) =>
                w?.topics?.some((t) => filters?.topics?.includes(t))
            );
        }

        if (filters?.credits?.length) {
            results = results?.filter((w) =>
                w?.credits?.some((c) => filters?.credits?.includes(c))
            );
        }

        if (filters?.states?.length) {
            results = results?.filter((w) =>
                filters?.states?.includes(w?.state)
            );
        }

        if (sort === "eventDate") {
            results?.sort((a, b) => a?.date?.localeCompare(b?.date));
        } else if (sort === "alphabetical") {
            results?.sort((a, b) => a?.title?.localeCompare(b?.title));
        }
        if (category === "live") {
            results = results?.filter((w) =>
                w?.type?.toLowerCase()?.includes("live")
            );
        } else if (category === "on-demand") {
            results = results?.filter((w) =>
                w?.type?.toLowerCase()?.includes("on-demand")
            );
        }

        // setFilteredWebinars(results);
        // setCurrentPage(1);
    }, [filters, sort]);

    const handlePage = (key) => {
        console.log(key);
        setParams({
            page: key === "next" ? page + 1 : page > 1 ? page - 1 : page,
        });
        // params.set(
        //     "page",
        //     key === "next" ? page + 1 : page > 1 ? page - 1 : page
        // );
    };

    return (
        <div>
            <div
                className={`grid ${
                    view === "grid"
                        ? "md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
                        : "grid-cols-1"
                } gap-6`}
            >
                {webinarData?.data?.map((item) => (
                    <div
                        key={item?._id}
                        className="group bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden relative flex flex-col cursor-pointer"
                        onClick={() =>
                            navigate(`/training/details?name=${item?.slug}`)
                        }
                    >
                        <div className="relative">
                            <img
                                src={item?.image ?? webinarDummy}
                                alt={item?.slug}
                                className="w-full h-40 object-cover"
                            />

                            <div
                                onClick={() => toggleFavourite(item?._id)}
                                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow cursor-pointer hover:text-red-600 z-50"
                            >
                                <HeartIcon
                                    color={
                                        favourites.includes(item?._id)
                                            ? "red"
                                            : "black"
                                    }
                                    fill={
                                        favourites.includes(item._id)
                                            ? "red"
                                            : "transparent"
                                    }
                                />
                                {/* {favourites.includes(w.id) ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="red"
                                        viewBox="0 0 24 24"
                                        stroke="red"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1}
                                            d="M3.172 5.172a4 4 0 015.656 0L12 8.343l3.172-3.171a4 4 0 115.656 5.656L12 21.657l-8.828-8.829a4 4 0 010-5.656z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1}
                                            d="M3.172 5.172a4 4 0 015.656 0L12 8.343l3.172-3.171a4 4 0 115.656 5.656L12 21.657l-8.828-8.829a4 4 0 010-5.656z"
                                        />
                                    </svg>
                                )} */}
                            </div>

                            <div className="absolute bottom-2 left-2 text-xs bg-black/70 text-white px-2 py-1 rounded">
                                {item?.type}
                            </div>
                            <div className="absolute bottom-2 right-2 text-xs bg-white/90 text-gray-800 px-2 py-1 rounded">
                                {item?.date}
                            </div>
                        </div>

                        <div className="p-4 space-y-2 flex flex-col flex-1 justify-between">
                            <h3 className="font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2">
                                {item?.title}
                            </h3>
                            <p className="text-xs text-gray-500">
                                Credits: {item?.credit?.join(", ")}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6 text-sm">
                <span>
                    Showing{" "}
                    {webinarData?.pagination?.current_page > 1
                        ? webinarData?.pagination?.current_page * 10 + 1
                        : 1}{" "}
                    -{" "}
                    {webinarData?.data?.length +
                        webinarData?.pagination?.current_page * 10}{" "}
                    of {webinarData?.pagination?.total_count} results
                </span>

                <div className="flex gap-2">
                    <button
                        className="px-2 py-1 border rounded disabled:opacity-50"
                        disabled={currentPage === 1}
                        // onClick={() => setCurrentPage((p) => p - 1)}
                        onClick={() => handlePage("prev")}
                    >
                        Prev
                    </button>
                    <span>
                        {webinarData?.pagination?.current_page} /{" "}
                        {webinarData?.pagination?.total_pages || 1}
                    </span>
                    <button
                        className="px-2 py-1 border rounded disabled:opacity-50"
                        // disabled={
                        //     currentPage ===
                        //         webinarData?.pagination?.total_pages ||
                        //     webinarData?.pagination?.total_pages === 0
                        // }
                        // onClick={() => setCurrentPage((p) => p + 1)}
                        onClick={() => handlePage("next")}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
