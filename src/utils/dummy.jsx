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
        date: "Jun 30",
        type: "Live Webinar",
        credits: ["ASA", "SHRM"],
        topics: ["Workplace Compliance"],
        description:
            "Adopt the best practices that will make diving into your inbox less painful and far less time consuming.",
        details: `Everyone wants to catapult their career... (full description here)`,
        objectives: [
            "You will be able to review innovative ways to use the calendar.",
            "You will be able to discuss how to use the quick access tool bar.",
            "You will be able to identify how to click and drag emails between folders.",
            "You will be able to apply AI tips for handling email.",
        ],
        faculty: {
            name: "Karla Brandau, CEO",
            image: "https://your-real-image-link.com/faculty.jpg",
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
        _id: 2,
        title: "Microsoft® Outlook Tips and Tricks",
        slug: "microsoft-outlook-tips-and-tricks",
        image: webinarDummy,
        date: "June 30 2025",
        type: "Live Webinar",
        credits: ["NASBA", "AIPB"],
        topics: ["General Business Skills"],
        description:
            "Adopt the best practices that will make diving into your inbox less painful and far less time consuming.",
        details: `Everyone wants to catapult their career... (full description here)`,
        objectives: [
            "You will be able to review innovative ways to use the calendar.",
            "You will be able to discuss how to use the quick access tool bar.",
            "You will be able to identify how to click and drag emails between folders.",
            "You will be able to apply AI tips for handling email.",
        ],
        faculty: {
            name: "Karla Brandau, CEO",
            image: "https://your-real-image-link.com/faculty.jpg",
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
        date: "Jul 8",
        type: "Live Webinar",
        credits: ["NASBA"],
        topics: ["Accounting/Tax"],
        description:
            "Adopt the best practices that will make diving into your inbox less painful and far less time consuming.",
        details: `Everyone wants to catapult their career... (full description here)`,
        objectives: [
            "You will be able to review innovative ways to use the calendar.",
            "You will be able to discuss how to use the quick access tool bar.",
            "You will be able to identify how to click and drag emails between folders.",
            "You will be able to apply AI tips for handling email.",
        ],
        faculty: {
            name: "Karla Brandau, CEO",
            image: "https://your-real-image-link.com/faculty.jpg",
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
        date: "Jul 8",
        type: "Live Webinar",
        credits: ["ASA", "SHRM"],
        topics: ["Leadership Development"],
        description:
            "Adopt the best practices that will make diving into your inbox less painful and far less time consuming.",
        details: `Everyone wants to catapult their career... (full description here)`,
        objectives: [
            "You will be able to review innovative ways to use the calendar.",
            "You will be able to discuss how to use the quick access tool bar.",
            "You will be able to identify how to click and drag emails between folders.",
            "You will be able to apply AI tips for handling email.",
        ],
        faculty: {
            name: "Karla Brandau, CEO",
            image: "https://your-real-image-link.com/faculty.jpg",
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
