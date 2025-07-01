import CountUp from "react-countup";

export default function StatsCounter({ stats }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-12">
            {stats?.map((s, i) => (
                <div key={i}>
                    <CountUp
                        start={0}
                        end={s?.value}
                        duration={2}
                        separator=","
                        className="text-4xl font-bold text-blue-600"
                    />
                    <p className="mt-2 text-gray-600">{s?.label}</p>
                </div>
            ))}
        </div>
    );
}
