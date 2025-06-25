import { useNavigate } from "react-router-dom";
import Button from "../../../components/basic/Button";
import HoverCard from "../../../components/layouts/HoverCard";

export default function HeroSection() {
    let navigate = useNavigate();

    const cards = [
        {
            title: "Teams & Enterprise",
            desc: "Training solutions to support your workforce’s continuing education, compliance, and upskilling needs.",
            slug: "team-and-enterprise",
        },
        {
            title: "Professionals",
            desc: "Unlimited access to Lorman’s Learning Library for your personal training and development.",
            slug: "professionals",
        },
    ];

    return (
        <>
            {/* Hero Text Section */}
            <section className="pt-20 pb-16 text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Professional Training to Comply, Upskill & Grow
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
                    Continuing Education | Workforce Compliance | Upskilling
                </p>
                <div className="flex justify-center space-x-4">
                    <Button label="Request Demo" />
                    <Button
                        label="Browse Courses"
                        className="bg-white !text-indigo-600 border border-indigo-600 hover:bg-indigo-50"
                    />
                </div>
            </section>

            {/* Info Cards Section */}
            <section className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {cards?.map((card, index) => (
                    <HoverCard
                        key={index}
                        title={card?.title}
                        desc={card?.desc}
                        onClick={() => navigate(card?.slug)}
                    />
                ))}
            </section>
        </>
    );
}
