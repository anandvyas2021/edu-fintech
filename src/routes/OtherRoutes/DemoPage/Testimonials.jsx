import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import { BlockTitle } from "../../../components/typography";

const testimonials = [
    {
        _id: 1,
        name: "John Doe",
        role: "CEO, Example Inc.",
        content: "This platform exceeded my expectations. Highly recommend!",
        rating: 5,
    },
    {
        _id: 2,
        name: "Jane Smith",
        role: "HR Manager, Global Co.",
        content: "Seamless experience and top-notch learning resources.",
        rating: 4,
    },
    {
        _id: 3,
        name: "Alex Johnson",
        role: "Marketing Head, BigBrand",
        content: "Super easy to use and fantastic support team.",
        rating: 5,
    },
    {
        _id: 4,
        name: "Emily Brown",
        role: "Freelancer",
        content:
            "The most convenient and reliable learning solution I've found.",
        rating: 4,
    },
];

export default function Testimonials() {
    return (
        <div className="relative max-w-6xl mx-auto py-12 px-4">
            <BlockTitle title="Here's what others say about us" />

            {/* Custom Navigation Arrows */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-10">
                <button className="swiper-button-prev-custom bg-gray-100 p-2 rounded-full hover:bg-gray-200 shadow">
                    <ChevronLeft size={20} />
                </button>
            </div>
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 z-10">
                <button className="swiper-button-next-custom bg-gray-100 p-2 rounded-full hover:bg-gray-200 shadow">
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Swiper Carousel */}
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                loop
            >
                {testimonials.map((t) => (
                    <SwiperSlide key={t._id}>
                        <div className="bg-white rounded-xl border shadow p-6 h-full flex flex-col justify-between hover:shadow-lg transition">
                            <p className="text-gray-700 mb-4 italic">
                                "{t.content}"
                            </p>

                            <div className="flex items-center gap-3 mt-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        {t.name}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        {t.role}
                                    </p>
                                </div>
                            </div>

                            <div className="flex mt-4">
                                {[...Array(5)].map((_, idx) => (
                                    <Star
                                        key={idx}
                                        size={16}
                                        className={`${
                                            idx < t.rating
                                                ? "text-yellow-400"
                                                : "text-gray-300"
                                        }`}
                                        fill={
                                            idx < t.rating
                                                ? "currentColor"
                                                : "none"
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// const testimonials = [
//     {
//         title: "Wide range of topics to choose from",
//         review: "Wide range of topics to choose from. Very well presented topics. Easy to access and view. Great experience with the Lorman site...",
//         name: "Roger Andrade",
//         rating: 5,
//     },
//     {
//         title: "I like the wide range of topics...",
//         review: "I like the wide range of topics available, and that I can view the on-demand webinars at any time. I've felt that the presenters...",
//         name: "Linda Noble",
//         rating: 4,
//     },
//     {
//         title: "Great Educational Value!",
//         review: "The All-Access Pass is definitely the way to go. It allows you to get as much training as you want during the entire year without...",
//         name: "Lori",
//         rating: 5,
//     },
//     {
//         title: "It's one thing to purchase a product",
//         review: "It's one thing to purchase a product. It's another to have a representative proactively reach out to schedule time to meet f...",
//         name: "Mike Henderson",
//         rating: 4,
//     },
//     {
//         title: "Impressive course quality",
//         review: "The courses are high quality and relevant to my industry. I appreciate the ease of access and clear structure.",
//         name: "Sarah Williams",
//         rating: 5,
//     },
// ];

// export default function TestimonialCarousel() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handlePrev = () => {
//         setCurrentIndex((prev) =>
//             prev === 0 ? Math.max(testimonials.length - 3, 0) : prev - 3
//         );
//     };

//     const handleNext = () => {
//         setCurrentIndex((prev) =>
//             prev + 3 >= testimonials.length ? 0 : prev + 3
//         );
//     };

//     const visibleTestimonials = testimonials.slice(
//         currentIndex,
//         currentIndex + 3
//     );
//     // const renderStars = (count) => {
//     //     return (
//     //         <div className="flex justify-center mb-2">
//     //             {Array.from({ length: 5 }).map((_, index) => (
//     //                 <span
//     //                     key={index}
//     //                     className={`text-yellow-400 text-lg ${
//     //                         index < count ? "" : "text-gray-300"
//     //                     }`}
//     //                 >
//     //                     ★
//     //                 </span>
//     //             ))}
//     //         </div>
//     //     );
//     // };

//     return (
//         <div className="max-w-5xl mx-auto py-8 text-center">
//             <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
//             <div className="relative overflow-hidden py-6">
//                 {/* Prev Button */}
//                 <button
//                     className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
//                     onClick={handlePrev}
//                 >
//                     <ChevronLeft size={20} />
//                 </button>

//                 {/* Next Button */}
//                 <button
//                     className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
//                     onClick={handleNext}
//                 >
//                     <ChevronRight size={20} />
//                 </button>

//                 {/* Sliding Testimonials */}
//                 <div className="grid md:grid-cols-3 gap-4">
//                     <AnimatePresence mode="wait">
//                         {visibleTestimonials.map((testimonial, index) => (
//                             <motion.div
//                                 key={testimonial?._id}
//                                 initial={{ opacity: 0, x: 50 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 exit={{ opacity: 0, x: -50 }}
//                                 transition={{ duration: 0.4 }}
//                                 className="bg-white p-6 rounded shadow flex flex-col gap-3"
//                             >
//                                 <div className="flex gap-1 text-yellow-400">
//                                     {Array.from({ length: 5 }).map((_, i) => (
//                                         <Star
//                                             key={i}
//                                             size={16}
//                                             fill={
//                                                 i < testimonial?.rating
//                                                     ? "#facc15"
//                                                     : "none"
//                                             }
//                                             stroke="#facc15"
//                                         />
//                                     ))}
//                                 </div>
//                                 <p className="text-gray-700 text-sm">
//                                     {testimonial?.review}
//                                 </p>
//                                 <div className="mt-auto font-medium text-gray-900">
//                                     {testimonial?.name}
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </AnimatePresence>
//                 </div>
//             </div>
//             {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {visibleTestimonials.map((testimonial, index) => (
//                     <div
//                         key={index}
//                         className="border p-4 rounded shadow hover:shadow-lg transition flex flex-col justify-between h-full"
//                     >
//                         {renderStars(testimonial.rating)}
//                         <p className="italic text-gray-700 mb-3">
//                             "{testimonial.review}"
//                         </p>
//                         <div className="mt-auto">
//                             <h4 className="font-semibold">
//                                 {testimonial.name}
//                             </h4>
//                             <p className="text-sm text-gray-500">
//                                 {testimonial.title}
//                             </p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="flex justify-center gap-4 mt-6">
//                 <button
//                     onClick={handlePrev}
//                     className="p-2 border rounded hover:bg-gray-100"
//                 >
//                     &#8592;
//                 </button>
//                 <button
//                     onClick={handleNext}
//                     className="p-2 border rounded hover:bg-gray-100"
//                 >
//                     &#8594;
//                 </button>
//             </div> */}
//         </div>
//     );
// }

// // import { useState } from "react";
// // import { ChevronLeft, ChevronRight } from "lucide-react";

// // const testimonials = [
// //     {
// //         name: "Jane Doe",
// //         position: "HR Manager, TechCorp",
// //         content:
// //             "Lorman made compliance training simple and engaging for our team. The reporting is a huge bonus!",
// //     },
// //     {
// //         name: "Michael Smith",
// //         position: "Director of Operations, FinGroup",
// //         content:
// //             "We filled skill gaps quickly with Lorman's platform. The library of content is unmatched.",
// //     },
// //     {
// //         name: "Sarah Johnson",
// //         position: "Learning & Development, HealthPlus",
// //         content:
// //             "The ease of tracking progress and assigning courses has transformed our training strategy.",
// //     },
// // ];

// // export default function Testimonials() {
// //     const [current, setCurrent] = useState(0);

// //     const next = () => {
// //         setCurrent((prev) => (prev + 1) % testimonials.length);
// //     };

// //     const prev = () => {
// //         setCurrent(
// //             (prev) => (prev - 1 + testimonials.length) % testimonials.length
// //         );
// //     };

// //     return (
// //         <section className="bg-gray-50 py-12 px-4 md:px-20">
// //             <div className="max-w-4xl mx-auto text-center space-y-6">
// //                 <h2 className="text-3xl md:text-4xl font-bold text-primary">
// //                     What Our Clients Say
// //                 </h2>

// //                 <div className="relative bg-white p-6 rounded-lg shadow space-y-4">
// //                     <p className="text-lg text-gray-700 italic">
// //                         "{testimonials[current].content}"
// //                     </p>
// //                     <div className="font-semibold text-gray-900">
// //                         {testimonials[current].name}
// //                     </div>
// //                     <div className="text-sm text-gray-500">
// //                         {testimonials[current].position}
// //                     </div>

// //                     {/* Controls */}
// //                     <div className="flex justify-center gap-4 mt-4">
// //                         <button
// //                             onClick={prev}
// //                             className="p-2 rounded-full border hover:bg-gray-100"
// //                         >
// //                             <ChevronLeft size={20} />
// //                         </button>
// //                         <button
// //                             onClick={next}
// //                             className="p-2 rounded-full border hover:bg-gray-100"
// //                         >
// //                             <ChevronRight size={20} />
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // }
