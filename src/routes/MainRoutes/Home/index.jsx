import HeroSection from "./HeroSection";
import TrainingSolutions from "./TrainingSolutions";
import TrustedStats from "./TrustedStats";
import LearnFromBest from "./LearnFromBest";

export default function Home() {
    return (
        <div className="font-sans text-gray-900 bg-[#F8FAFC]">
            <HeroSection />
            <TrainingSolutions />
            <TrustedStats />
            <LearnFromBest />

            {/* <section className="bg-white py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h4 className="text-xl font-semibold mb-6 text-center">
                        What Our Users Say
                    </h4>
                    <div className="space-y-8">
                        {[
                            {
                                name: "Roger Andrade",
                                quote: "Wide range of topics… Great experience.",
                            },
                            {
                                name: "Lori",
                                quote: "All‑Access Pass is definitely the way to go.",
                            },
                        ].map((t) => (
                            <blockquote
                                key={t.name}
                                className="border-l-4 border-indigo-600 pl-4 italic text-gray-700"
                            >
                                “{t.quote}” — <strong>{t.name}</strong>
                            </blockquote>
                        ))}
                    </div>
                </div>
            </section> */}
        </div>
    );
}

// function TrustedStats() {
//     const logos = [
//         "/logos/amazon.svg",
//         "/logos/google.svg",
//         "/logos/microsoft.svg",
//         "/logos/ibm.svg",
//         "/logos/adobe.svg",
//         "/logos/intel.svg",
//         "/logos/netflix.svg",
//         "/logos/tesla.svg",
//     ];

//     return (
//         <section className="bg-white py-16 px-6 overflow-hidden">
//             <div className="max-w-6xl mx-auto text-center mb-10">
//                 <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
//                     Trusted by leading brands
//                 </h2>
//                 <p className="text-gray-600 max-w-2xl mx-auto">
//                     Our platform is backed by some of the most respected
//                     companies in the world.
//                 </p>
//             </div>

//             {/* Marquee */}
//             <div className="relative overflow-hidden">
//                 <div className="flex gap-16 animate-marquee-custom w-max">
//                     {logos.map((logo, idx) => (
//                         <img
//                             key={idx}
//                             src={logo}
//                             alt={`Logo ${idx}`}
//                             className="h-10 object-contain opacity-80 grayscale hover:grayscale-0 transition"
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
