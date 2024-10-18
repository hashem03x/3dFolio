import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    upwork,
    wastend,
    chain,
    tripguide,
    kasper,
    worldwise
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "MERN Stack Developer",
        icon: mobile,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "FreeLance",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2022 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Travel Agency",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Feb 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Developing and maintaining User-Scripts using Tampermonkey And JS | JQuery",
            "Developing Automated Python Scripts using Selenium And WebDriver",
        ],
    },
    {
        title: "Web Developer",
        company_name: "UpWork",
        icon: upwork,
        iconBg: "#383E56",
        date: "Jan 2022 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "FreeLance",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Wastend",
        description:
            "Web-based platform that allows users to Create, Login, and manage Their products from various providers, providing a convenient and efficient solution for E-Store needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "APIs",
                color: "green-text-gradient",
            },
            {
                name: "Node.js",
                color: "pink-text-gradient",
            },

        ],
        image: wastend,
        source_code_link: "https://github.com/hashem03x/wastend",
        live_demo: "https://hashem03x.github.io/wastend/"
    },
    {
        name: "Chain",
        description:
            "Web application For IT & Mutlimedia Company ",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "JS",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
            {
                name: "animation.js",
                color: "pink-text-gradient",
            },
        ],
        image: chain,
        source_code_link: "https://github.com/hashem03x/chain",
        live_demo: "https://hashem03x.github.io/chain/"
    },
    {
        name: "FullStack E-Commerce ",
        description:
            "A comprehensive E-Commerce platform that allows users to buy Products, Create an account & Sign-in ",
        tags: [
            {
                name: "React.js",
                color: "blue-text-gradient",
            },
            {
                name: "Mongodb",
                color: "green-text-gradient",
            },
            {
                name: "Express.js",
                color: "pink-text-gradient",
            },
            {
                name: "Node.js",
                color: "pink-text-gradient",
            },
            {
                name: "JWT",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/hashem03x/Mern_E-commerce",
        live_demo: "https://github.com/hashem03x/Mern_E-commerce"
    },
    {
        name: "Kasper Website",
        description:
            "A Website Template Using html , Css",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "JS",
                color: "pink-text-gradient",
            },
        ],
        image: kasper,
        source_code_link: "https://github.com/hashem03x/Kasper_Template",
        live_demo: "https://hashem03x.github.io/Kasper_Template/"
    },
    {
        name: "WorldWise",
        description:
            "A Web Application build to Create A City , Explore Earth Maps & Add notes to visited Cities",
        tags: [
            {
                name: "React.js",
                color: "blue-text-gradient",
            },
            {
                name: "FakeAPI",
                color: "green-text-gradient",
            },
            {
                name: "Maps.js",
                color: "pink-text-gradient",
            },
        ],
        image: worldwise,
        source_code_link: "https://github.com/hashem03x/worldwise",
        live_demo: "https://github.com/hashem03x/worldwise"
    },
];

export { services, technologies, experiences, testimonials, projects };