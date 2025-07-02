import FAQAccordion from "../../../components/basic/FAQAccordion";
import StatsCounter from "../../../components/basic/StatsCounter";
import { BlockTitle } from "../../../components/typography";
import LearningPathList from "./LearningPathList";
import ProcessSection from "./ProcessSection";

// function LearningPathList({ paths }) {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {paths.map((p) => (
//                 <div
//                     key={p.id}
//                     className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
//                 >
//                     <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
//                     <p className="text-gray-600 mb-4">{p.description}</p>
//                     <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//                         Explore
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// }

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

export default function LearningPath() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 space-y-16">
            <BlockTitle title="Explore Your Learning Path" />
            <ProcessSection />
            <LearningPathList />
            <StatsCounter stats={statsData} />

            <FAQAccordion title="Frequently Asked Questions" faqs={faqs} />
        </section>
    );
}
