import { useNavigate } from "react-router-dom";

export default function WebinarGrid1({ title, webinars }) {
    let navigate = useNavigate();
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
                {`${title ?? ""} Courses`}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {webinars?.map((webinar) => (
                    <div
                        key={webinar._id}
                        className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition relative cursor-pointer"
                        onClick={() =>
                            navigate(`/training/details?name=${webinar?.slug}`)
                        }
                    >
                        <img
                            src={webinar.image}
                            alt={webinar.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                        />

                        <div className="p-4">
                            <span className="text-sm text-primary font-medium uppercase">
                                {webinar.type}
                            </span>
                            <h3 className="mt-2 text-lg font-semibold text-gray-800">
                                {webinar.title}
                            </h3>
                        </div>

                        {/* Hover Button */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
