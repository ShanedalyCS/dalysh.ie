// export const projects = [ ... ]
import PMAIN from '../assets/ProjectPageImages/PortfolioMain.png'
import PSUB1 from '../assets/ProjectPageImages/PortfolioSub1.png'
import PSUB2 from '../assets/ProjectPageImages/PortfolioSub2.png'

export const projects = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    status: "In Progress", // or "Completed" | "Paused"
    tools: ["React", "Vite", "Tailwind", "Netlify", "Irish Domains", "GitHub"],
    summary: "A personal portfolio website to showcase my projects and provide a little bit of information about myself.",
    heroImage: PMAIN,
    body: [
      {
        heading: "Overview",
        paragraphs: [
          "I build this site to support my applications to internships as you can only fit so much information on a CV or a cover letter.",
          "My main goal was to demonstrate my abilities in a clear, understandable manner.",
        ],
      },
      {
        heading: "Implementation",
        paragraphs: [
          "I chose a React + Vite stack as the component based rendering was ideal for a site with repeated pages (project cards, project pages etc) where all that's really changing is the content, layout and structure of the page stays the same.",
          "I made the landing images in photoshop and designed the rest of the site in Figma.",
        ],
      },
    ],
    gallery: [PSUB1, PSUB2],
    links: { demo: "https://dalysh.ie", repo: "https://github.com/..." },
    startedAt: "2025-06",
  },
  // more projects...
];
