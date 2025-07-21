import { useNavigate } from "react-router-dom";
import Button from "../../../../components/basic/Button";

export default function HeroSection() {
    let navigate = useNavigate();

    return (
        <>
            {/* Hero Text Section */}
            <section className="pt-20 pb-16 text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Our All-Access Pass
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
                    Everything you need for professional development in one
                    convenient place. Stay current on industry trends, in-demand
                    skills, and earn continuing education credits.
                </p>
                <div className="flex justify-center space-x-4">
                    <Button
                        label="View Pricing"
                        onClick={() => navigate("/plans")}
                    />
                    <Button
                        label="Request Demo"
                        className="bg-white !text-indigo-600 border border-indigo-600 hover:bg-indigo-50"
                        onClick={() => navigate("/demo")}
                    />
                </div>
            </section>
        </>
    );
}
