import Reveal from "@/components/common/Reveal";
import SectionHeader from "@/components/common/SectionHeader";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="work" className="-scroll-mt-4 border-t border-ink/15">
      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-10 md:py-16">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-3">
            <SectionHeader index="02" label="Projects" />
          </div>
          <Reveal className="col-span-12 md:col-span-9">
            <div className="mt-8 flex flex-wrap items-end justify-between gap-6 md:mt-0">
              <h2 className="text-4xl font-bold leading-[1.2] tracking-tight md:text-6xl">
                Selected work.
              </h2>
              <span className="label text-muted">
                {String(projects.length).padStart(2, "0")} projects
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] space-y-16 px-5 pb-16 md:space-y-28 md:px-10 md:pb-20">
        {projects.map((project, index) => (
          <Reveal key={project.number}>
            <ProjectShowcase
              project={project}
              featured={index === 0}
              reverse={index > 0 && index % 2 === 0}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
