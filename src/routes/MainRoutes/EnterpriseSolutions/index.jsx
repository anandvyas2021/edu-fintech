import HeroSection from "./HeroSection";
import TrustedStats from "../Home/TrustedStats";
import Features from "./Features";
import Benefits from "./Benefits";
import CtaSection from "./CtaSection";
import DemoRequestForm from "../../../custom/DemoRequestForm";
import About from "./About";
import RecentBlogs from "./RecentBlogs";
import WhatSetsUsApart from "./WhatSetsUsApart";

export default function EnterpriseSolutions() {
    return (
        <>
            <HeroSection />
            <TrustedStats />
            <Features />
            {/* <Benefits /> */}
            <CtaSection />
            <WhatSetsUsApart />
            <RecentBlogs />
            <About />
            <DemoRequestForm />
        </>
    );
}
