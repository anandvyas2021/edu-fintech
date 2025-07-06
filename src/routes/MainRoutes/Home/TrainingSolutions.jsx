import {
    BookOpen,
    Layers,
    Ticket,
    Laptop,
    CheckCircle,
    Award,
} from "lucide-react";
import { BlockTitle } from "../../../components/typography";

const features = [
    {
        icon: Layers,
        title: "Unified Compliance & Continuing Education",
        description:
            "Implement a cohesive training strategy covering workforce compliance and profession-specific continuing education.",
    },
    {
        icon: BookOpen,
        title: "16,000 Courses & Resources",
        description:
            "Find relevant, timely, and impactful courses and reports in the ever-changing Lorman Learning Library.",
    },
    {
        icon: Ticket,
        title: "All-Access Passes",
        description:
            "Unlimited access to our entire library of OnDemand courses and monthly live webinars across all devices.",
    },
    {
        icon: Award,
        title: "Continuing Education Credits",
        description:
            "Stay up-to-date with CEU requirements of certifications like CLE, CPE, SHRM, HRCI, and more.",
    },
    {
        icon: Laptop,
        title: "Learning Platform",
        description:
            "Manage team strategies, track education credits, and progress with skill reinforcement features.",
    },
    {
        icon: CheckCircle,
        title: "Customer Success",
        description:
            "Work with our success team to structure and implement training strategies tailored to your organization.",
    },
];

export default function TrainingSolutions() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center mb-16">
                {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Training Solutions That Help You{" "}
                    <span className="text-blue-600 underline underline-offset-4 decoration-2">
                        Succeed
                    </span>
                </h2> */}
                <BlockTitle
                    title={"Training Solutions That Help You Succeed"}
                />
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
