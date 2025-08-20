// src/data/projects.js
import PMAIN from "../assets/ProjectPageImages/PortfolioMain.png";
import PSUB1 from "../assets/ProjectPageImages/PortfolioSub1.png";
import PSUB2 from "../assets/ProjectPageImages/PortfolioSub2.png";

import FMAIN from "../assets/ProjectPageImages/FoodMain.png";
import FSUB1 from "../assets/ProjectPageImages/FoodSub1.png";
import FSUB2 from "../assets/ProjectPageImages/FoodSub2.png";

import AMAIN from "../assets/ProjectPageImages/AmyMain.png";
import ASUB1 from "../assets/ProjectPageImages/AmySub1.png";
import ASUB2 from "../assets/ProjectPageImages/AmySub2.png";

import NMAIN from "../assets/ProjectPageImages/NickyMain.png";
import PlatformMAIN from "../assets/ProjectPageImages/PlatformMain.png";

export const projects = [
  {
    // Portfolio
    slug: "portfolio-website",
    title: "Portfolio Website",
    status: "In Progress",
    tools: ["React", "Vite", "Tailwind", "Netlify", "Irish Domains", "GitHub"],
    summary:
      "A personal portfolio website to showcase my projects and provide a little bit of information about myself.",
    heroImage: PMAIN,
    body: [
      {
        heading: "Overview",
        paragraphs: [
          "I built this site to support my applications to internships as you can only fit so much information on a CV or a cover letter.",
          "My main goal was to demonstrate my abilities in a clear, understandable manner.",
        ],
      },
      {
        heading: "Implementation",
        paragraphs: [
          "I chose a React + Vite stack for reusable components (project cards, project pages) where content changes but layout stays the same.",
          "I made the landing images in Photoshop and designed the rest of the site in Figma.",
        ],
      },
    ],
    gallery: [PSUB1, PSUB2],
    links: { repo: "https://github.com/..." },
    startedAt: "2025-06",
  },

  {
    // Food
    slug: "foodwaste-tracker",
    title: "Daly's Daily Food Waste Tracker",
    status: "Completed",
    tools: ["Java", "Processing", "G4P UI Library"],
    summary:
      "A Java application developed as part of Intro to Computer Systems.",
    heroImage: FMAIN,
    body: [
      {
        heading: "Overview",
        paragraphs: [
          "Takes in user input and estimates food waste generated and meals wasted per year.",
          "The application is tested and production-ready.",
        ],
      },
      {
        heading: "Implementation",
        paragraphs: [
          "Calculations in Java with the G4P UI library. After the learning curve it was a really enjoyable project.",
        ],
      },
    ],
    gallery: [FSUB1, FSUB2],
    links: { repo: "https://github.com/ShanedalyCS/Food-Waste-Tracker" },
    startedAt: "First Year",
  },

  {
    // Amy's
    slug: "amy-wellbeing",
    title: "Amy Mulhall Wellbeing",
    status: "Completed",
    tools: ["HTML", "CSS", "JavaScript"],
    summary:
      "A simple website for a client to increase the business’s online presence.",
    heroImage: AMAIN,
    body: [
      {
        heading: "Overview",
        paragraphs: [
          "Designed in Figma and developed to the client’s requirements. Initially built in React but simplified to HTML/CSS/JS.",
          "Includes a blog currently updated via JSON; plan to add a proper backend auth flow.",
        ],
      },
    ],
    gallery: [ASUB1, ASUB2],
    links: {
      demo: "https://www.amymulhall.com/",
      repo: "https://github.com/ShanedalyCS/amy-wellbeing",
    },
    startedAt: "2025",
  },

  {
    // Nicky's
    slug: "nicky",
    title: "Nicky Brennan Tyres",
    status: "Completed",
    tools: ["Squarespace", "HTML", "CSS", "JavaScript"],
    summary:
      "An ecommerce site with a Google Ads campaign to increase sales during COVID.",
    heroImage: NMAIN,
    body: [
      {
        heading: "Overview",
        paragraphs: [
          "Deployed on Squarespace and ran ads. The site is no longer live due to a business change.",
        ],
      },
    ],
    gallery: [],
    links: {},
    startedAt: "2020",
  },

  {
    // Real Estate
    slug: "real",
    title: "Real Estate Platform",
    status: "Paused",
    tools: ["Python", "React", "Django REST", "JavaScript", "MongoDB", "Postman"],
    summary:
      "A platform aiming to reduce the cost of listing property for sale or rent.",
    heroImage: PlatformMAIN,
    body: [
      {
        heading: "Overview",
        paragraphs: [
          "Foundations and REST endpoints tested with Postman.",
          "Repo is private while redesigning the architecture.",
        ],
      },
    ],
    gallery: [],
    links: { repo: "https://github.com/ShanedalyCS/RealEstatePlatform" },
    startedAt: "2025",
  },

  {
    // Therapist
    slug: "therapist-crm",
    title: "Therapist CRM",
    status: "Completed",
    tools: ["React", "NodeJS", "SimpleAuth", "CSS", "phpMyAdmin", "SQL"],
    summary:
      "A platform for therapists to manage clients, sessions, and therapists.",
    heroImage: PlatformMAIN,
    body: [
      {
        heading: "Overview",
        paragraphs: ["Completed as part of Intro to Web."],
      },
    ],
    gallery: [],
    links: { repo: "https://github.com/ShanedalyCS/TherapyManager" },
    startedAt: "2025",
  },
];
