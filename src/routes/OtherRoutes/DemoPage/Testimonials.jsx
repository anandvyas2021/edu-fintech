import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Jane Doe",
        position: "HR Manager, TechCorp",
        content:
            "Lorman made compliance training simple and engaging for our team. The reporting is a huge bonus!",
    },
    {
        name: "Michael Smith",
        position: "Director of Operations, FinGroup",
        content:
            "We filled skill gaps quickly with Lorman's platform. The library of content is unmatched.",
    },
    {
        name: "Sarah Johnson",
        position: "Learning & Development, HealthPlus",
        content:
            "The ease of tracking progress and assigning courses has transformed our training strategy.",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrent(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <section className="bg-gray-50 py-12 px-4 md:px-20">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    What Our Clients Say
                </h2>

                <div className="relative bg-white p-6 rounded-lg shadow space-y-4">
                    <p className="text-lg text-gray-700 italic">
                        "{testimonials[current].content}"
                    </p>
                    <div className="font-semibold text-gray-900">
                        {testimonials[current].name}
                    </div>
                    <div className="text-sm text-gray-500">
                        {testimonials[current].position}
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center gap-4 mt-4">
                        <button
                            onClick={prev}
                            className="p-2 rounded-full border hover:bg-gray-100"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={next}
                            className="p-2 rounded-full border hover:bg-gray-100"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
