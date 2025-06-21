import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Button from "../../components/basic/Button";

export default function Home() {
    return (
        <div className="font-sans text-gray-900 bg-[#F8FAFC]">
            {/* Hero */}
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

            {/* Feature Cards */}
            <section className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {[
                    {
                        title: "Teams & Enterprise",
                        desc: "Training solutions to support your workforce’s continuing education, compliance, and upskilling needs.",
                    },
                    {
                        title: "Professionals",
                        desc: "Unlimited access to Lorman’s Learning Library for your personal training and development.",
                    },
                ].map((card) => (
                    <div
                        key={card.title}
                        className="bg-white p-8 rounded-lg shadow transition hover:shadow-md"
                    >
                        <h3 className="text-2xl font-semibold mb-2">
                            {card.title}
                        </h3>
                        <p className="text-gray-600">{card.desc}</p>
                    </div>
                ))}
            </section>

            {/* Solutions Grid */}
            <section className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        {
                            heading: "Training Solutions That Help You Succeed",
                            items: [
                                "Unified Compliance & Continuing Education",
                                "All‑Access Passes",
                                "Learning Platform",
                                "16,000+ Courses & Resources",
                                "Continuing Education Credits",
                                "Customer Success",
                            ],
                        },
                        {
                            heading: "Courses",
                            items: [
                                "Workplace Compliance",
                                "Accounting/Tax",
                                "Construction/Engineering",
                                "Healthcare",
                                "Legal",
                                "Leadership Development",
                            ],
                        },
                        {
                            heading: "Resources",
                            items: [
                                "White Papers & Reports",
                                "Articles",
                                "Slide Decks",
                                "Professional Directory",
                                "Blog",
                            ],
                        },
                    ].map((section) => (
                        <div key={section.heading}>
                            <h4 className="text-xl font-semibold mb-4">
                                {section.heading}
                            </h4>
                            <ul className="text-gray-600 space-y-2">
                                {section.items.map((i) => (
                                    <li key={i}>{i}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trusted Logos & Stats */}
            <TrustedStats />
            {/* <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-gray-600 mb-8">
                        Trusted by millions for continuing education,
                        compliance, and upskilling needs
                    </p>
                    <div className="flex justify-center items-center space-x-8">
                        {[38, 14_000, 1_000_000].map((n) => (
                            <div key={n} className="text-center">
                                <p className="text-4xl font-bold text-indigo-600">
                                    {n.toLocaleString()}
                                </p>
                                <p className="text-gray-600">
                                    +{" "}
                                    {n === 38
                                        ? "Years"
                                        : n === 14_000
                                        ? "Courses"
                                        : "Served"}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Testimonials */}
            <LearnFromBest />
            {/* <section className="bg-white py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h4 className="text-xl font-semibold mb-6 text-center">
                        What Our Users Say
                    </h4>
                    <div className="space-y-8">
                        {[
                            {
                                name: "Roger Andrade",
                                quote: "Wide range of topics… Great experience.",
                            },
                            {
                                name: "Lori",
                                quote: "All‑Access Pass is definitely the way to go.",
                            },
                        ].map((t) => (
                            <blockquote
                                key={t.name}
                                className="border-l-4 border-indigo-600 pl-4 italic text-gray-700"
                            >
                                “{t.quote}” — <strong>{t.name}</strong>
                            </blockquote>
                        ))}
                    </div>
                </div>
            </section> */}
        </div>
    );
}

// LearnFromBest
function LearnFromBest() {
    const educators = [
        {
            name: "Dr. Amanda Rivera",
            title: "Data Science Mentor",
            tagline: "Expert in ML, Python & Stats",
            avatar: "https://i.pravatar.cc/150?img=12",
        },
        {
            name: "Michael Chen",
            title: "Cloud Architect",
            tagline: "AWS, Azure & DevOps Leader",
            avatar: "https://i.pravatar.cc/150?img=5",
        },
        {
            name: "Sofia Patel",
            title: "UI/UX Lead",
            tagline: "Crafts delightful product experiences",
            avatar: "https://i.pravatar.cc/150?img=22",
        },
        {
            name: "David Brooks",
            title: "Legal Compliance Expert",
            tagline: "Specialist in corporate law & ethics",
            avatar: "https://i.pravatar.cc/150?img=20",
        },
        {
            name: "Elena Morozov",
            title: "Finance Trainer",
            tagline: "CPA & Financial Analytics Coach",
            avatar: "https://i.pravatar.cc/150?img=27",
        },
    ];

    return (
        <section className="bg-[#F8FAFC] py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Learn from the very best
                </h2>
                <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                    Our courses are taught by world-class experts across every
                    industry. Their experience drives your success.
                </p>

                <Swiper
                    spaceBetween={24}
                    slidesPerView={4}
                    breakpoints={{
                        640: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    pagination={{ clickable: true }}
                    navigation
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="pb-12"
                >
                    {educators.map((ed, idx) => (
                        <SwiperSlide key={idx} className="h-full">
                            <div className="h-full min-h-[250px] bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
                                <img
                                    src={ed.avatar}
                                    alt={ed.name}
                                    className="w-20 h-20 rounded-full object-cover mb-4"
                                />
                                <h4 className="text-lg font-semibold text-gray-900">
                                    {ed.name}
                                </h4>
                                <p className="text-sm text-gray-500">
                                    {ed.title}
                                </p>
                                <p className="mt-2 text-sm text-gray-600 italic line-clamp-2">
                                    {ed.tagline}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

function TrustedStats() {
    const logos = [
        "/logos/amazon.svg",
        "/logos/google.svg",
        "/logos/microsoft.svg",
        "/logos/ibm.svg",
        "/logos/adobe.svg",
        "/logos/intel.svg",
        "/logos/netflix.svg",
        "/logos/tesla.svg",
    ];

    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
                    Trusted by leading brands
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Our platform is backed by the most respected companies
                    worldwide.
                </p>
            </div>

            <Swiper
                modules={[Autoplay]}
                loop={true}
                freeMode={true}
                slidesPerView={2}
                spaceBetween={40}
                allowTouchMove={false}
                speed={8000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 },
                }}
                className="select-none"
            >
                {[...logos, ...logos].map((logo, idx) => (
                    <SwiperSlide
                        key={idx}
                        className="flex items-center justify-center"
                    >
                        <img
                            src={logo}
                            alt={`Logo ${idx}`}
                            className="h-10 object-contain opacity-80 grayscale hover:grayscale-0 transition"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
