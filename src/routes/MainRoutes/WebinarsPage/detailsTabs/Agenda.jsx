export default function Agenda({ agenda }) {
    return (
        <div>
            {agenda && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Agenda</h2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: agenda,
                        }}
                    />
                </div>
            )}
        </div>
    );
}
