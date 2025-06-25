import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function HoverCard({ title, desc, onClick }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="group cursor-pointer bg-white p-8 rounded-lg shadow transition hover:shadow-md relative overflow-hidden"
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <h3 className="text-2xl font-semibold mb-2 flex items-center justify-between">
                {title}
                <ArrowRight
                    className={`ml-2 w-5 h-5 text-indigo-600 transform transition-all duration-300 ${
                        hovered
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-4"
                    }`}
                />
            </h3>
            <p className="text-gray-600">{desc}</p>
        </div>
    );
}
