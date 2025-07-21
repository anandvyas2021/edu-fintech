import { CheckCircle, Pen, CalendarCheck, Rocket } from "lucide-react";

function StepCard({ icon, title }) {
    return (
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg hover:scale-105 transition-transform">
            <div className="text-primary text-4xl mb-4">{icon}</div>
            <p className="font-semibold">{title}</p>
        </div>
    );
}

export default function ProcessSection() {
    const steps = [
        { icon: <CheckCircle />, title: "Choose a certificate program." },
        { icon: <Pen />, title: "Register for the certification." },
        {
            icon: <CalendarCheck />,
            title: "Complete coursework within 90 days.",
        },
        { icon: <Rocket />, title: "Get started today." },
    ];

    return (
        <section className="bg-gray-100 py-12">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-8">
                Our certification process in 4 easy steps:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
                {steps.map((step, idx) => (
                    <StepCard key={idx} icon={step.icon} title={step.title} />
                ))}
            </div>
        </section>
    );
}
