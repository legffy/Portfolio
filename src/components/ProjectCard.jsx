import Image from "next/image";
import { ArrowUpRight, Github, PlayCircle } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const isVideo = project.media.type === "video";
  const isSystemPreview = project.media.type === "system";
  const fitClass = project.media.fit === "cover" ? "object-cover" : "object-contain p-8";

  return (
    <article className="group grid overflow-hidden border border-[#9A031E]/38 bg-[#1B1B1B]/72 shadow-[0_22px_70px_rgba(0,0,0,0.24)] transition hover:-translate-y-1 hover:border-[#9A031E]/80 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="relative min-h-[260px] overflow-hidden border-b border-[#C3A995]/12 bg-[#0D0106] lg:border-b-0 lg:border-r">
        <div className="system-grid pointer-events-none absolute inset-0 opacity-[0.18]" />
        <div className="absolute left-4 top-4 z-10 rounded-full border border-[#C3A995]/22 bg-[#0D0106]/76 px-3 py-1 text-xs font-semibold uppercase text-[#C3A995] backdrop-blur">
          {project.eyebrow}
        </div>

        {isSystemPreview ? (
          <div className="relative flex h-full min-h-[320px] flex-col justify-end p-6">
            <div className="absolute right-6 top-6 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#9A031E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#C3A995]/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#F7EFE7]/45" />
            </div>
            <div className="rounded-xl border border-[#C3A995]/16 bg-[#1B1B1B]/78 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur">
              <p className="mb-5 font-mono text-xs uppercase text-[#C3A995]/78">
                {project.media.label}
              </p>
              <div className="space-y-3 font-mono text-sm text-[#F7EFE7]">
                {project.media.lines.map((line) => (
                  <p key={line} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9A031E]" />
                    <span>{line}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        ) : isVideo ? (
          <iframe
            src={project.media.src}
            title={project.media.alt}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <Image
            src={project.media.src}
            alt={project.media.alt}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className={`${fitClass} transition duration-500 group-hover:scale-[1.025]`}
          />
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 rounded-full border border-[#C3A995]/30 bg-[#0D0106]/78 px-3 py-2 text-xs font-semibold text-[#F7EFE7] backdrop-blur transition hover:border-[#C3A995] hover:bg-[#C3A995]/10"
          >
            <PlayCircle size={15} />
            Demo
          </a>
        )}
      </div>

      <div className="p-6 sm:p-8">
        <div className="mb-5 flex items-start justify-between gap-5">
          <div>
            <span className="text-sm font-semibold text-[#C3A995]/70">0{index + 1}</span>
            <h3 className="mt-2 text-3xl font-semibold text-[#F7EFE7]">{project.title}</h3>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub repository`}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C3A995]/24 text-[#F7EFE7] transition hover:border-[#C3A995] hover:bg-[#C3A995]/10"
          >
            <Github size={20} />
          </a>
        </div>

        <p className="text-base leading-7 text-[#D8C8BC]">{project.summary}</p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="border-l border-[#9A031E]/75 pl-4">
            <p className="text-xs font-semibold uppercase text-[#C3A995]/72">Problem</p>
            <p className="mt-2 text-sm leading-6 text-[#D8C8BC]">{project.problem}</p>
          </div>
          <div className="border-l border-[#9A031E]/75 pl-4">
            <p className="text-xs font-semibold uppercase text-[#C3A995]/72">Built</p>
            <p className="mt-2 text-sm leading-6 text-[#D8C8BC]">{project.built}</p>
          </div>
        </div>

        <ul className="mt-6 space-y-3 text-sm leading-6 text-[#F0E4DA]">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9A031E]" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-[#C3A995]/18 bg-[#0D0106]/60 px-3 py-1 text-xs font-medium text-[#C3A995]"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#9A031E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#B40525]"
          >
            Repository
            <ArrowUpRight size={16} />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#C3A995]/28 px-4 py-2 text-sm font-semibold text-[#F7EFE7] transition hover:border-[#C3A995] hover:bg-[#C3A995]/10"
            >
              Watch Demo
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
