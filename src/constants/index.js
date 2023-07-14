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
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ethereum,
  C,
  solidity,
  rust,
  discord,
  hoscryp
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
    title: "Blockchain Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Smart Contract Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "ethereum",
    icon: ethereum,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  {
    name: "rust",
    icon: rust,
  },
  {
    name: "C++",
    icon: C,
  },
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "VRaZ Academy",
    icon: starbucks,
    iconBg: "#ffffff",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Developing and maintaining web applications using HTML, CSS, Wordpress and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelancing",
    company_name: "Discord",
    icon: discord,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Mar 2023",
    points: [
      "Developed a ICO Website for a US based client for his tokens",
      "Utilized web development skills to create a secure and user-friendly ICO platform.",
      "Implemented key features such as token sale management and investor registration in an ICO website.",
      "everaged expertise in blockchain technologies to deliver an ICO website that met industry standards and regulatory requirement.",
    ],
  } 
];

const testimonials = [
  {
    testimonial:
      "Sometimes he is up all night working on his projects and learning new stuffs.",
    name: "Roshan Joshi",
    designation: "Dad",
    company: "Aditya Joshi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQji61pbOFg2LTRhPhgjGUeoU8XK_HcetsBcjebACxsbkc4jPjdHQKgBglIXJoExp3XaUk&usqp=CAU",
  }
];

const projects = [
  {
    name: "Certicryped",
    description:
      "Certicryped: Spearheading a Paradigm Shift in Trust and Authenticity through Innovative Blockchain-Powered Credentialing, Redefining Security and Empowering Global Networks.",
    tags: [
      
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "Polygon",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/CodeMongerrr/Certicryped",
  },
  {
    name: "Supply Chain",
    description:
      "SupplyChain: Revolutionizing Global Product Traceability and Supply Chain Management with Immutable Blockchain Technology for Enhanced Transparency, Efficiency, and Trust.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "ERC20",
        color: "green-text-gradient",
      },
      {
        name: "Truffle",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/CodeMongerrr/SupplyChain_Blockchain",
  },
  {
    name: "WeatherHub",
    description:
      "Welcome to WeatherHub: Your Ultimate Destination for Weather Enthusiasts! Explore the Dynamic World of Meteorology, Stay Informed with Accurate Forecasts, Dive into Location Insights, and Experience the Beauty of Nature with Captivating Visuals.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/CodeMongerrr/WeatherHub",
  },
  {
    name: "Hoscryped",
    description:
      "Hoscryp: Empowering Healthcare Providers and Patients through Decentralized and Immutable Patient Information Management on the Blockchain for Enhanced Security and Privacy.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "Smart-Contract",
        color: "green-text-gradient",
      },
      {
        name: "Truffle",
        color: "pink-text-gradient",
      },
    ],
    image: hoscryp,
    source_code_link: "https://github.com/CodeMongerrr/HealthCareDataManagement",
  },
];

export { services, technologies, experiences, testimonials, projects };
