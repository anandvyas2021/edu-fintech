import Slider from "react-slick";
import { trustedBrands } from "../../../utils/dummy";
import { BlockTitle } from "../../../components/typography";

export default function TrustedStats() {
    const settings = {
        infinite: true,
        speed: 5000, // Lower means faster scroll
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // Immediate next slide starts
        cssEase: "linear", // Removes easing for smooth continuous scroll
        arrows: false,
        pauseOnHover: false,
    };

    return (
        <>
            <section className="bg-white py-16 px-6 overflow-hidden">
                <div className="max-w-6xl mx-auto text-center mb-10">
                    <BlockTitle title=" Trusted by leading brands" />
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our platform is backed by some of the most respected
                        companies in the world.
                    </p>
                </div>

                <Slider {...settings}>
                    {trustedBrands?.map((item, id) => (
                        <div
                            key={id}
                            className="flex items-center justify-center"
                        >
                            <img
                                src={item?.image}
                                alt={`Logo ${id + 1}`}
                                className="h-10 object-contain opacity-80 grayscale hover:grayscale-0 transition"
                            />
                        </div>
                    ))}
                </Slider>
            </section>
            {/* <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-gray-600 mb-8">
                        Trusted by millions for continuing education,
                        compliance, and upskilling needs
                    </p>
                    <div className="flex justify-center items-center space-x-8">
                        {[38, 14_000, 1_000_000].map((n) => (
                            <div key={n} className="text-center">
                                <p className="text-4xl font-bold text-indigo-600">
                                    {n.toLocaleString()}
                                </p>
                                <p className="text-gray-600">
                                    +{" "}
                                    {n === 38
                                        ? "Years"
                                        : n === 14_000
                                        ? "Courses"
                                        : "Served"}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
        </>
    );
}
