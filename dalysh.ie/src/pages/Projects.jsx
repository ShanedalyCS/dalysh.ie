import Typewriter from "../components/Typewriter.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

// this site, food waste tracker, amy mullhall, Nicky Brennan, Real Estate Platform, Therapist Manager, 

const projects = [
  {
    title: "Portfolio Website",
    tools: ["React", "Vite", "Tailwind", "Netlify","Irish Domains"],
    description: "A fast, minimalist portfolio.",
    status: "In Progress",
    imageUrl: "/images/portfolio.png",
    slug: "portfolio-website",
  },
  {
    title: "Food Waste Tracker",
    tools: ["Java", "Processing", "G4P Library"],
    description: "Estimates food waste based on user input. Tested and production ready.",
    status: "Completed",
    imageUrl: "/images/therapist-crm.png",
    slug: "therapist-crm",
  },
  {
    title: "Amy Mullhall Wellbeing",
    tools: ["Javascript", "HTML", "CSS", "Netlify", "Irish Domains"],
    description: "Website for a freelance to increase online presence for her business.",
    status: "Completed",
    imageUrl: "/images/therapist-crm.png",
    slug: "therapist-crm",
  },
  {
    title: "Nicky Breannan Tyres",
    tools: ["Squarespace", "GoogleAds", "CSS"],
    description: "Ecommerce website developed for a client to increase sales.",
    status: "Completed",
    imageUrl: "/images/therapist-crm.png",
    slug: "therapist-crm",
  },
  {
    title: "Real Estate Platform",
    tools: ["React", "Express", "MySQL"],
    description: "Platform for users to post real estate for sale/rent in direct competition with Irelands largest real estate platforms.",
    status: "Paused",
    imageUrl: "/images/therapist-crm.png",
    slug: "therapist-crm",
  },
  {
    title: "Therapist CRM",
    tools: ["React", "Express", "MySQL"],
    description: "Dashboard + CRUD app for therapists, clients, and sessions.",
    status: "Completed",
    imageUrl: "/images/therapist-crm.png",
    slug: "therapist-crm",
  }

];

export default function Projects(){
    return(
        <>
      
      <section className="heroP">
        <div className="landingP">
          <div className="hello">
            {/* <span>{"text before typewriter "}</span> */}
        <Typewriter
          text={[
            "M Y   P R O J E C T S",
            ":)"
            
          ]}
          speed={70}
          className="text-white-500"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar={"_"}
            />
          </div>
        </div>

        </section>


         <section className="container mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
         {projects.map(p => <ProjectCard key={p.slug} {...p} />)}
        </section>
        </>
    )
}