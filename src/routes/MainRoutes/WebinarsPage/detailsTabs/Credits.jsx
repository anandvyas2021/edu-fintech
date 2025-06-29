export default function Credits({ credits }) {
    return (
        <>
            {credits?.desc && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Credits</h2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: credits?.desc,
                        }}
                    />
                </div>
            )}
            {credits?.who_should_attend && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">
                        Who Should attend?
                    </h2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: credits?.who_should_attend,
                        }}
                    />
                </div>
            )}
        </>
    );
}
