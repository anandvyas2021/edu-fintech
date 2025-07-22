import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { BlockTitle } from "../../../components/typography";

export default function LearnFromBest() {
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
                <BlockTitle title="Learn from the very best" />
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
