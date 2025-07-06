import HeroSection from "./HeroSection";

import ZigZagBlock from "../../../../custom/ZigZagBlock";
import WhatSetsUsApart from "../../../../custom/WhatSetsUsApart";
import RecentBlogs from "../../../../custom/RecentBlogs";
import About from "../../../../custom/About";
import DemoRequestForm from "../../../../custom/DemoRequestForm";

import {
    individualFeatures,
    whatSetsIndividualsApart,
} from "../../../../utils/dummy";

export default function IndividualSolutions() {
    return (
        <>
            <HeroSection />
            <ZigZagBlock
                title={"Individual Training & Development"}
                desc={
                    "Individual training and professional development resources to advance your career and set you apart from the competition."
                }
                data={individualFeatures}
            />
            <WhatSetsUsApart features={whatSetsIndividualsApart} />
            {/* <Benefits /> */}
            <RecentBlogs />
            <About />
            <DemoRequestForm />
        </>
    );
}
