import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, X, ChevronDown } from "lucide-react";

import TrustedStats from "../../custom/TrustedStats";
import DemoRequestForm from "../../custom/DemoRequestForm";

import Button from "../../components/basic/Button";
import { subscriptionPlans, planComparisonData } from "../../utils/dummy";

export default function SubscriptionPlans() {
    const [showComparison, setShowComparison] = useState(false);
    let navigate = useNavigate();

    const renderCell = (value) => {
        if (value === true)
            return <Check className="text-green-500 mx-auto" size={16} />;
        if (value === false)
            return <X className="text-red-500 mx-auto" size={16} />;
        return <span className="text-sm text-gray-700 mx-auto">{value}</span>;
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <section className="grid md:grid-cols-4 gap-6">
                {subscriptionPlans?.map((plan, idx) => (
                    <div
                        key={idx}
                        className="border rounded-lg shadow p-6 gap-3 flex flex-col justify-between"
                    >
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold mb-2">
                                {plan?.title}
                            </h3>
                            <p className="text-sm">{plan?.desc}</p>
                            {plan?.price && (
                                <p className="text-center text-gray-600 mb-4">
                                    {plan?.price}
                                </p>
                            )}
                            <ul className="space-y-2 text-gray-700 mb-6">
                                {plan?.features?.map((feature, fIdx) => (
                                    <li
                                        key={fIdx}
                                        className="flex items-center"
                                    >
                                        <Check
                                            className="text-green-500 mr-2"
                                            size={16}
                                        />{" "}
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button
                            className="btn-primary w-full"
                            label={plan?.cta}
                            onClick={() =>
                                plan?.slug && navigate(`/${plan?.slug}`)
                            }
                        />
                    </div>
                ))}
            </section>
            <section className="border-t pt-10">
                <button
                    onClick={() => setShowComparison(!showComparison)}
                    className="flex items-center space-x-2 text-lg font-semibold text-primary hover:underline mb-6"
                >
                    <span>Compare Plan Features</span>
                    <ChevronDown
                        className={`transition-transform ${
                            showComparison ? "rotate-180" : ""
                        }`}
                    />
                </button>

                {showComparison && (
                    <div className="overflow-auto border rounded-lg">
                        <table className="min-w-full text-left text-sm border-collapse">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-4">Features</th>
                                    <th className="p-4 text-center">
                                        Single Courses
                                    </th>
                                    <th className="p-4 text-center">
                                        Individual Pass
                                    </th>
                                    <th className="p-4 text-center">
                                        Teams & Enterprise
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {planComparisonData?.map((row, index) =>
                                    row.type === "heading" ? (
                                        <tr key={index} className="bg-gray-50">
                                            <td
                                                colSpan="4"
                                                className="p-4 font-semibold text-gray-700"
                                            >
                                                {row.title}
                                            </td>
                                        </tr>
                                    ) : (
                                        <tr key={index} className="border-t">
                                            <td className="p-4">
                                                {row.feature}
                                            </td>
                                            <td className="p-4 text-center">
                                                {renderCell(row.single)}
                                            </td>
                                            <td className="p-4 text-center">
                                                {renderCell(row.individual)}
                                            </td>
                                            <td className="p-4 text-center">
                                                {renderCell(row.team)}
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>
            <TrustedStats />
            <DemoRequestForm />
        </div>
    );
}
