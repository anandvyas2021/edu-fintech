import HeroSection from "./HeroSection";
import Features from "./Features";
import TrustedStats from "../Home/TrustedStats";
import WhatSetsUsApart from "./WhatSetsUsApart";
import Benefits from "./Benefits";
import RecentBlogs from "./RecentBlogs";
import About from "./About";
import DemoRequestForm from "../../../custom/DemoRequestForm";

export default function EnterpriseSolutions() {
    return (
        <>
            <HeroSection />
            <Features />
            <TrustedStats />
            <WhatSetsUsApart />
            <Benefits />
            <RecentBlogs />
            <About />
            <DemoRequestForm />
        </>
    );
}
