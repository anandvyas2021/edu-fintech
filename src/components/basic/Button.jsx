import { Button as MTButton, Spinner } from "@material-tailwind/react";

export default function Button({
    label,
    loading,
    type,
    onClick,
    className = "",
}) {
    return (
        <MTButton
            onClick={onClick}
            className={`bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 px-4 rounded-lg shadow ${className}`}
            type={type}
        >
            {loading ? <Spinner /> : label}
        </MTButton>
    );
}
