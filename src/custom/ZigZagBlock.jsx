import { useNavigate } from "react-router-dom";

import Button from "../components/basic/Button";
import { BlockTitle } from "../components/typography";

export default function ZigZagBlock({ title, data }) {
    let navigate = useNavigate();
    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <BlockTitle title={title} />

                <div className="mt-5 space-y-12">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="grid md:grid-cols-2 gap-8 items-stretch bg-white rounded-xl shadow hover:shadow-md transition-all overflow-hidden"
                        >
                            {/* Image Block */}
                            <div
                                className={`h-72 md:h-auto ${
                                    index % 2 !== 0 ? "md:order-2" : ""
                                }`}
                            >
                                <img
                                    src={item?.image}
                                    alt={item?.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Block */}
                            <div className="flex flex-col justify-center p-8">
                                <p className="text-sm text-blue-600 font-semibold mb-2 uppercase">
                                    {item?.subDesc}
                                </p>
                                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                                    {item?.title}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {item?.desc}
                                </p>
                                <Button
                                    className="rounded self-start"
                                    label={item?.cta}
                                    onClick={() =>
                                        item?.slug && navigate(`/${item?.slug}`)
                                    }
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
