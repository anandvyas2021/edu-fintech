import { useNavigate } from "react-router-dom";

import Button from "../../../../components/basic/Button";

export default function AccessPass() {
    let navigate = useNavigate();
    return (
        <section className="bg-white rounded-lg shadow-md p-6 md:p-10 max-w-7xl mx-auto my-10">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Left Content */}
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        All of your training, right here at{" "}
                        <span className="text-primary">Lorman</span>.
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Pay <strong>once</strong> and get a{" "}
                        <strong>full year of unlimited training</strong> in any
                        format, any time!
                    </p>

                    <ul className="space-y-2 text-gray-700">
                        {[
                            "OnDemand Courses",
                            "Live Webinars",
                            "MP3 Downloads",
                            "Course Manuals",
                            "Executive Reports",
                            "White Papers and Articles",
                        ].map((item) => (
                            <li key={item} className="flex items-center">
                                <span className="text-green-500 mr-2">✔</span>{" "}
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="mt-4 font-medium">
                        Additional benefits include:
                    </p>
                    <ul className="space-y-2 text-gray-700 mt-2">
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">✔</span> State
                            Specific Credit Tracker
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">✔</span>{" "}
                            All-Access Pass Course Concierge
                        </li>
                    </ul>

                    <p className="mt-6 text-gray-600">
                        Questions? Call{" "}
                        <a
                            href="tel:8772962169"
                            className="text-primary font-medium"
                        >
                            877-296-2169
                        </a>{" "}
                        to speak with a real person.
                    </p>
                </div>

                {/* Right Box */}
                <div className="text-black p-6 rounded-lg shadow w-full md:w-72 text-center">
                    <p className="text-lg font-semibold mb-2">
                        Sign Up Today With This Course
                    </p>
                    <p className="text-sm mb-6">
                        Access to all training products for one year
                    </p>
                    <p className="text-2xl font-bold mb-4">$699/year</p>
                    <Button
                        label="Get All-Access"
                        onClick={() => navigate("/cart")}
                    />
                </div>
            </div>

            {/* Divider */}
            <div className="border-t my-10"></div>

            {/* Bottom Benefits */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
                {/* Card 1 */}
                <div className="flex flex-col items-center">
                    <div className="text-4xl mb-3">🖥️</div>
                    <h3 className="font-bold text-lg mb-2">
                        Unlimited Lorman Training
                    </h3>
                    <p className="text-gray-600 text-sm">
                        With the All-Access Pass there is no guessing what you
                        will need for your yearly training budget. $699 will
                        cover all of your training needs for an entire year!
                    </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center">
                    <div className="text-4xl mb-3">✅</div>
                    <h3 className="font-bold text-lg mb-2">
                        Easy Registrations
                    </h3>
                    <p className="text-gray-600 text-sm">
                        Once you purchase your All-Access Pass you will never be
                        any further than one-click away from attending any
                        Lorman training course.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center">
                    <div className="text-4xl mb-3">📈</div>
                    <h3 className="font-bold text-lg mb-2">
                        Invest in Yourself
                    </h3>
                    <p className="text-gray-600 text-sm">
                        You haven't gotten to where you are professionally by
                        luck alone; it's taken a lot of hard work and training.
                        Invest in yourself with the All-Access Pass.
                    </p>
                </div>
            </div>
        </section>
    );
}
