export const BlockTitle = ({ title, textColor, textCenter = true }) => {
    return (
        <h2
            className={`text-3xl md:text-4xl font-bold text-gray-900 mb-2 ${textColor} ${
                textCenter ? "text-center" : ""
            }`}
        >
            {title}
        </h2>
    );
};
