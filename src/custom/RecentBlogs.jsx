import { BookOpenCheck } from "lucide-react";
import { BlockTitle } from "../components/typography";

export default function RecentBlogs() {
    const blogs = [
        {
            title: "Training At Your Own Pace: Learning Solutions For Professionals [Free Brochure]",
            desc: "Online education is the most efficient way to pursue training and lifelong learning at your own pace. Learn more about our individual and enterprise training solutions.",
            image: BookOpenCheck,
            link: "#",
        },
        {
            title: "Stay Ahead Of The Game: The Benefits Of ELearning During A Recession",
            desc: "In times of downturn or financial difficulty, it is important to invest in the right places. Learn how L&D solutions help your organization stay resilient and attract new talent.",
            image: BookOpenCheck,
            link: "#",
        },
        {
            title: "Boosting Employee Skills: Upskilling And Reskilling",
            desc: "Get ahead of the curve by optimizing the skill value of your team through effective upskilling and reskilling strategies.",
            image: BookOpenCheck,
            link: "#",
        },
    ];

    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
                <BlockTitle title="Recent Blog Posts" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {blogs.map(({ title, desc, image: Icon, link }, id) => (
                        <div
                            key={id}
                            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
                        >
                            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                                <Icon className="h-48 w-full object-cover" />
                            </div>
                            {/* <img
                                src={image}
                                alt={title}
                                className="h-48 w-full object-cover"
                            /> */}
                            <div className="p-6 flex flex-col justify-between h-full">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                    {title}
                                </h3>
                                <p className="text-gray-600 flex-grow">
                                    {desc}
                                </p>
                                <a
                                    href={link}
                                    className="mt-4 inline-flex items-center text-blue-600 font-medium hover:underline"
                                >
                                    Read More
                                    <span className="ml-1">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
