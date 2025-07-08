import {
    UserCheck,
    BookOpenCheck,
    CalendarCheck,
    Route,
    Handshake,
    BarChart3,
} from "lucide-react";

import heroBg from "../assets/heroBg.jpg";
import { addToCartHandler } from "./api/helpers";

export const trustedBrands = [
    {
        name: "Google",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
        name: "Apple",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
        name: "Microsoft",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
        name: "Amazon",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
        name: "Samsung",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    },
    {
        name: "Nike",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    },
];

export const whatSetsTeamsApart = [
    {
        icon: UserCheck,
        title: "Quality Content and Presenters",
        description:
            "We produce top-quality training by strictly vetting course content and partnering with trusted experts in their field.",
    },
    {
        icon: BookOpenCheck,
        title: "Breadth of Curriculum",
        description:
            "Covering 30+ subject matters with 13,000+ training products to improve hard & soft skills and fill knowledge gaps.",
    },
    {
        icon: CalendarCheck,
        title: "New Courses",
        description:
            "Regular updates with 100+ live courses added monthly for your company’s training & development initiatives.",
    },
    {
        icon: Route,
        title: "Learning Paths",
        description:
            "Track progress and create personalized training paths to meet employees' individual development needs.",
    },
    {
        icon: Handshake,
        title: "Customer Success",
        description:
            "Our success team helps craft a training strategy for long-term success, supporting you every step of the way.",
    },
    {
        icon: BarChart3,
        title: "CE Tracking & Reporting",
        description:
            "Easily track employee progress and earn CE credits for certifications like CLE, CPE, SHRM, HRCI, and others.",
    },
];
export const whatSetsIndividualsApart = [
    {
        icon: UserCheck,
        title: "Quality Content and Presenters",
        description:
            "We produce top-quality training by strictly vetting course content and partnering with trusted experts in their field.",
    },
    {
        icon: BookOpenCheck,
        title: "Breadth of Curriculum",
        description:
            "Covering 30+ subject matters with 13,000+ training products to improve hard & soft skills and fill knowledge gaps.",
    },
    {
        icon: CalendarCheck,
        title: "New Courses",
        description:
            "Regular updates with 100+ live courses added monthly for your company’s training & development initiatives.",
    },
    {
        icon: Route,
        title: "Learning Paths",
        description:
            "Track progress and create personalized training paths to meet employees' individual development needs.",
    },
    {
        icon: Handshake,
        title: "Customer Success",
        description:
            "Our success team helps craft a training strategy for long-term success, supporting you every step of the way.",
    },
    {
        icon: BarChart3,
        title: "CE Tracking & Reporting",
        description:
            "Easily track employee progress and earn CE credits for certifications like CLE, CPE, SHRM, HRCI, and others.",
    },
];

export const individualFeatures = [
    {
        subTitle: "Why Lorman",
        title: "All The Training You Need",
        desc: "The All-Access Pass gives you unlimited access to everything in our Learning Library. Choose from nearly 4,000 continuing education courses across a variety of topics, including certifications, CE credits, skills training, and more. With over 12,000 total resources and new courses added each month, you’ll find the training you need with Lorman.",
        image: "https://source.unsplash.com/600x400/?training,corporate",
        cta: "Browse Courses",
        slug: "training",
    },
    {
        subTitle: "LEARNING PLATFORM",
        title: "Track Your Learning Goals",
        desc: "Manage every aspect of your learning journey to reach your professional development goals with our intuitive Learning Platform. See current courses in progress, courses you’ve finished, and all of your earned CE credits. Access the Learning Platform from your pocket and learn where you want, when you want, on desktop or mobile.",
        image: "https://source.unsplash.com/600x400/?training,corporate",
    },
    {
        subTitle: "LEARNING PATHS",
        title: "Master Your Skills",
        desc: "Determine goals and create a clear path of required courses to enhance core knowledge areas with our Learning Paths. We work with our members to create custom learning and development routes to help enhance core skills or knowledge areas to achieve specific goals. Track your progress along the way and receive a Lorman certificate once completed.",
        image: "https://source.unsplash.com/600x400/?career,growth",
        cta: "View Paths",
        slug: "learning-path",
    },
    {
        subTitle: "TRAINING FORMATS",
        title: "Flexible Course Delivery",
        desc: "Learn at your own pace – however you want, wherever you want — with a variety of learning formats. Engage with Lorman's continuing education programs through live webinars, on-demand courses, white papers, audio recordings, and more.",
        image: "https://source.unsplash.com/600x400/?education,custom",
        cta: "Browse Courses",
        slug: "training",
    },
    {
        subTitle: "CERTIFICATION & COMPLIANCE",
        title: "Easily Earn CE Credits",
        desc: "Stay compliant and up to date on mandatory CE credits and professional certifications with Lorman. We work with nearly 100 accreditation agencies to provide CE credit to licensed professionals nationwide across numerous industries. Receive certifications including CLE, CPE, SHRM, HRCI, ENG, and others.",
        image: "https://source.unsplash.com/600x400/?software,team",
    },
];
export const enterpriseFeatures = [
    {
        subTitle: "Why Lorman",
        title: "Train Your Entire Staff",
        desc: "Lorman provides training for professional licensing needs, upskilling to drive performance and employee retention, and compliance with ever-changing federal and state laws. The Lorman Learning Library has nearly 4,000 courses and 12,000 total resources with new courses added each month.",
        image: "https://source.unsplash.com/600x400/?training,corporate",
        cta: "Browse Courses",
        slug: "training",
    },
    {
        subTitle: "LEARNING PLATFORM",
        title: "Assign and Track Employee Coursework",
        desc: "Our intuitive Learning Platform helps you manage every aspect of your company’s training and continuing education initiatives. Assign courses and Learning Paths to individual employees or teams. Track continuing education credits, see overall course progress, and download certificates — all conveniently in your dashboard.",
        image: "https://source.unsplash.com/600x400/?training,corporate",
    },
    {
        subTitle: "LEARNING PATHS",
        title: "Fill Knowledge Gaps",
        desc: "We work with our members to determine goals and create customized Learning Solutions for their workforce. Managers can create teams or employee Learning Paths to help enhance core skills or address knowledge areas needed to meet company training and development goals.",
        image: "https://source.unsplash.com/600x400/?career,growth",
        cta: "Learning Paths",
        slug: "learning-path",
    },
    {
        subTitle: "A TRUSTED PARTNER",
        title: "Request Custom Courses",
        desc: "Have a course in mind for your employees that you don’t see on our site? Our in-house production team can create custom employee training solutions that fit your organization’s needs. We work with you to achieve your company’s training and development goals. Lorman is not just a content provider — we are a true training partner.",
        image: "https://source.unsplash.com/600x400/?education,custom",
    },
    {
        subTitle: "LMS INTEGRATION",
        title: "Integrate With Your LMS",
        desc: "Integrate our huge library of content and training programs with your LMS. Simply download SCORM files for any course or resource in our library or opt for chosen learning management system integration. We’re here every step of the way to help make your corporate training initiatives as easy as possible.",
        image: "https://source.unsplash.com/600x400/?software,team",
    },
    {
        subTitle: "CONCENTRATE EFFORTS",
        title: "Unify Company Training and Development",
        desc: "Centralizing your company training is the most logical and cost-effective approach to employee learning and development. Oversee your company’s training programs and avoid the hidden costs of paying separate vendors for individual courses.",
        image: "https://source.unsplash.com/600x400/?planning,documents",
        cta: "Browse Courses",
        slug: "training",
    },
];

export const mockWebinars = [
    {
        title: "Best Practices for Communicating Performance Expectations",
        slug: "best-practices-for-communicating-performance-expectations",
        description:
            "Adopt the best practices that will make diving into your inbox less painful and far less time consuming.",
        date: "Jun 30 2025",
        time: "1:00 - 2:05 pm EST",
        type: "Live Webinar",
        otherType: "OnDemand",
        credit: ["ASA", "SHRM", "HR Certification Institute"],
        overview: {
            desc: `<p>Enhance your employees’ performance by communicating your expectations and your strategy to get there.
Communication is key to achieving performance goals. But not all methods of communicating performance expectations and goals are effective.
If goals are not clearly communicated and agreed upon, workers will not achieve them, and the organization will not achieve its goals.
This topic will help the persons responsible for communicating performance expectations and goals understand how to work with people to clearly communicate those goals.
This information will also help managers understand how to bring their efforts at communicating performance expectations and goals in line with organizational best practices.
</p>`,
            learning_objective: `
<ul>
    <li>You will be able to discuss the what and why of communicating performance expectations and goals.</li>
    <li>You will be able to describe how communication strategy is tied to organizational strategy.</li>
    <li>You will be able to review how performance expectations and goals are developed.</li>
    <li>You will be able to explain how to conduct performance expectation and goal discussions.</li>
</ul>`,
            faculty: ["686d0631b138441e547bab44"],
        },
        agenda: `
<p><strong>The What and Why of Communicating Performance Expectations and Goals</strong></p>
<ul style="font-size:14px; list-style-type: square; padding-left: 20px; margin-bottom:20px;">
    <li>What Is Communication Strategy? How Is the Strategy Developed and Implemented for Performance Expectations and Goals?</li>
    <li>Why Is Communication Strategy Important in Best Practice for Communicating Performance Expectations?</li>
    <li>How Is Communication Strategy Tied to Organizational Strategy?</li>
</ul>
<p><strong>How Are Performance Expectations and Goals Developed?</strong></p>
<ul style="font-size:14px; list-style-type: square; padding-left: 20px; margin-bottom:20px;">
    <li>Defining Key Performance Indicators</li>
    <li>Developing Key Performance Indicators Tied to the Balanced Scorecard</li>
    <li>Communicating Key Performance Indicators as Performance Expectations</li>
    <li>Using Alternatives to Key Performance Indicators</li>
</ul>
<p><strong>Conducting Performance Expectation and Goal Discussions</strong></p>
<ul style="font-size:14px; list-style-type: square; padding-left: 20px; margin-bottom:20px;">
    <li>Planning the Discussion</li>
    <li>Opening the Discussion</li>
    <li>Conducting the Discussion With Workers</li>
    <li>Closing the Discussion and Ensuring Support for Performance Expectations and Goals</li>
    <li>Using the Discussion in Combination With Other Communication Approaches</li>
</ul>
`,
        credits: {
            desc: `
<div style="margin-top: 1rem;">
    <h3 style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="border: 1px solid #000; width: 12px; height: 12px; display: inline-block;"></span>
        Live Webinar Registration
    </h3>

    <ul style="list-style-type: square; padding-left: 20px; margin-top: 1rem;font-size:14px;">
        <li>
            <strong>ASA 1.0</strong>
            <p>
                This program may qualify for 1.0 continuing education hour(s) towards maintaining your ASA credential. 
                Please contact ASA for more information at 
                <a href="mailto:certification@americanstaffing.net">certification@americanstaffing.net</a>. 
                Please retain proof of attendance in the event your CE record is audited.
            </p>
        </li>

        <li>
            <div style="display: flex; gap: 1rem; align-items: flex-start;">
                <div>
                    <strong>HR Certification Institute 1.0</strong>
                    <p>
                    This program has been pre-approved for 1.0 (General) recertification credit hours toward 
                    aPHR®, aPHRi(TM), PHR®, PHRca®, SPHR®, GPHR®, PHRi(TM), and SPHRi(TM) recertification through 
                    HR Certification Institute® (HRCI®). For more information about certification or recertification, 
                    please visit the HR Certification Institute website at 
                    <a href="https://www.hrci.org" target="_blank">www.hrci.org</a>.
                    </p>
                </div>
            <img src="https://image.lorman.com/images/credit/tr:w-85,h-85/HRCI-approved-provider.png?v=20250629" alt="HRCI Logo" style="height: 50px;" />
            </div>
            </li>

        <li>
            <div style="display: flex; gap: 1rem; align-items: flex-start;">
                <div>
                <strong>SHRM 1.0</strong>
                <p>
                    Lorman Education Services is recognized by SHRM to offer Professional Development Credits (PDCs) 
                    for the SHRM-CPSM or SHRM-SCPSM. This program is valid for 1.0 PDC(s) for the SHRM-CP or SHRM-SCP.
                </p>
            </div>
            <img src="https://image.lorman.com/images/credit/tr:w-85,h-85/shrm-recertification-provider.png?v=2025" alt="SHRM Logo" style="height: 50px;" />
        </div>
            </li>
    </ul>
    <p style="margin-top: 1rem;">
        <em>
            This program does NOT qualify, nor meet the National Standard for NASBA accreditation.
        </em>
    </p>
</div>

<div style="margin-top: 2rem;">
    <h3 style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="border: 1px solid #000; width: 12px; height: 12px; display: inline-block;"></span>
        OnDemand Course
    </h3>

    <p style="margin-top: 0.5rem;">
        This course was last revised on November 20, 2020.
    </p>

    <p>
        Call 1-866-352-9540 for further credit information.
    </p>

    <ul style="list-style-type: square; padding-left: 20px; margin-top: 1rem;">
        <li>
            <strong>ASA 1.5</strong>
            <p>
                This program may qualify for 1.5 continuing education hour(s) towards maintaining your ASA credential. 
                Please contact ASA for more information at 
                <a href="mailto:certification@americanstaffing.net">certification@americanstaffing.net</a>. 
                Please retain proof of attendance in the event your CE record is audited.
            </p>
        </li>
    </ul>
     <p style="margin-top: 1rem;">
        <em>
            This program does NOT qualify, nor meet the National Standard for NASBA accreditation.
        </em>
    </p>
</div>`,
            who_should_attend: `<p>
    This live webinar is designed for supervisors, team leaders, business owners and managers, 
    human resource managers, presidents, and vice presidents.
</p>`,
        },
        topics: ["Workplace Compliance"],
    },
    {
        title: "Microsoft® Outlook Tips and Tricks",
        slug: "microsoft-outlook-tips-and-tricks",
        description:
            "Adopt the best practices that will make diving into your inbox less painful and far less time consuming.",
        date: "June 30 2025",
        time: "1:00 - 2:05 pm EST",
        type: "Live Webinar",
        otherType: "OnDemand",
        topics: ["General Business Skills"],
        credit: ["NASBA", "AIPB"],
        details: `Everyone wants to catapult their career... (full description here)`,
        overview: {
            desc: `<p>Enhance your employees’ performance by communicating your expectations and your strategy to get there.
Communication is key to achieving performance goals. But not all methods of communicating performance expectations and goals are effective.
If goals are not clearly communicated and agreed upon, workers will not achieve them, and the organization will not achieve its goals.
This topic will help the persons responsible for communicating performance expectations and goals understand how to work with people to clearly communicate those goals.
This information will also help managers understand how to bring their efforts at communicating performance expectations and goals in line with organizational best practices.
</p>`,
            learning_objective: `
<ul>
    <li>You will be able to discuss the what and why of communicating performance expectations and goals.</li>
    <li>You will be able to describe how communication strategy is tied to organizational strategy.</li>
    <li>You will be able to review how performance expectations and goals are developed.</li>
    <li>You will be able to explain how to conduct performance expectation and goal discussions.</li>
</ul>`,
            faculty: ["686d0652b138441e547bab47"],
        },
        agenda: `
<p><strong>The What and Why of Communicating Performance Expectations and Goals</strong></p>
<ul style="font-size:14px; list-style-type: square; padding-left: 20px; margin-bottom:20px;">
    <li>What Is Communication Strategy? How Is the Strategy Developed and Implemented for Performance Expectations and Goals?</li>
    <li>Why Is Communication Strategy Important in Best Practice for Communicating Performance Expectations?</li>
    <li>How Is Communication Strategy Tied to Organizational Strategy?</li>
</ul>
<p><strong>How Are Performance Expectations and Goals Developed?</strong></p>
<ul style="font-size:14px; list-style-type: square; padding-left: 20px; margin-bottom:20px;">
    <li>Defining Key Performance Indicators</li>
    <li>Developing Key Performance Indicators Tied to the Balanced Scorecard</li>
    <li>Communicating Key Performance Indicators as Performance Expectations</li>
    <li>Using Alternatives to Key Performance Indicators</li>
</ul>
<p><strong>Conducting Performance Expectation and Goal Discussions</strong></p>
<ul style="font-size:14px; list-style-type: square; padding-left: 20px; margin-bottom:20px;">
    <li>Planning the Discussion</li>
    <li>Opening the Discussion</li>
    <li>Conducting the Discussion With Workers</li>
    <li>Closing the Discussion and Ensuring Support for Performance Expectations and Goals</li>
    <li>Using the Discussion in Combination With Other Communication Approaches</li>
</ul>
`,
        credits: {
            desc: `
<div style="margin-top: 1rem;">
    <h3 style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="border: 1px solid #000; width: 12px; height: 12px; display: inline-block;"></span>
        Live Webinar Registration
    </h3>

    <ul style="list-style-type: square; padding-left: 20px; margin-top: 1rem;font-size:14px;">
        <li>
            <strong>ASA 1.0</strong>
            <p>
                This program may qualify for 1.0 continuing education hour(s) towards maintaining your ASA credential. 
                Please contact ASA for more information at 
                <a href="mailto:certification@americanstaffing.net">certification@americanstaffing.net</a>. 
                Please retain proof of attendance in the event your CE record is audited.
            </p>
        </li>

        <li>
            <div style="display: flex; gap: 1rem; align-items: flex-start;">
                <div>
                    <strong>HR Certification Institute 1.0</strong>
                    <p>
                    This program has been pre-approved for 1.0 (General) recertification credit hours toward 
                    aPHR®, aPHRi(TM), PHR®, PHRca®, SPHR®, GPHR®, PHRi(TM), and SPHRi(TM) recertification through 
                    HR Certification Institute® (HRCI®). For more information about certification or recertification, 
                    please visit the HR Certification Institute website at 
                    <a href="https://www.hrci.org" target="_blank">www.hrci.org</a>.
                    </p>
                </div>
            <img src="https://image.lorman.com/images/credit/tr:w-85,h-85/HRCI-approved-provider.png?v=20250629" alt="HRCI Logo" style="height: 50px;" />
            </div>
            </li>

        <li>
            <div style="display: flex; gap: 1rem; align-items: flex-start;">
                <div>
                <strong>SHRM 1.0</strong>
                <p>
                    Lorman Education Services is recognized by SHRM to offer Professional Development Credits (PDCs) 
                    for the SHRM-CPSM or SHRM-SCPSM. This program is valid for 1.0 PDC(s) for the SHRM-CP or SHRM-SCP.
                </p>
            </div>
            <img src="https://image.lorman.com/images/credit/tr:w-85,h-85/shrm-recertification-provider.png?v=2025" alt="SHRM Logo" style="height: 50px;" />
        </div>
            </li>
    </ul>
    <p style="margin-top: 1rem;">
        <em>
            This program does NOT qualify, nor meet the National Standard for NASBA accreditation.
        </em>
    </p>
</div>

<div style="margin-top: 2rem;">
    <h3 style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="border: 1px solid #000; width: 12px; height: 12px; display: inline-block;"></span>
        OnDemand Course
    </h3>

    <p style="margin-top: 0.5rem;">
        This course was last revised on November 20, 2020.
    </p>

    <p>
        Call 1-866-352-9540 for further credit information.
    </p>

    <ul style="list-style-type: square; padding-left: 20px; margin-top: 1rem;">
        <li>
            <strong>ASA 1.5</strong>
            <p>
                This program may qualify for 1.5 continuing education hour(s) towards maintaining your ASA credential. 
                Please contact ASA for more information at 
                <a href="mailto:certification@americanstaffing.net">certification@americanstaffing.net</a>. 
                Please retain proof of attendance in the event your CE record is audited.
            </p>
        </li>
    </ul>
     <p style="margin-top: 1rem;">
        <em>
            This program does NOT qualify, nor meet the National Standard for NASBA accreditation.
        </em>
    </p>
</div>`,
            who_should_attend: `<p>
    This live webinar is designed for supervisors, team leaders, business owners and managers, 
    human resource managers, presidents, and vice presidents.
</p>`,
        },
    },
    {
        title: "Accurately Classifying Your Products for Sales Tax",
        slug: "accurately-classifying-your-products-for-sales-tax",
        description:
            "Adopt the best practices that will make diving into your inbox less painful and far less time consuming.",
        date: "Jul 8",
        time: "1:00 - 2:05 pm EST",
        type: "Live Webinar",
        otherType: "OnDemand",
        credit: ["NASBA"],
        topics: ["Accounting/Tax"],
        details: `Everyone wants to catapult their career... (full description here)`,
        overview: {
            desc: `<p>Enhance your employees’ performance by communicating your expectations and your strategy to get there.
Communication is key to achieving performance goals. But not all methods of communicating performance expectations and goals are effective.
If goals are not clearly communicated and agreed upon, workers will not achieve them, and the organization will not achieve its goals.
This topic will help the persons responsible for communicating performance expectations and goals understand how to work with people to clearly communicate those goals.
This information will also help managers understand how to bring their efforts at communicating performance expectations and goals in line with organizational best practices.
</p>`,
            learning_objective: `
<ul>
    <li>You will be able to discuss the what and why of communicating performance expectations and goals.</li>
    <li>You will be able to describe how communication strategy is tied to organizational strategy.</li>
    <li>You will be able to review how performance expectations and goals are developed.</li>
    <li>You will be able to explain how to conduct performance expectation and goal discussions.</li>
</ul>`,
            faculty: ["686d0631b138441e547bab44"],
        },
        agenda: `
<p><strong>The What and Why of Communicating Performance Expectations and Goals</strong></p>
<ul style="font-size:14px; list-style-type: square; padding-left: 20px; margin-bottom:20px;">
    <li>What Is Communication Strategy? How Is the Strategy Developed and Implemented for Performance Expectations and Goals?</li>
    <li>Why Is Communication Strategy Important in Best Practice for Communicating Performance Expectations?</li>
    <li>How Is Communication Strategy Tied to Organizational Strategy?</li>
</ul>
<p><strong>How Are Performance Expectations and Goals Developed?</strong></p>
<ul style="font-size:14px; list-style-type: square; padding-left: 20px; margin-bottom:20px;">
    <li>Defining Key Performance Indicators</li>
    <li>Developing Key Performance Indicators Tied to the Balanced Scorecard</li>
    <li>Communicating Key Performance Indicators as Performance Expectations</li>
    <li>Using Alternatives to Key Performance Indicators</li>
</ul>
<p><strong>Conducting Performance Expectation and Goal Discussions</strong></p>
<ul style="font-size:14px; list-style-type: square; padding-left: 20px; margin-bottom:20px;">
    <li>Planning the Discussion</li>
    <li>Opening the Discussion</li>
    <li>Conducting the Discussion With Workers</li>
    <li>Closing the Discussion and Ensuring Support for Performance Expectations and Goals</li>
    <li>Using the Discussion in Combination With Other Communication Approaches</li>
</ul>
`,
        credits: {
            desc: `
<div style="margin-top: 1rem;">
    <h3 style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="border: 1px solid #000; width: 12px; height: 12px; display: inline-block;"></span>
        Live Webinar Registration
    </h3>

    <ul style="list-style-type: square; padding-left: 20px; margin-top: 1rem;font-size:14px;">
        <li>
            <strong>ASA 1.0</strong>
            <p>
                This program may qualify for 1.0 continuing education hour(s) towards maintaining your ASA credential. 
                Please contact ASA for more information at 
                <a href="mailto:certification@americanstaffing.net">certification@americanstaffing.net</a>. 
                Please retain proof of attendance in the event your CE record is audited.
            </p>
        </li>

        <li>
            <div style="display: flex; gap: 1rem; align-items: flex-start;">
                <div>
                    <strong>HR Certification Institute 1.0</strong>
                    <p>
                    This program has been pre-approved for 1.0 (General) recertification credit hours toward 
                    aPHR®, aPHRi(TM), PHR®, PHRca®, SPHR®, GPHR®, PHRi(TM), and SPHRi(TM) recertification through 
                    HR Certification Institute® (HRCI®). For more information about certification or recertification, 
                    please visit the HR Certification Institute website at 
                    <a href="https://www.hrci.org" target="_blank">www.hrci.org</a>.
                    </p>
                </div>
            <img src="https://image.lorman.com/images/credit/tr:w-85,h-85/HRCI-approved-provider.png?v=20250629" alt="HRCI Logo" style="height: 50px;" />
            </div>
            </li>

        <li>
            <div style="display: flex; gap: 1rem; align-items: flex-start;">
                <div>
                <strong>SHRM 1.0</strong>
                <p>
                    Lorman Education Services is recognized by SHRM to offer Professional Development Credits (PDCs) 
                    for the SHRM-CPSM or SHRM-SCPSM. This program is valid for 1.0 PDC(s) for the SHRM-CP or SHRM-SCP.
                </p>
            </div>
            <img src="https://image.lorman.com/images/credit/tr:w-85,h-85/shrm-recertification-provider.png?v=2025" alt="SHRM Logo" style="height: 50px;" />
        </div>
            </li>
    </ul>
    <p style="margin-top: 1rem;">
        <em>
            This program does NOT qualify, nor meet the National Standard for NASBA accreditation.
        </em>
    </p>
</div>

<div style="margin-top: 2rem;">
    <h3 style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="border: 1px solid #000; width: 12px; height: 12px; display: inline-block;"></span>
        OnDemand Course
    </h3>

    <p style="margin-top: 0.5rem;">
        This course was last revised on November 20, 2020.
    </p>

    <p>
        Call 1-866-352-9540 for further credit information.
    </p>

    <ul style="list-style-type: square; padding-left: 20px; margin-top: 1rem;">
        <li>
            <strong>ASA 1.5</strong>
            <p>
                This program may qualify for 1.5 continuing education hour(s) towards maintaining your ASA credential. 
                Please contact ASA for more information at 
                <a href="mailto:certification@americanstaffing.net">certification@americanstaffing.net</a>. 
                Please retain proof of attendance in the event your CE record is audited.
            </p>
        </li>
    </ul>
     <p style="margin-top: 1rem;">
        <em>
            This program does NOT qualify, nor meet the National Standard for NASBA accreditation.
        </em>
    </p>
</div>`,
            who_should_attend: `<p>
    This live webinar is designed for supervisors, team leaders, business owners and managers, 
    human resource managers, presidents, and vice presidents.
</p>`,
        },
    },
    {
        title: "Cross Cultural Collaboration for Effective Teams",
        slug: "cross-cultural-collaboration-for-effective-teams",
        description:
            "Adopt the best practices that will make diving into your inbox less painful and far less time consuming.",
        date: "Jul 8 2025",
        time: "1:00 - 2:05 pm EST",
        type: "Live Webinar",
        otherType: "OnDemand",
        credit: ["ASA", "SHRM"],
        topics: ["Leadership Development"],
        overview: {
            desc: `<p>Enhance your employees’ performance by communicating your expectations and your strategy to get there.
Communication is key to achieving performance goals. But not all methods of communicating performance expectations and goals are effective.
If goals are not clearly communicated and agreed upon, workers will not achieve them, and the organization will not achieve its goals.
This topic will help the persons responsible for communicating performance expectations and goals understand how to work with people to clearly communicate those goals.
This information will also help managers understand how to bring their efforts at communicating performance expectations and goals in line with organizational best practices.
</p>`,
            learning_objective: `
<ul>
    <li>You will be able to discuss the what and why of communicating performance expectations and goals.</li>
    <li>You will be able to describe how communication strategy is tied to organizational strategy.</li>
    <li>You will be able to review how performance expectations and goals are developed.</li>
    <li>You will be able to explain how to conduct performance expectation and goal discussions.</li>
</ul>`,
            faculty: ["686d0670b138441e547bab4a"],
        },
        agenda: `
<p><strong>The What and Why of Communicating Performance Expectations and Goals</strong></p>
<ul style="font-size:14px; list-style-type: square; padding-left: 20px; margin-bottom:20px;">
    <li>What Is Communication Strategy? How Is the Strategy Developed and Implemented for Performance Expectations and Goals?</li>
    <li>Why Is Communication Strategy Important in Best Practice for Communicating Performance Expectations?</li>
    <li>How Is Communication Strategy Tied to Organizational Strategy?</li>
</ul>
<p><strong>How Are Performance Expectations and Goals Developed?</strong></p>
<ul style="font-size:14px; list-style-type: square; padding-left: 20px; margin-bottom:20px;">
    <li>Defining Key Performance Indicators</li>
    <li>Developing Key Performance Indicators Tied to the Balanced Scorecard</li>
    <li>Communicating Key Performance Indicators as Performance Expectations</li>
    <li>Using Alternatives to Key Performance Indicators</li>
</ul>
<p><strong>Conducting Performance Expectation and Goal Discussions</strong></p>
<ul style="font-size:14px; list-style-type: square; padding-left: 20px; margin-bottom:20px;">
    <li>Planning the Discussion</li>
    <li>Opening the Discussion</li>
    <li>Conducting the Discussion With Workers</li>
    <li>Closing the Discussion and Ensuring Support for Performance Expectations and Goals</li>
    <li>Using the Discussion in Combination With Other Communication Approaches</li>
</ul>
`,
        credits: {
            desc: `
<div style="margin-top: 1rem;">
    <h3 style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="border: 1px solid #000; width: 12px; height: 12px; display: inline-block;"></span>
        Live Webinar Registration
    </h3>

    <ul style="list-style-type: square; padding-left: 20px; margin-top: 1rem;font-size:14px;">
        <li>
            <strong>ASA 1.0</strong>
            <p>
                This program may qualify for 1.0 continuing education hour(s) towards maintaining your ASA credential. 
                Please contact ASA for more information at 
                <a href="mailto:certification@americanstaffing.net">certification@americanstaffing.net</a>. 
                Please retain proof of attendance in the event your CE record is audited.
            </p>
        </li>

        <li>
            <div style="display: flex; gap: 1rem; align-items: flex-start;">
                <div>
                    <strong>HR Certification Institute 1.0</strong>
                    <p>
                    This program has been pre-approved for 1.0 (General) recertification credit hours toward 
                    aPHR®, aPHRi(TM), PHR®, PHRca®, SPHR®, GPHR®, PHRi(TM), and SPHRi(TM) recertification through 
                    HR Certification Institute® (HRCI®). For more information about certification or recertification, 
                    please visit the HR Certification Institute website at 
                    <a href="https://www.hrci.org" target="_blank">www.hrci.org</a>.
                    </p>
                </div>
            <img src="https://image.lorman.com/images/credit/tr:w-85,h-85/HRCI-approved-provider.png?v=20250629" alt="HRCI Logo" style="height: 50px;" />
            </div>
            </li>

        <li>
            <div style="display: flex; gap: 1rem; align-items: flex-start;">
                <div>
                <strong>SHRM 1.0</strong>
                <p>
                    Lorman Education Services is recognized by SHRM to offer Professional Development Credits (PDCs) 
                    for the SHRM-CPSM or SHRM-SCPSM. This program is valid for 1.0 PDC(s) for the SHRM-CP or SHRM-SCP.
                </p>
            </div>
            <img src="https://image.lorman.com/images/credit/tr:w-85,h-85/shrm-recertification-provider.png?v=2025" alt="SHRM Logo" style="height: 50px;" />
        </div>
            </li>
    </ul>
    <p style="margin-top: 1rem;">
        <em>
            This program does NOT qualify, nor meet the National Standard for NASBA accreditation.
        </em>
    </p>
</div>

<div style="margin-top: 2rem;">
    <h3 style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="border: 1px solid #000; width: 12px; height: 12px; display: inline-block;"></span>
        OnDemand Course
    </h3>

    <p style="margin-top: 0.5rem;">
        This course was last revised on November 20, 2020.
    </p>

    <p>
        Call 1-866-352-9540 for further credit information.
    </p>

    <ul style="list-style-type: square; padding-left: 20px; margin-top: 1rem;">
        <li>
            <strong>ASA 1.5</strong>
            <p>
                This program may qualify for 1.5 continuing education hour(s) towards maintaining your ASA credential. 
                Please contact ASA for more information at 
                <a href="mailto:certification@americanstaffing.net">certification@americanstaffing.net</a>. 
                Please retain proof of attendance in the event your CE record is audited.
            </p>
        </li>
    </ul>
     <p style="margin-top: 1rem;">
        <em>
            This program does NOT qualify, nor meet the National Standard for NASBA accreditation.
        </em>
    </p>
</div>`,
            who_should_attend: `<p>
    This live webinar is designed for supervisors, team leaders, business owners and managers, 
    human resource managers, presidents, and vice presidents.
</p>`,
        },
    },
];

export const subscriptionPlans = [
    {
        title: "Single Courses",
        price: "",
        desc: "Compliance & Upskilling courses available in on-demand and live formats.",
        cta: "Explore Courses",
        slug: "training",
        features: [
            "Compliance & Upskilling",
            "OnDemand & Live Courses",
            "Learning Paths",
            "Continuing Education Units",
            "Email, Chat & Phone Support",
        ],
    },
    {
        title: "Individual Pass",
        price: "$699 / year",
        desc: "Comprehensive professional business training through the year for individuals.",
        cta: "Buy Now",
        handler: () => addToCartHandler(),
        features: [
            "Unlimited Course Subscription",
            "Unlimited Learning Paths",
            "Whitepapers & Reports",
            "Personalized Course Guidance",
            "State-Specific Credit Tracker",
            "Course Wishlists",
        ],
    },
    {
        title: "Teams & Enterprise",
        price: "Custom Quote",
        desc: "Customize a plan tailored around the needs of your team & organization.",
        cta: "Schedule a Demo",
        slug: "demo",
        features: [
            "Course Assignment",
            "Team Reporting & Tracking",
            "Co-Branded Team Dashboard",
            "Dedicated Account Manager",
            "Customer Success Strategy Sessions",
            "Discounted Custom Training",
        ],
    },
    {
        title: "Custom Training",
        price: "Custom Quote",
        desc: "Lorman can help you fulfill your team's specific training needs.",
        cta: "Contact Sales",
        slug: "demo",
        features: [
            "Custom Course Creation",
            "Virtual Training",
            "In-Person Training",
            "Learning Week Development",
            "Team Upskilling & Compliance Annual Planning",
        ],
    },
];

export const planComparisonData = [
    { type: "heading", title: "Compliance Training & Upskilling" },
    {
        feature: "OnDemand Courses",
        single: true,
        individual: "Unlimited",
        team: "Unlimited",
    },
    {
        feature: "Live Webinars",
        single: true,
        individual: "Unlimited",
        team: "Unlimited",
    },
    {
        feature: "Learning Paths",
        single: true,
        individual: "Unlimited",
        team: "Unlimited",
    },
    {
        feature: "Whitepapers",
        single: false,
        individual: "Unlimited",
        team: "Unlimited",
    },
    {
        feature: "Reports",
        single: false,
        individual: "Unlimited",
        team: "Unlimited",
    },
    {
        feature: "Slide Decks",
        single: false,
        individual: "Unlimited",
        team: "Unlimited",
    },
    {
        feature: "Videos",
        single: false,
        individual: "Unlimited",
        team: "Unlimited",
    },
    {
        feature: "Written Materials",
        single: true,
        individual: true,
        team: true,
    },
    { feature: "Course Exams", single: true, individual: true, team: true },
    {
        feature: "Course Chaptering",
        single: true,
        individual: true,
        team: true,
    },
    {
        feature: "Skills Reinforcement",
        single: true,
        individual: true,
        team: true,
    },
    {
        feature: "Expert Faculty",
        single: true,
        individual: true,
        team: true,
    },

    { type: "heading", title: "Continuing Education Credit" },
    {
        feature: "Hundreds of CE Credits (CLE, NASBA, HRCI...)",
        single: true,
        individual: true,
        team: true,
    },
    {
        feature: "Certificate of Completion",
        single: true,
        individual: true,
        team: true,
    },

    { type: "heading", title: "Learning Platform" },
    {
        feature: "Learner Dashboard",
        single: true,
        individual: true,
        team: true,
    },
    { feature: "Wishlists", single: true, individual: true, team: true },
    {
        feature: "State-Specific Credit Tracker",
        single: false,
        individual: true,
        team: true,
    },
    {
        feature: "Custom Branding",
        single: false,
        individual: false,
        team: true,
    },
    {
        feature: "Mobile-Friendly",
        single: true,
        individual: true,
        team: true,
    },
    {
        feature: "Exportable Learning Packages (SCORM 1.2)",
        single: false,
        individual: false,
        team: "Add-On",
    },

    { type: "heading", title: "Team Management" },
    {
        feature: "Manage Multiple Teams",
        single: false,
        individual: false,
        team: true,
    },
    {
        feature: "User & Group Permissions",
        single: false,
        individual: false,
        team: true,
    },
    {
        feature: "Team Reports & Dashboards",
        single: false,
        individual: false,
        team: true,
    },
    {
        feature: "Course Assignment Tools",
        single: false,
        individual: false,
        team: true,
    },
    {
        feature: "Course Deadlines",
        single: false,
        individual: false,
        team: true,
    },
    {
        feature: "Notifications & Reminders",
        single: false,
        individual: false,
        team: true,
    },
    {
        feature: "Custom Exam Configurations",
        single: false,
        individual: false,
        team: true,
    },
    {
        feature: "Single Sign-On (SSO)",
        single: false,
        individual: false,
        team: "Add-On",
    },

    { type: "heading", title: "Professional Services & Support" },
    {
        feature: "Email, Chat, & Phone Support",
        single: true,
        individual: true,
        team: true,
    },
    {
        feature: "Personalized Course Recommendations",
        single: true,
        individual: true,
        team: true,
    },
    {
        feature: "Dedicated Account Manager",
        single: false,
        individual: false,
        team: true,
    },
    {
        feature: "Dedicated Customer Success Strategy Sessions",
        single: false,
        individual: false,
        team: true,
    },
    {
        feature: "Learning Week Development",
        single: false,
        individual: false,
        team: true,
    },
    {
        feature: "Team Upskilling & Compliance Annual Planning",
        single: false,
        individual: false,
        team: true,
    },

    { type: "heading", title: "Custom Training" },
    {
        feature: "Custom Learning Paths",
        single: false,
        individual: false,
        team: "Add-On",
    },
    {
        feature: "Custom Course Creation",
        single: false,
        individual: false,
        team: "Add-On",
    },
    {
        feature: "Virtual Training",
        single: false,
        individual: false,
        team: "Add-On",
    },
    {
        feature: "In-Person Training",
        single: false,
        individual: false,
        team: "Add-On",
    },
];

export const learningPathsData = [
    {
        _id: 101,
        title: "Human Resource Fundamentals",
        slug: "human-resource-fundamentals",
        image: heroBg,
        label: "Human Resource Fundamentals Provide Numerous Benefits That are Essential for Fostering a Productive and Harmonious Workplace.",
        desc: `In today’s rapidly evolving global workplace, HR professionals are faced with the unique challenge of navigating the complexities of globalization while maintaining strong ethical standards. As businesses expand across borders, HR professionals must foster cultural understanding and respect, ensuring fair treatment for all employees regardless of their background. Empathy skills play a vital role in this process, enabling HR professionals to connect with individuals on a deeper level, understand their concerns, and create a supportive, inclusive work environment. At the same time, HR professionals must balance their responsibilities with assertiveness, embracing their role as the "boss" of HR to make informed, strategic decisions that benefit both the organization and its employees. To protect themselves from toxic emotions in high-stress situations, HR professionals need to develop emotional resilience, learning techniques to manage stress and remain objective. The rise of AI and tools like ChatGPT also offers new opportunities for HR, automating routine tasks, improving efficiency, and enhancing decision-making, while allowing HR professionals to focus more on meaningful, human-centered aspects of their roles.`,
    },
    {
        _id: 102,
        title: "AI for Business",
        slug: "ai-for-business",
        image: heroBg,
        label: "Learn how AI is revolutionizing businesses by enhancing efficiency, driving innovation, and improving decision-making.",
        desc: "With AI-powered automation, companies can streamline operations, reducing the time and resources spent on repetitive tasks, which allows employees to focus on more strategic work. Data-driven insights provided by AI enable businesses to make more informed, precise decisions, identifying trends, customer preferences, and potential opportunities. By incorporating AI, businesses can stay ahead of competitors in an increasingly digital and fast-paced market.",
    },
    {
        _id: 103,
        title: "5 Pillars of Leadership",
        slug: "5-pillars-of-leadership",
        image: heroBg,
        label: "Mastering the five foundational pillars of leadership equips leaders with the tools to build strong, effective teams and drive organizational success.",
        desc: "A solid understanding of leadership foundations creates clarity around roles, expectations, and goals, laying the groundwork for confident decision-making. Emphasizing compliance ensures leaders uphold ethical standards and follow regulations, reducing risk and promoting accountability. Effective communication enhances collaboration, alignment, and team morale. Strong interviewing and hiring practices lead to better talent acquisition, fostering long-term growth and team cohesion. Finally, well-developed interpersonal skills improve relationship-building, conflict resolution, and trust—making leaders more approachable and influential. Together, these pillars form a comprehensive leadership toolkit essential for navigating today’s complex workplace.",
    },
    {
        _id: 104,
        title: "Financial Tools",
        slug: "financial-tools",
        image: heroBg,
        label: "The use of financial management tools is essential for helping businesses make informed, strategic decisions.",
        desc: "These tools provide real-time visibility into budgets, expenses, cash flow, and overall financial health, allowing organizations to plan accurately and operate efficiently. With features like automated reporting, forecasting, and expense tracking, financial management software reduces human error, saves time, and ensures compliance with regulatory requirements. Whether for small businesses or large enterprises, leveraging the right financial tools empowers leaders to allocate resources wisely, identify growth opportunities, and maintain financial stability in a constantly evolving market.",
    },
];
