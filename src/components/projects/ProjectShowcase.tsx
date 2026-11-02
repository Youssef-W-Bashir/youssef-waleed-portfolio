import { ArrowUpRight } from "lucide-react";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";
import type { Project } from "@/data/portfolio";

interface ProjectShowcaseProps {
  project: Project;
  featured?: boolean;
  reverse?: boolean;
}

const linkClass =
  "group inline-flex items-center gap-2 border-b border-ink pb-1 text-base font-medium transition-colors duration-300 hover:border-signal";

function ProjectStack({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <li key={tech} className="label border border-ink/25 px-2.5 py-1.5">
          {tech}
        </li>
      ))}
    </ul>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  if (!project.live && !project.source) return null;

  return (
    <div className="flex flex-wrap gap-x-8 gap-y-4">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live demo of ${project.title} (opens in a new tab)`}
          className={linkClass}
        >
          Live demo
          <ArrowUpRight
            size={18}
            aria-hidden="true"
            className="text-signal transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      )}
      {project.source && (
        <a
          href={project.source}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Source code of ${project.title} (opens in a new tab)`}
          className={linkClass}
        >
          Source code
          <ArrowUpRight
            size={18}
            aria-hidden="true"
            className="text-signal transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      )}
    </div>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ol className="border-t border-ink/20">
      {items.map((item, index) => (
        <li
          key={item}
          className="grid grid-cols-[3rem_1fr] gap-4 border-b border-ink/20 py-4 text-base leading-[1.5]"
        >
          <span className="label pt-1 text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function ProjectShowcase({
  project,
  featured = false,
  reverse = false,
}: ProjectShowcaseProps) {
  const frame = (
    <ImagePlaceholder
      src={project.image}
      alt={`${project.title} screenshot`}
      label="Project preview"
      aspectClassName={featured ? "aspect-[16/9]" : "aspect-[16/10]"}
    />
  );

  const header = (
    <header className="col-span-12 flex flex-wrap items-end justify-between gap-2 border-b border-ink pb-6">
      <div>
        <p className="label text-muted">
          {featured ? "Featured project" : "Project"}
        </p>
        <h3
          className={`mt-4 font-bold uppercase leading-[1.04] tracking-[-0.03em] ${
            featured
              ? "text-[clamp(2rem,6.5vw,4.5rem)]"
              : "text-[clamp(2.25rem,5vw,4rem)]"
          }`}
        >
          {project.title}
        </h3>
      </div>
      <span
        className={`font-bold leading-none tracking-[-0.04em] text-signal ${
          featured ? "text-[clamp(3.5rem,10vw,7rem)]" : "text-6xl md:text-7xl"
        }`}
      >
        {project.number}
      </span>
    </header>
  );

  if (featured) {
    return (
      <article className="grid grid-cols-12 gap-x-6 gap-y-6 md:gap-y-10">
        {header}
        <div className="col-span-12">{frame}</div>
        <div className="col-span-12 flex flex-col gap-8 md:col-span-6">
          <p className="text-xl leading-[1.5] text-ink/85">{project.summary}</p>
          <ProjectStack stack={project.stack} />
          <ProjectLinks project={project} />
        </div>
        <div className="col-span-12 md:col-span-5 md:col-start-8">
          <Highlights items={project.highlights} />
        </div>
      </article>
    );
  }

  return (
    <article className="grid grid-cols-12 gap-x-6 gap-y-6 md:gap-y-10">
      {header}
      <div
        className={`col-span-12 md:col-span-7 ${reverse ? "md:order-2" : ""}`}
      >
        {frame}
      </div>
      <div
        className={`col-span-12 flex flex-col gap-8 md:col-span-5 ${reverse ? "md:order-1" : ""}`}
      >
        <p className="text-lg leading-[1.5] text-ink/85">{project.summary}</p>
        <Highlights items={project.highlights} />
        <ProjectStack stack={project.stack} />
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
