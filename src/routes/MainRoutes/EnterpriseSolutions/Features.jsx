import Button from "../../../components/basic/Button";
import { BlockTitle } from "../../../components/typography";
import { enterpriseFeatures } from "../../../utils/dummy";

export default function EnterpriseFeatures() {
    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <BlockTitle title="Enterprise Training & Development" />

                <div className="space-y-16">
                    {enterpriseFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className={`grid md:grid-cols-2 gap-10 items-center ${
                                index % 2 !== 0
                                    ? "!flex md:flex-row-reverse"
                                    : ""
                            }`}
                        >
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-full h-64 object-cover rounded-xl shadow"
                            />

                            <div>
                                <p className="text-sm text-blue-600 font-semibold mb-2 uppercase">
                                    {feature.subDesc}
                                </p>
                                <h3 className="text-2xl font-semibold mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {feature.description}
                                </p>
                                <Button
                                    className="px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                                    label={feature.cta}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
