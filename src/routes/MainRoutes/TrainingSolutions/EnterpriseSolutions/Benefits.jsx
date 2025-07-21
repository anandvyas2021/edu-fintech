import { BlockTitle } from "../../../../components/typography";

export default function Benefits() {
    const stats = [
        {
            title: "Ensure",
            highlight: "Compliance",
            description:
                "23% of organizations do not have a formal compliance training plan in place.",
            source: "ComplianceNext",
        },
        {
            title: "Boost",
            highlight: "Engagement",
            description:
                "41% of employees consider career advancement opportunities a very important factor to their job satisfaction.",
            source: "SHRM",
        },
        {
            title: "Foster",
            highlight: "Innovation",
            description:
                "84% of executives believe their company's future success is very or extremely dependent on innovation.",
            source: "Accenture",
        },
        {
            title: "Increase",
            highlight: "Retention",
            description:
                "A highly engaged workforce can reduce a company's turnover rate as much as 59%.",
            source: "Achievers Solution Inc.",
        },
        {
            title: "Remain",
            highlight: "Competitive",
            description:
                "61% of adults in the United States seek career development opportunities when considering job opportunities.",
            source: "Jobvite",
        },
        {
            title: "Encourage",
            highlight: "Progression",
            description:
                "External new hires are 61% more likely to be let go from their jobs than those who are promoted to the same position.",
            source: "HR Daily Advisor",
        },
    ];

    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <p className="text-blue-600 font-semibold uppercase mb-2 text-sm">
                    Benefits of Company Training
                </p>
                <BlockTitle title="How we Can Help" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="relative group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:ring-2 hover:ring-blue-500"
                    >
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-lg font-bold">
                            {index + 1}
                        </div>

                        <h3 className="mt-8 text-xl font-semibold text-gray-900">
                            {stat.title}{" "}
                            <span className="text-blue-600">
                                {stat.highlight}
                            </span>
                        </h3>
                        <p className="text-gray-600 mt-4 text-sm">
                            {stat.description}
                        </p>
                        <p className="text-gray-400 text-xs mt-4">
                            Source: <em>{stat.source}</em>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
