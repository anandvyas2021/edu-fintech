export default function Button({ label, onClick, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 px-4 rounded-xl shadow ${className}`}
        >
            {label}
        </button>
    );
}
