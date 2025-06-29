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
                <div className="flex flex-col space-x-4">
                    <img
                        src={educator?.image}
                        alt={educator?.name}
                        className="w-20 h-20 rounded-full object-cover"
                    />
                    <span className="text-gray-700">{educator?.name}</span>
                </div>
            ))}
        </div>
    );
}
