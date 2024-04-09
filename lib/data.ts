import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import amazon from "@/public/amazon.png";
import tesla from "@/public/tesla.png";
import Iframe from "react-iframe";
import faceYoga from "@/public/faceYoga.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated SEYTECH bootcamp",
    location: "Chicago, IL",
    description:
      "After completing six months of study, I graduated and subsequently began my role as a Frontend Developer at Cargo Fleet Company in March 2022.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2021",
  },
  {
    title: "Front-End Developer",
    location: "Chicago, IL",
    description:
      "I possess two years of hands-on expertise working as a Front End Developer at Cargo Fleet company.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
  {
    title: "UI-UX Design",
    location: "Bishkek, KG",
    description:
      "I have accrued three months of practical experience in UI-UX design based in Bishkek, Kyrgyzstan. Proficient in utilizing Figma and Adobe Illustrator for design tasks.",
    icon: React.createElement(FaReact),
    date: "2020",
  },
] as const;

export const projectsData = [
  {
    title: "Amazon website clone",
    description:
      "Developed an Amazon clone using React, Redux Toolkit, Tailwind CSS, Framer Motion, and Firebase.",
    tags: ["React", "Redux", "Framer Motion", "Tailwind", "Firebase"],
    imageUrl: amazon,
    externalUrl: "https://amazon-website-clone-ten.vercel.app/",
  },
  {
    title: "TESLA",
    description:
      "Built Tesla clone with ReactJS, Redux, Styled Components, Framer Motion",
    tags: ["React", "JavaScript", "Redux", "Styled Components"],
    imageUrl: tesla,
    externalUrl: "https://tesla-clone-mu-one.vercel.app/",
  },
  {
    title: "UI-UX design, Face Yoga app",
    description: "Designed Face Yoga App using Figma",
    tags: ["Figma"],
    imageUrl: faceYoga,
    externalUrl: "https://www.behance.net/gallery/158151979/Case-Face-yoga",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Bootstrap",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Redux",
  "GraphQL",
  "Netlify",
  "Framer Motion",
  "UI/UX design",
  "Figma",
  "Wireframing",
  "Prototyping",
  "Unit testing",
] as const;
