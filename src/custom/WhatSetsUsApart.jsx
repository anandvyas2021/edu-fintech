import { BlockTitle } from "../components/typography";

export default function WhatSetsUsApart({ features, grid = 3 }) {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <BlockTitle title="What Sets Us Apart" />
            </div>

            <div
                className={`grid md:grid-cols-${
                    grid - 1
                } lg:grid-cols-${grid} gap-10 max-w-6xl mx-auto`}
            >
                {features?.map(({ icon: Icon, title, description }, i) => (
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
