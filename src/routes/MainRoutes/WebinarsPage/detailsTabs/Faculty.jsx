import React, { useEffect, useState } from "react";
import { educators } from "../../../../utils/dummy";

export default function Faculty({ faculty }) {
    let [state, setState] = useState({ educatorsData: [] });

    useEffect(() => {
        let filteredData = educators?.filter((educator) =>
            faculty?.some((item) => item?._id === educator?._id)
        );
        setState((prev) => ({ ...prev, educatorsData: filteredData }));
    }, [faculty]);

    console.log("faculty", state?.educatorsData);
    return (
        <div>
            <h2 className="text-xl font-semibold mb-2">Faculty</h2>
            {state?.educatorsData?.map((educator) => (
                <div className="flex flex-col space-y-5" key={educator?._id}>
                    <div className="flex space-x-4">
                        <div>
                            <img
                                src={educator?.image}
                                alt={educator?.name}
                                className="size-32 rounded-full object-cover"
                            />
                        </div>
                        <div>
                            <div className="mb-5">
                                <h3 className="text-xl font-semibold text-gray-700">
                                    {educator?.name}
                                </h3>
                                <h5 className="text-lg font-semibold text-blue-500">
                                    {educator?.qualifications}
                                </h5>
                            </div>
                            <h6 className="font-semibold">
                                {educator?.company}
                            </h6>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: educator?.about,
                                }}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
