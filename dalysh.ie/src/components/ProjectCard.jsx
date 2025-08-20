// src/components/ProjectCard.jsx
import { Link } from "react-router-dom";

const STATUS_BORDER = {
  "In Progress": "border-emerald-500",
  "Completed":   "border-indigo-600",
  "Paused":      "border-amber-500",
  "Planned":     "border-purple-500",
};

const STATUS_PILL = {
  "In Progress": "bg-emerald-500 text-white",
  "Completed":   "bg-indigo-600 text-white",
  "Paused":      "bg-amber-400 text-black",
  "Planned":     "bg-purple-400 text-white",
};

export default function ProjectCard({
  title,
  tools = [],
  description = "",
  status = "In Progress",
  imageUrl = "",
  slug = "",
}) {
  const borderCls = STATUS_BORDER[status] || "border-gray-300";
  const pillCls   = STATUS_PILL[status]   || "bg-gray-300 text-black";

  return (
    <article
      className={`h-full rounded-3xl border-4 ${borderCls} shadow-md overflow-hidden flex flex-col`}
    >
      {/* Constant-size image box; no inner rounding */}
      <div className="w-full h-44 sm:h-52 md:h-60 lg:h-64 xl:h-72 overflow-hidden bg-gray-200">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title || "Project"}
            className="block w-full h-full object-cover object-center"
            loading="lazy"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-white text-center flex flex-col items-center gap-3">
        {title && <h3 className="text-2xl font-semibold leading-tight">{title}</h3>}
        {tools.length > 0 && <p className="text-gray-500">Tools: {tools.join(", ")}</p>}
        {description && <p className="text-gray-700">{description}</p>}

        <span className={`mt-2 inline-block px-4 py-2 rounded-full ${pillCls}`}>
          {status}
        </span>

        <div className="mt-auto">
          <Link
            to={slug ? `/projects/${slug}` : "#"}
            className="inline-block rounded-full bg-indigo-600 text-white px-5 py-2 hover:bg-indigo-700 transition"
            aria-disabled={!slug}
            onClick={(e) => { if (!slug) e.preventDefault(); }}
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}
