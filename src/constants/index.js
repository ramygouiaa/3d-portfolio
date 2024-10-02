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
  jobit,
  tripguide,
  postgreSQL,
  ethereum,
  capgemini,
  hrw,
  crowdfunding,
  inventory,
  invoice,
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
    title: "Blockchain Developer",
    icon: creator,
  },
  {
    title: "Angular Developer",
    icon: mobile,
  },
  {
    title: "Java Developer",
    icon: backend,
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
    name: "PostgreSQL",
    icon: postgreSQL,
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
    name: "Ethereum",
    icon: ethereum,
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
    title: "Software Developer",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#383E56",
    date: "Aug 2021 - Aug 2023",
    points: [
      "Developing and maintaining web applications using Polymer, Angular on the front-end alongside Java(JakartaEE) on the back-end and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Troubleshooting and resolving technical issues in a timely and efficient manner.",
      "participating actively in scrum meetings",
    ],
  },
  {
    title: "Research Associate Blockchain Developer",
    company_name: "University of Applied Sciences Ruhr West",
    icon: hrw,
    iconBg: "#E6DEDD",
    date: "June 2018 - Jul 2021",
    points: [
      "Developed decentralized systems and applications leveraging blockchain technologies.",
      "Simulated and evaluated decentralized applications (DApps) and smart contracts",
      "Contributed to the implementation of decentralized Oracle systems in collaboration with industry",
      "Collaborated on projects with industrial companies to integrate blockchain-based solutions.",
      "Participated in workshops and conferences to stay updated on the latest blockchain trends and technologies.",
      "Published research and findings in blockchain and smart contract technologies.",
      "Worked on the design and evaluation of token ecosystems and decentralized business intelligence models.",
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
    name: "Crowdfunding (DApp)",
    description:
      "A decentralized Web-based platform that helps startups in creating and monitoring crowdfunding campaigns, running on Ethereum blockchain",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: crowdfunding,
    source_code_link: "https://github.com/ramygouiaa/web3-crowdfunding",
  },
  {
    name: "Inventory manager",
    description:
      "Web application that helps store owners, Manages inventory, users, suppliers, orders, products",
    tags: [
      {
        name: "angular17",
        color: "blue-text-gradient",
      },
      {
        name: "Spring boot3",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: inventory,
    source_code_link: "https://github.com/ramygouiaa/inventory-management-ui",
  },
  {
    name: "Invoice generator",
    description:
      "A Web application that generates bills and invoices useful for stores, merchants or freelancers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: invoice,
    source_code_link: "https://github.com/ramygouiaa/invoice-generator",
  },
];

export { services, technologies, experiences, testimonials, projects };
