export default function Overview({ overview }) {
    return (
        <div>
            {overview?.desc && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Overview</h2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: overview?.desc,
                        }}
                    />
                </div>
            )}

            {overview?.learning_objective && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">
                        Learning Objectives
                    </h3>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: overview?.learning_objective,
                        }}
                    />
                </div>
            )}

            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Faculty</h3>
                <div className="flex items-center space-x-4">
                    {overview?.faculty?.map((item, i) => (
                        <div
                            className="flex flex-col items-center space-x-4"
                            key={i}
                        >
                            <img
                                src={item?.image}
                                alt={item?.name}
                                className="w-20 h-20 rounded-full object-cover"
                            />
                            <span className="text-gray-700">{item?.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
