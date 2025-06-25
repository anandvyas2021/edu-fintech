import {
    UserCheck,
    BookOpenCheck,
    CalendarCheck,
    Route,
    Handshake,
    BarChart3,
} from "lucide-react";
import { BlockTitle } from "../../../components/typography";

const features = [
    {
        icon: UserCheck,
        title: "Quality Content and Presenters",
        description:
            "We produce top-quality training by strictly vetting course content and partnering with trusted experts in their field.",
    },
    {
        icon: BookOpenCheck,
        title: "Breadth of Curriculum",
        description:
            "Covering 30+ subject matters with 13,000+ training products to improve hard & soft skills and fill knowledge gaps.",
    },
    {
        icon: CalendarCheck,
        title: "New Courses",
        description:
            "Regular updates with 100+ live courses added monthly for your company’s training & development initiatives.",
    },
    {
        icon: Route,
        title: "Learning Paths",
        description:
            "Track progress and create personalized training paths to meet employees' individual development needs.",
    },
    {
        icon: Handshake,
        title: "Customer Success",
        description:
            "Our success team helps craft a training strategy for long-term success, supporting you every step of the way.",
    },
    {
        icon: BarChart3,
        title: "CE Tracking & Reporting",
        description:
            "Easily track employee progress and earn CE credits for certifications like CLE, CPE, SHRM, HRCI, and others.",
    },
];

export default function WhatSetsUsApart() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <BlockTitle title="What Sets Us Apart" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {features.map(({ icon: Icon, title, description }, i) => (
                    <div
                        key={i}
                        className="group bg-gray-50 hover:bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                {title}
                            </h3>
                        </div>
                        <p className="text-sm text-gray-600">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
