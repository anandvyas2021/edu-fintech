import {
    Search,
    Users,
    Banknote,
    Building2,
    Stethoscope,
    BookUser,
    Gavel,
    BriefcaseBusiness,
    TrendingUp,
    Landmark,
    Wrench,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { BlockTitle } from "../../../components/typography";
import Button from "../../../components/basic/Button";

export default function Educators() {
    let navigate = useNavigate();

    return (
        <div className="w-full">
            <section
                className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
                // style={{
                //     backgroundImage:
                //         "url(https://www.lorman.com/images/professionals-hero.jpg)",
                // }}
            >
                <div className="bg-gray-700 w-full h-full absolute inset-0"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <BlockTitle
                        title={"Connect with a professional now."}
                        textColor="text-blue-100"
                    />
                    <p className="text-lg mb-6">
                        Find professionals and accomplish your goals.
                    </p>
                    <div className="flex mx-auto items-center gap-1">
                        <div className="flex items-center w-full rounded-lg shadow-lg bg-white overflow-hidden">
                            <Search className="ml-4 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search by name, location, or specialty"
                                className="flex-grow px-4 py-3 outline-none text-gray-700"
                            />
                        </div>
                        <Button
                            className=" border-blue-600 !h-full px-6 py-3.5"
                            label={"Search"}
                            onClick={() => navigate("/professionals/list")}
                        />
                    </div>
                </div>
            </section>

            {/* Quick Description */}
            <section className="text-center py-16 px-4">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                    The quickest way to find qualified professionals to help
                    your business today.
                </h2>
                <Button
                    className="mt-6 px-6 py-3 border !bg-white border-blue-600 text-blue-600 hover:!bg-blue-50 rounded-md font-medium"
                    label={"Explore Professional Directory"}
                    onClick={() => navigate("/professionals/list")}
                />
            </section>

            {/* Categories Circular Grid */}
            <section className="py-16 bg-gray-50">
                <h3 className="text-center text-xl font-semibold mb-10">
                    We know the right person to assist you.
                </h3>
                <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 px-4">
                    <CategoryCard
                        icon={<Users size={28} />}
                        label="HR"
                        color="bg-blue-500"
                    />
                    <CategoryCard
                        icon={<Gavel size={28} />}
                        label="Legal & Law Practices"
                        color="bg-orange-500"
                    />
                    <CategoryCard
                        icon={<Stethoscope size={28} />}
                        label="Medical"
                        color="bg-blue-400"
                    />
                    <CategoryCard
                        icon={<Building2 size={28} />}
                        label="Engineering & Environment"
                        color="bg-green-500"
                    />
                    <CategoryCard
                        icon={<Wrench size={28} />}
                        label="Construction"
                        color="bg-yellow-800"
                    />
                    <CategoryCard
                        icon={<Landmark size={28} />}
                        label="Banking & Finance"
                        color="bg-yellow-400"
                    />
                    <CategoryCard
                        icon={<Banknote size={28} />}
                        label="Accounting & Tax"
                        color="bg-teal-400"
                    />
                    <CategoryCard
                        icon={<TrendingUp size={28} />}
                        label="Wealth & Asset Management"
                        color="bg-red-400"
                    />
                    <CategoryCard
                        icon={<BriefcaseBusiness size={28} />}
                        label="Marketing & Sales"
                        color="bg-gray-700"
                    />
                </div>
            </section>

            {/* Join Directory Section */}
            <section className="bg-gray-100 py-16 px-4 text-center">
                <h3 className="text-2xl font-semibold mb-4">
                    Join our Professional Directory
                </h3>
                <p className="max-w-xl mx-auto text-gray-600 mb-6">
                    Be featured as a top professional in your industry,
                    searchable by 1 million+ visitors each year. Share your
                    expertise and help clients, customers, or businesses achieve
                    their goals.
                </p>
                <button className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md font-medium">
                    Learn More
                </button>
            </section>
        </div>
    );
}

function CategoryCard({ icon, label, color, slug }) {
    return (
        <div
            className="flex flex-col items-center space-y-2 text-center hover:scale-110 transition-all  cursor-pointer"
            onClick={() => navigate(`/${slug}`)}
        >
            <div
                className={`flex items-center justify-center ${color} text-white rounded-full w-24 h-24 shadow-lg`}
            >
                {icon}
            </div>
            <p className="font-semibold text-gray-800 text-sm">{label}</p>
        </div>
    );
}
