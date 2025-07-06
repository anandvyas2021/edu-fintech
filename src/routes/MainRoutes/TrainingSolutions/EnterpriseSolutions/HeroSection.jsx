import Button from "../../../../components/basic/Button";

export default function HeroSection() {
    return (
        <section className="bg-white py-20 px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Enterprise Learning Solutions
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-6">
                Tailored training programs to upskill your workforce, maintain
                compliance, and drive organizational success.
            </p>
            <div className="flex justify-center space-x-4">
                <Button label="Request Demo" />
            </div>
        </section>
    );
}
