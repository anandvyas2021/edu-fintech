import { BlockTitle } from "../../../components/typography";
import FormComponent from "./FormComponent";

export default function HeroCTASection() {
    return (
        <section className="bg-white py-12 px-4 md:px-20 shadow-sm">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
                {/* Left Content */}
                <div className="flex-1">
                    <BlockTitle
                        title={"Schedule a Demo with the Lorman Team"}
                        textCenter={false}
                    />
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Discover how to efficiently train your team</li>
                        <li>See how easy it is to track employee progress</li>
                        <li>
                            Learn how to fill knowledge gaps and upskill
                            employees
                        </li>
                    </ul>
                </div>

                {/* Right Form */}
                <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md w-full">
                    <FormComponent />
                </div>
            </div>
        </section>
    );
}
