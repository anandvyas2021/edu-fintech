export default function CustomCard({ title, description, children }) {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-200 p-6 flex flex-col gap-4 max-w-md w-full">
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
            {children && <div className="mt-2">{children}</div>}
        </div>
    );
}
