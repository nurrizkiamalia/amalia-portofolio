import html from "@/public/icon/html.png"
import css from "@/public/icon/css.png"
import js from "@/public/icon/Js.png"
import ts from "@/public/icon/Typescript.png"
import reactjs from "@/public/icon/React.png"
import nextjs from "@/public/icon/nextjs.webp"
import java from "@/public/icon/Java.png"
import springboot from "@/public/icon/springboot.png"
import git from "@/public/icon/Github.png"
import figma from "@/public/icon/Figma.png"
import whimsical from "@/public/icon/whimsical.png"
import trello from "@/public/icon/Trello.png"
import notion from "@/public/icon/notion.png"
import jira from "@/public/icon/Jira.png"
import { IoHomeOutline, IoFlameOutline } from "react-icons/io5";
import { BsPersonRolodex } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";

import deilimanage from "@/public/deili-management.webp";
import alphamarch from "@/public/alphamarch.webp";
import eventeuphoria from "@/public/eventeuphoria.webp";
import dmrtech from "@/public/DMRTech.webp";
import deiliproject from "@/public/deili-project.webp";
import pokemon from "@/public/Pokemon.webp";

export const headerLinks = [
    {
        links: "#", icon: IoHomeOutline, text: "Home"
    },
    {
        links: "#about", icon: BsPersonRolodex, text: "About"
    },
    {
        links: "#projects", icon: GoProjectRoadmap, text: "Projects"
    },
    {
        links: "#skills", icon: IoFlameOutline, text: "Skills"
    },
];

export const skillsets = [
    {
        title: "💻 Build Responsive Website",
        type: "Front-end website development",
        stacks: ["HTML","CSS","JavaScript","React.js","Next.js","TailwindCSS","Typescript","Wordpress"]
    },
    {
        title: "🎨 Designing Website Page",
        type: "UI Design",
        stacks: ["Whimsical","Figma","Canva"]
    },
    {
        title: "👩🏻‍💻 Build Back-End API",
        type: "Back-end Development",
        stacks: ["PostGreSQL","MySQL","Java","Spring Boot"]
    },
]

export const recentProjects = [
    {
        image: deilimanage,
        title: "Deili Management",
        type: "Task Management Platform",
        job: "Full-stack Development",
        webOf: ["Front-end","Back-end","Full-stack"],
        stacks: ["Next.js","TailwindCSS","Typescript","Java","Spring Boot", "PostGreSQL","Docker","CI/CD","GraphQL"],
        link: "https://deilimanagement.rizkiamalia.space",
    },
    {
        image: alphamarch,
        title: "Alpha March",
        type: "Multi Warehouse Web App",
        job: "Full-stack Development",
        webOf: ["Front-end","Back-end","Full-stack"],
        stacks: ["Next.js","TailwindCSS","Typescript","Java","Spring Boot", "PostGreSQL","Docker","CI/CD"],
        link: "https://www.alphamarch.shop",
    },
    {
        image: eventeuphoria,
        title: "Event Euphoria",
        type: "Event Booking Platform",
        job: "Front-end Development",
        webOf: ["Front-end"],
        stacks: ["Next.js","TailwindCSS","Typescript","ApexCharts","React Hooks"],
        link: "https://www.eventeuphoria.fun",
    },
    {
        image: deiliproject,
        title: "Deili Project",
        type: "AI Generator",
        job: "AI Web Development",
        webOf: ["Front-end","Back-end"],
        stacks: ["Next.js","TailwindCSS","Typescript","AI Integrated","Next.js Server Side","PostgreSQL"],
        link: "https://github.com/nurrizkiamalia/deili-project",
    },
    {
        image: dmrtech,
        title: "DMRTech",
        type: "Company Profile Website",
        job: "Front-end Development",
        webOf: ["Front-end"],
        stacks: ["Next.js","TailwindCSS","Typescript","Vercel","API Fetching"],
        link: "https://dmr-tech.vercel.app",
    },
    {
        image: pokemon,
        title: "Pokemon Search",
        type: "Search Input",
        job: "Front-end Development",
        webOf: ["Front-end","Back-end","Full-stack"],
        stacks: ["Next.js","TailwindCSS","Typescript","Vercel","API Fetching"],
        link: "https://pokemon-website-sigma.vercel.app/",
    },
]

export const skillStacks = [
    {
        name: "🖥 Programming Stack",
        stacks: [
            { image: html, stack: "HTML" },
            { image: css, stack: "CSS" },
            { image: js, stack: "JavaScript" },
            { image: ts, stack: "TypeScript" },
            { image: reactjs, stack: "React.js" },
            { image: nextjs, stack: "Next.js" },
            { image: java, stack: "Java" },
            { image: springboot, stack: "Spring Boot Java" },
            { image: git, stack: "Git Version Control" },
        ]
    },
    {
        name: "🖌 Design Stack",
        stacks: [
            { image: figma, stack: "Figma" },
            { image: whimsical, stack: "Whimsical" },
        ]
    },
    {
        name: "📝 Productivity Tools",
        stacks: [
            { image: trello, stack: "Trello" },
            { image: notion, stack: "Notion" },
            { image: jira, stack: "Jira" },
        ]
    },
]