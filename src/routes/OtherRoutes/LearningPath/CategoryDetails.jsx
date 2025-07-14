import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ProcessSection from "./ProcessSection";
import WebinarGrid1 from "../../../components/layouts/WebinarGrid1";
import HeroPanelLayout from "../../../components/layouts/HeroPanelLayout";

import { learningPathsData } from "../../../utils/dummy";

export default function CategoryDetails() {
    let [businessData, setBusinessData] = useState({});
    let [webinarsData, setWebinarsData] = useState([]);
    const [params] = useSearchParams();
    let currentBusinessSlug = params?.get("name");

    useEffect(() => {
        let filteredData = learningPathsData?.filter(
            (item) => item?.slug === currentBusinessSlug
        );
        setBusinessData(filteredData[0]);
    }, [currentBusinessSlug]);

    useEffect(() => {
        let data = [];
        setWebinarsData(data);
    }, [businessData]);

    return (
        <div>
            <HeroPanelLayout
                bonusTitle="Lorman Learning Path"
                title={businessData?.title}
                buttoned
            />
            <HeroDescription
                label={businessData?.label}
                desc={businessData?.desc}
            />
            <ProcessSection />
            <WebinarGrid1 title={businessData?.title} webinars={webinarsData} />
            <section />
        </div>
    );
}

function HeroDescription({ label, desc }) {
    return (
        <section className="py-12 text-center px-4 max-w-7xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">{label}</h2>
            <p className="text-sm text-gray-600">{desc}</p>
        </section>
    );
}
