export interface Project {
    category: string;
    title: string;
    description: string;
    image: string;
    href: string;
}

export const projects: Project[] = [
    {
        category: "FIGMA",
        title: "Naturla",
        description: "A clean and elegant cosmetic landing page design focused on showcasing natural skincare products with a premium and calming visual experience.",
        href: "#",
        image: "/naturla.png",
    },
    {
        category: "FIGMA",
        title: "FitBody",
        description: "A modern and engaging fitness app UI design focused on personalized workouts, progress tracking, nutrition guidance, and community motivation in a dark-mode experience.",
        href: "#",
        image: "/fit-body.png",
    },
    {
        category: "ANGULAR",
        title: "IronTrac",
        description: "A comprehensive asset management system accessible across web, mobile, and desktop platforms, built with Angular for a robust and responsive frontend experience.",
        href: "#",
        image: "/iron-trac.png",
    },
    {
        category: "ANGULAR",
        title: "My Invitation Cart",
        description: "Frontend design and development for a digital invitation platform, focused on creating a seamless and fully responsive user interface.",
        href: "#",
        image: "/MIC.png",
    },
    {
        category: "FIGMA",
        title: "La VALLERI Hotel",
        description: "A modern and bold hotel landing page design that professionally showcases services, portfolio, and brand identity with a strong visual impact.",
        href: "#",
        image: "/la-hotel.png",
    },
    {
        category: "REACT JS",
        title: "Boost Money",
        description: "A mobile and web application for financial management, developed using React JS with a focus on responsive layouts and interactive user experiences.",
        href: "#",
        image: "/boost-money.png",
    },
    {
        category: "ANGULAR",
        title: "Customers Bank",
        description: "Web and responsive UI development for a banking customer platform using Angular and SCSS, ensuring usability and consistency across devices.",
        href: "#",
        image: "/customers-bank.png",
    },
    {
        category: "REACT NATIVE",
        title: "Vizybility",
        description: "Mobile application design and development using React Native, focused on delivering a smooth, native-like experience on mobile devices.",
        href: "#",
        image: "/vizybility.png",
    },
    {
        category: "REACT JS • ANGULAR • IONIC",
        title: "Care24",
        description: "A multi-platform healthcare application connecting patients with caregivers, built using React JS, Angular, and Ionic for cross-platform compatibility.",
        href: "#",
        image: "/care-24.png",
    },
    {
        category: "ANGULAR",
        title: "Mtech",
        description: "Asset management system frontend designed and developed using Angular with LESS for structured and scalable styling.",
        href: "#",
        image: "/mtech.png",
    },
    {
        category: "FIGMA",
        title: "Laxmi Diamond",
        description: "High-fidelity luxury landing page design created in Figma, focusing on premium aesthetics, brand value, and user conversion.",
        href: "#",
        image: "/laxmi-diamond.png",
    },
    {
        category: "REACT JS • FIGMA",
        title: "Mabar",
        description: "Admin panel UI design and frontend implementation using React JS, including wireframing and interactive prototyping in Figma.",
        href: "#",
        image: "/mabar.png",
    },
    {
        category: "ANGULAR",
        title: "Kaydapothi",
        description: "Frontend development for a mobile application using Angular, involving layout design, component structuring, and prototyping.",
        href: "#",
        image: "/kaydapothi.png",
    },
    {
        category: "FIGMA",
        title: "Beau & Bella",
        description: "A soft and elegant skincare app UI design focused on personalized skin profiles, routines, and product discovery for a calm self-care experience.",
        href: "#",
        image: "/skin-care.png",
    },
    {
        category: "FIGMA",
        title: "Paywell",
        description: "HR management application UI design created in Figma, including responsive web layouts and interactive prototypes.",
        href: "#",
        image: "/paywell.png",
    },
    {
        category: "REACT JS",
        title: "Insight Ai",
        description: "An AI-driven platform frontend developed using React JS and Tailwind CSS, featuring a modern, clean, and scalable interface design.",
        href: "#",
        image: "/insight-ai.png",
    },
    {
        category: "FIGMA",
        title: "Operation Pool",
        description: "Responsive mobile application design created in Figma for operations and workflow management.",
        href: "#",
        image: "/operation-pool.png",
    },
    {
        category: "FIGMA",
        title: "Aworks",
        description: "End-to-end mobile application design in Figma, including wireframing, typography selection, and visual design systems.",
        href: "#",
        image: "/aworks.png",
    },
    {
        category: "FIGMA",
        title: "GPS Waste",
        description: "UI design for a waste management application with a focus on usability, clarity, and intuitive navigation.",
        href: "#",
        image: "/gps-waste.png",
    },
    {
        category: "FIGMA",
        title: "Wecare Medical",
        description: "Medical dashboard and mobile view UI design created in Figma, focused on responsive layouts and user-centric workflows.",
        href: "#",
        image: "/wecare-medical.png",
    },
    {
        category: "REACT JS • FIGMA",
        title: "Fixo Motor",
        description: "A clean and modern car service landing page design focused on helping users find nearby service centers, book services easily, and connect with trusted providers.",
        href: "#",
        image: "/fixo-moter.png",
    },
    {
        category: "FIGMA",
        title: "Fitmaker",
        description: "A bold and high-impact fitness landing page design aimed at motivating users through structured programs, coaching, and membership plans.",
        href: "#",
        image: "/fitmaker.png",
    },
];

export interface Experience {
    id: string;
    role: string;
    company: string;
    location: string;
    duration: string;
    periodYear: string;
    current: boolean;
    responsibilities: string[];
    technologies: string[];
}

export const experiences: Experience[] = [
    {
        id: "codimize",
        role: "UI/UX Designer — Freelance",
        company: "Codimize",
        location: "Remote",
        duration: "Feb 2026 — Present",
        periodYear: "2026",
        current: true,
        responsibilities: [
            "Design responsive web and mobile interfaces using Figma and modern UI principles.",
            "Create wireframes, user flows, and high-fidelity prototypes for client projects.",
            "Collaborate with developers to ensure pixel-perfect and responsive UI implementation.",
            "Improve usability and user experience through design systems and component libraries.",
        ],
        technologies: [
            "Figma",
            "UI/UX Design",
            "Wireframing",
            "Prototyping",
            "Design Systems",
            "Responsive Design",
        ],
    },
    {
        id: "prosol-techline",
        role: "UI Designer & Frontend Designer",
        company: "Prosol Techline",
        location: "Surat, Gujarat, India",
        duration: "Aug 2022 — Jan 2026",
        periodYear: "2022",
        current: false,
        responsibilities: [
            "Designed and developed responsive web applications using React, Angular, and Next.js.",
            "Reduced design-to-development handoff time by 30% using structured Figma components and Auto Layouts.",
            "Improved UI consistency across 15+ application modules through scalable Design Systems.",
            "Collaborated with cross-functional teams including developers, QA, and project managers in Agile workflows.",
            "Mentored junior developers and improved project delivery timelines using Jira and ClickUp.",
            "Optimized responsive layouts for desktop, tablet, and mobile devices.",
        ],
        technologies: [
            "Figma",
            "React.js",
            "Angular",
            "Next.js",
            "HTML",
            "CSS",
            "SCSS",
            "JavaScript",
            "Jira",
            "ClickUp",
        ],
    },
];

