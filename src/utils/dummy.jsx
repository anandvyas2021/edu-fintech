import webinarDummy from "../assets/webinarDummy.jpg";

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

export const enterpriseFeatures = [
    {
        subDesc: "LEARNING PLATFORM",
        title: "Assign and Track Employee Coursework",
        description:
            "Our intuitive Learning Platform helps you manage every aspect of your company’s training and continuing education initiatives. Assign courses and Learning Paths to individual employees or teams. Track continuing education credits, see overall course progress, and download certificates — all conveniently in your dashboard.",
        image: "https://source.unsplash.com/600x400/?training,corporate",
        cta: "Learning Platform",
    },
    {
        subDesc: "LEARNING PATHS",
        title: "Fill Knowledge Gaps",
        description:
            "We work with our members to determine goals and create customized Learning Solutions for their workforce. Managers can create teams or employee Learning Paths to help enhance core skills or address knowledge areas needed to meet company training and development goals.",
        image: "https://source.unsplash.com/600x400/?career,growth",
        cta: "Learning Paths",
    },
    {
        subDesc: "A TRUSTED PARTNER",
        title: "Request Custom Courses",
        description:
            "Have a course in mind for your employees that you don’t see on our site? Our in-house production team can create custom employee training solutions that fit your organization’s needs. We work with you to achieve your company’s training and development goals. Lorman is not just a content provider — we are a true training partner.",
        image: "https://source.unsplash.com/600x400/?education,custom",
        cta: "Request Courses",
    },
    {
        subDesc: "LMS INTEGRATION",
        title: "Integrate With Your LMS",
        description:
            "Integrate our huge library of content and training programs with your LMS. Simply download SCORM files for any course or resource in our library or opt for chosen learning management system integration. We’re here every step of the way to help make your corporate training initiatives as easy as possible.",
        image: "https://source.unsplash.com/600x400/?software,team",
        cta: "Learn More",
    },
    {
        subDesc: "CONCENTRATE EFFORTS",
        title: "Unify Company Training and Development",
        description:
            "Centralizing your company training is the most logical and cost-effective approach to employee learning and development. Oversee your company’s training programs and avoid the hidden costs of paying separate vendors for individual courses.",
        image: "https://source.unsplash.com/600x400/?planning,documents",
        cta: "Browse Courses",
        slug: "training",
    },
];

export const mockWebinars = [
    {
        _id: 1,
        title: "Best Practices for Communicating Performance Expectations",
        slug: "best-practices-for-communicating-performance-expectations",
        image: webinarDummy,
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
            faculty: [
                {
                    _id: 1,
                    name: "William J. Rothwell",
                    image: "https://your-real-image-link.com/faculty.jpg",
                },
            ],
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
        relatedTrainings: [
            {
                _id: 2,
                title: "Employee Code of Conduct Essentials",
                type: "OnDemand Course",
            },
            {
                _id: 3,
                title: "Punctuation Basics for Business Writing",
                type: "Live Webinar",
                date: "July 28, 2025",
            },
            {
                _id: 4,
                title: "Running Effective Board Meetings",
                type: "OnDemand Course",
            },
        ],
    },
    {
        _id: 2,
        title: "Microsoft® Outlook Tips and Tricks",
        slug: "microsoft-outlook-tips-and-tricks",
        image: webinarDummy,
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
            faculty: [
                {
                    _id: 1,
                    name: "William J. Rothwell",
                    image: "https://your-real-image-link.com/faculty.jpg",
                },
            ],
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
        relatedTrainings: [
            {
                _id: 2,
                title: "Employee Code of Conduct Essentials",
                type: "OnDemand Course",
            },
            {
                _id: 3,
                title: "Punctuation Basics for Business Writing",
                type: "Live Webinar",
                date: "July 28, 2025",
            },
            {
                _id: 4,
                title: "Running Effective Board Meetings",
                type: "OnDemand Course",
            },
        ],
    },
    {
        _id: 3,
        title: "Accurately Classifying Your Products for Sales Tax",
        slug: "accurately-classifying-your-products-for-sales-tax",
        image: webinarDummy,
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
            faculty: [
                {
                    _id: 1,
                    name: "William J. Rothwell",
                    image: "https://your-real-image-link.com/faculty.jpg",
                },
            ],
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
        relatedTrainings: [
            {
                _id: 2,
                title: "Employee Code of Conduct Essentials",
                type: "OnDemand Course",
            },
            {
                _id: 3,
                title: "Punctuation Basics for Business Writing",
                type: "Live Webinar",
                date: "July 28, 2025",
            },
            {
                _id: 4,
                title: "Running Effective Board Meetings",
                type: "OnDemand Course",
            },
        ],
    },
    {
        _id: 4,
        title: "Cross Cultural Collaboration for Effective Teams",
        slug: "cross-cultural-collaboration-for-effective-teams",
        image: webinarDummy,
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
            faculty: [
                {
                    _id: 1,
                    name: "William J. Rothwell",
                    image: "https://your-real-image-link.com/faculty.jpg",
                },
            ],
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
        relatedTrainings: [
            {
                _id: 2,
                title: "Employee Code of Conduct Essentials",
                type: "OnDemand Course",
            },
            {
                _id: 3,
                title: "Punctuation Basics for Business Writing",
                type: "Live Webinar",
                date: "July 28, 2025",
            },
            {
                _id: 4,
                title: "Running Effective Board Meetings",
                type: "OnDemand Course",
            },
        ],
    },
    // Add more mock data as needed...
];

export const educators = [
    {
        _id: 1,
        name: "William J. Rothwell",
        qualifications: "Ph.D., SPHR, SHRM-SCP, RODC, CPTD Fellow",
        image: "",
        company: "Rothwell & Associates, Inc.",
        about: `
    <div>
        <p><strong>Ph.D., SPHR, SHRM-SCP, RODC, CPTD Fellow</strong></p>
        <p><strong>Rothwell & Associates, Inc.</strong></p>
        <ul>
            <li>President/Rothwell & Associates, Inc. and Rothwell & Associates, LLC</li>
            <li>Distinguished Professor at The Penn State University</li>
            <li>50 years of HR experience in government, multinational business, and owner of 5 small businesses</li>
            <li>Author of "Motivated to Stay" — 100 research-based ways to reduce employee turnover</li>
            <li>Author of 170 books on HR and public speaker of 1,600 professional talks and seminars in 15 nations</li>
            <li>Member of the Society for Human Resource Management (SHRM) and other HR organizations</li>
            <li>Ph.D. / University of Illinois at Urbana-Champaign</li>
            <li>MBA / University of Illinois at Springfield</li>
            <li>Contact: <a href="mailto:Wjr9@psu.edu">Wjr9@psu.edu</a> / 814-441-4087</li>
        </ul>
    </div>
`,
    },
];
