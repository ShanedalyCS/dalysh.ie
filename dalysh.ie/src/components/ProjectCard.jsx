// src/components/ProjectCard.jsx
import { Link } from "react-router-dom";

const STATUS_BORDER = {
  "In Progress": "border-emerald-500",
  "Completed":   "border-indigo-600",
  "Paused":      "border-amber-500",
};

const STATUS_PILL = {
  "In Progress": "bg-emerald-500 text-white",
  "Completed":   "bg-indigo-600 text-white",
  "Paused":      "bg-amber-400 text-black",
  "Planned": "bg-purple-400 text-white"
};

export default function ProjectCard({
  title,
  tools = [],              // e.g. ["React", "Tailwind"]
  description = "",
  status = "In Progress",
  imageUrl = "",
  slug = "",               // e.g. "portfolio-site"
}) {
  const borderCls = STATUS_BORDER[status] || "border-gray-300";
  const pillCls   = STATUS_PILL[status]   || "bg-gray-300 text-black";

  return (
    <article
      className={`rounded-3xl border-4 ${borderCls} bg-white/95 shadow-md overflow-hidden flex flex-col`}
    >
      {/* Image (corners clip because the wrapper has overflow-hidden) */}
      <div className="w-full aspect-[16/9] bg-gray-200">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title || "Project"}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6 text-center flex flex-col items-center gap-3">
        {title && <h3 className="text-2xl font-semibold">{title}</h3>}
        {tools.length > 0 && (
          <p className="text-gray-500">Tools: {tools.join(", ")}</p>
        )}
        {description && <p className="text-gray-700">{description}</p>}

        {/* Status pill */}
        <span className={`mt-2 inline-block px-4 py-2 rounded-full ${pillCls}`}>
          {status}
        </span>

        {/* Read more */}
        <Link
          to={slug ? `/projects/${slug}` : "#"}
          className="mt-2 inline-block rounded-full bg-indigo-600 text-white px-5 py-2 hover:bg-indigo-700 transition"
          aria-disabled={!slug}
          onClick={(e) => { if (!slug) e.preventDefault(); }}
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
