import HeroSection from "./HeroSection";
import Features from "./Features";
import Benefits from "./Benefits";

import TrustedStats from "../../../../custom/TrustedStats";
import WhatSetsUsApart from "../../../../custom/WhatSetsUsApart";
import RecentBlogs from "../../../../custom/RecentBlogs";
import About from "../../../../custom/About";
import DemoRequestForm from "../../../../custom/DemoRequestForm";

import { whatSetsTeamsApart } from "../../../../utils/dummy";

export default function EnterpriseSolutions() {
    return (
        <>
            <HeroSection />
            <Features />
            <TrustedStats />
            <WhatSetsUsApart features={whatSetsTeamsApart} />
            <Benefits />
            <RecentBlogs />
            <About />
            <DemoRequestForm />
        </>
    );
}
