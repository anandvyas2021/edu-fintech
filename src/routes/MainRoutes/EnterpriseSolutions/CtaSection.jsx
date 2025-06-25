import Button from "../../../components/basic/Button";

export default function CtaSection() {
    return (
        <section className="py-16 px-6 bg-blue-600 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                See Our Enterprise Solution in Action
            </h2>
            <p className="max-w-xl mx-auto mb-6">
                Request a personalized demo and discover how our platform helps
                leading organizations upskill and stay compliant.
            </p>
            <Button
                label="Request Demo"
                className="bg-white !text-blue-600 hover:bg-gray-100"
            />
        </section>
    );
}
