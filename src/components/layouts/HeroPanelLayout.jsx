import Button from "../basic/Button";

export default function HeroPanelLayout({
    bonusTitle,
    title,
    descTitle,
    buttoned = false,
}) {
    return (
        <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
            {/* Background Image - Leave source/content to you */}
            <div className="absolute inset-0 bg-gray-800 opacity-60"></div>

            <div className="relative z-10 text-white px-4">
                <p className="text-lg mb-2">{bonusTitle}</p>
                <h1 className="text-2xl md:text-4xl font-bold mb-4">{title}</h1>
                {buttoned && (
                    <Button label={descTitle ?? "Get Started Today"} />
                )}
            </div>
        </section>
    );
}
