import { useState } from "react";
import FiltersLayout from "../../../components/layouts/FiltersLayout";

import FAQAccordion from "../../../components/basic/FAQAccordion";
import StatsCounter from "../../../components/basic/StatsCounter";

function LearningPathList({ paths }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paths.map((p) => (
                <div
                    key={p.id}
                    className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
                >
                    <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                    <p className="text-gray-600 mb-4">{p.description}</p>
                    <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Explore
                    </button>
                </div>
            ))}
        </div>
    );
}

// Mock data
const statsData = [
    { label: "Paths Available", value: 125 },
    { label: "Learners Enrolled", value: 4520 },
    { label: "Expert Instructors", value: 85 },
    { label: "Certifications", value: 15 },
];
const faqs = [
    { question: "How long do paths take?", answer: "Each path varies..." },
    { question: "Can I get a certificate?", answer: "Yes, upon completion..." },
];
const learningPathsData = [
    {
        id: 1,
        title: "HR Compliance & Upskilling",
        description:
            "Stay ahead with the latest HR compliance requirements and best practices.",
    },
    {
        id: 2,
        title: "Finance for Non-Financial Managers",
        description:
            "Master essential finance concepts tailored for business leaders.",
    },
    {
        id: 3,
        title: "Project Management Foundations",
        description:
            "Get started with project management principles and methodologies.",
    },
    {
        id: 4,
        title: "Workplace Safety & OSHA Compliance",
        description:
            "Ensure your organization meets safety and OSHA regulations.",
    },
];

export default function LearningPath() {
    const [filters, setFilters] = useState({
        topics: [],
        credits: [],
        states: [],
    });
    const [view, setView] = useState("grid");
    const [sort, setSort] = useState("relevance");

    const filteredPaths = learningPathsData; // implement filter logic

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 space-y-16">
            <h1 className="text-4xl font-bold text-center">
                Explore Your Learning Path
            </h1>
            <StatsCounter stats={statsData} />
            <FiltersLayout
                filters={filters}
                setFilters={setFilters}
                view={view}
                setView={setView}
                sort={sort}
                setSort={setSort}
            >
                <LearningPathList paths={filteredPaths} />
            </FiltersLayout>
            <div className="space-y-8">
                <h2 className="text-3xl font-semibold">
                    Frequently Asked Questions
                </h2>
                {/* <FAQAccordion faqs={faqs} /> */}
            </div>
        </section>
    );
}
