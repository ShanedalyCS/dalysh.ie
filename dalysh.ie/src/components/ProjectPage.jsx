// src/pages/ProjectPage.jsx
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects"; // <-- array of project objects with a `slug`

const STATUS_BORDER = {
  "In Progress": "border-emerald-500",
  "Completed": "border-indigo-600",
  "Paused": "border-amber-500",
};

const STATUS_PILL = {
  "In Progress": "bg-emerald-500 text-white",
  "Completed": "bg-indigo-600 text-white",
  "Paused": "bg-amber-400 text-black",
};

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    document.title = project ? `${project.title} · Projects` : "Project not found";
  }, [project]);

  if (!project) {
    return (
      <section className="min-h-[calc(100vh-56px)] flex items-center justify-center px-4">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl font-semibold">Project not found</h1>
          <p className="mt-2 text-gray-600">
            We couldn’t find a project with slug “{slug}”.
          </p>
          <Link
            to="/projects"
            className="mt-6 inline-block rounded-full bg-indigo-600 text-white px-5 py-2 hover:bg-indigo-700 transition"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  const {
    title,
    status = "In Progress",
    tools = [],
    summary = "",
    heroImage = "",
    body = [], // optional: [{ heading, paragraphs: [..] }]
    gallery = [], // optional: array of image URLs
    links = {}, // optional: { demo, repo }
    startedAt,
    finishedAt,
  } = project;

  const borderCls = STATUS_BORDER[status] || "border-gray-300";
  const pillCls = STATUS_PILL[status] || "bg-gray-300 text-black";

  return (
    <section className="px-4 py-8 sm:py-12">
      <div className="mx-auto w-full max-w-5xl">
        {/* Back link */}
        <div className="mb-4">
          <Link to="/projects" className="text-indigo-700 hover:underline">
            ← Back to all projects
          </Link>
        </div>

        {/* Card shell */}
        <article className={`rounded-3xl border-4 ${borderCls} bg-white shadow-md overflow-hidden`}>
          {/* Hero */}
          {heroImage ? (
            <div className="w-full aspect-[16/9] bg-gray-100">
              <img src={heroImage} alt={title} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-full aspect-[16/9] bg-gray-100" />
          )}

          {/* Header */}
          <header className="px-6 sm:px-10 pt-6 sm:pt-8">
            <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className={`inline-block px-4 py-1.5 rounded-full text-sm ${pillCls}`}>
                {status}
              </span>

              {startedAt && (
                <span className="text-sm text-gray-500">
                  {finishedAt ? `${startedAt} → ${finishedAt}` : `Since ${startedAt}`}
                </span>
              )}
            </div>

            {tools.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <li
                    key={t}
                    className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}

            {summary && <p className="mt-4 text-gray-700 max-w-3xl">{summary}</p>}
          </header>

          {/* Body sections */}
          {Array.isArray(body) && body.length > 0 && (
            <div className="px-6 sm:px-10 py-6 sm:py-8 space-y-8">
              {body.map((section, idx) => (
                <section key={idx}>
                  {section.heading && (
                    <h2 className="text-xl sm:text-2xl font-semibold">{section.heading}</h2>
                  )}
                  {Array.isArray(section.paragraphs) &&
                    section.paragraphs.map((p, i) => (
                      <p key={i} className="mt-3 text-gray-700 leading-relaxed">
                        {p}
                      </p>
                    ))}
                </section>
              ))}
            </div>
          )}

          {/* Gallery */}
          {Array.isArray(gallery) && gallery.length > 0 && (
            <div className="px-6 sm:px-10 pb-6 sm:pb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {gallery.map((src, i) => (
                  <div key={i} className="aspect-[16/10] bg-gray-100 rounded-xl overflow-hidden">
                    <img src={src} alt={`${title} screenshot ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer actions */}
          {(links?.demo || links?.repo) && (
            <footer className="px-6 sm:px-10 pb-8">
              <div className="flex flex-wrap gap-3">
                {links?.demo && (
                  <a
                    href={links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-full bg-indigo-600 text-white px-5 py-2 hover:bg-indigo-700 transition"
                  >
                    Live Demo
                  </a>
                )}
                {links?.repo && (
                  <a
                    href={links.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-full bg-gray-900 text-white px-5 py-2 hover:bg-gray-800 transition"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </footer>
          )}
        </article>
      </div>
    </section>
  );
}
