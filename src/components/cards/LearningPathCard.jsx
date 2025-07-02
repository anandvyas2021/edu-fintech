import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, StarOff } from "lucide-react";

export default function LearningPathCard({ item }) {
    const [favorite, setFavorite] = useState(item.isFavorite);

    let navigate = useNavigate();

    return (
        <div
            className="relative group border rounded overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
            onClick={() =>
                navigate(`/learning-path/general-business?name=${item?.slug}`)
            }
        >
            <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
            />

            {/* Favorite Icon with Lucide */}
            <button
                onClick={() => setFavorite(!favorite)}
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:scale-105 transition"
            >
                {favorite ? (
                    <Star className="text-yellow-400 w-5 h-5 fill-yellow-400" />
                ) : (
                    <StarOff className="text-gray-300 w-5 h-5" />
                )}
            </button>

            {/* Hover Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
                <p className="text-white mb-4 text-center px-2">{`${item.desc?.slice(
                    0,
                    30
                )}...`}</p>
                <button className="bg-white text-black px-4 py-1 rounded text-sm">
                    Learn More
                </button>
            </div>

            <h3 className="text-center font-semibold py-2 text-sm">
                {item.title}
            </h3>
        </div>
    );
}
