export default function FooterAppointCard() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
            <div className="mb-6 flex justify-center">
                <div className="bg-indigo-700 text-white rounded-full p-4">
                    {/* Placeholder for logo icon */}
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6l4 2"
                        />
                    </svg>
                </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Book An Appointment Today
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
                Book an appointment with our handpicked mental health and
                wellness experts whenever or wherever you want!
            </p>
            <button className="mt-6 inline-flex items-center px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition">
                Book Appointment
                <span className="ml-2">→</span>
            </button>
        </div>
    );
}
