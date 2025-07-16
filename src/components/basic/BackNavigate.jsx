import { useNavigate } from "react-router-dom";

export default function BackNavigate({ to }) {
    let navigate = useNavigate();
    return (
        <button
            onClick={() => navigate(to ? to : -1)}
            className="mb-3 text-base hover:scale-110 transition-all text-blue-600"
        >
            ← Back
        </button>
    );
}
