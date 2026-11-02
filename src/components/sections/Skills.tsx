import Reveal from "@/components/common/Reveal";
import SectionHeader from "@/components/common/SectionHeader";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="-scroll-mt-4 border-t border-ink/15">
      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-10 md:py-16">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-3">
            <SectionHeader index="03" label="Skills" />
          </div>
          <Reveal className="col-span-12 mt-8 md:col-span-9 md:mt-0">
            <h2 className="text-4xl font-bold leading-[1.2] tracking-tight md:text-6xl">
              Tools I work with.
            </h2>
          </Reveal>
        </div>

        <Reveal
          delay={120}
          className="mt-10 grid border-t border-ink md:mt-16 md:grid-cols-4"
        >
          {skillGroups.map((group, groupIndex) => {
            const isLastGroup = groupIndex === skillGroups.length - 1;

            return (
              <div
                key={group.title}
                className={
                  isLastGroup
                    ? "md:col-span-4 md:border-t border-ink/15 py-8 md:py-10"
                    : "border-b border-ink/15 py-8 md:border-b-0 md:border-r md:px-6 md:py-10 md:first:pl-0 md:[&:nth-last-child(2)]:border-r-0 md:[&:nth-last-child(2)]:pr-0"
                }
              >
                <p className="label text-muted">
                  {String(groupIndex + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-3 text-lg font-bold text-signal">
                  {group.title}
                </h3>

                {isLastGroup ? (
                  <ul className="mt-6 grid grid-cols-3 gap-3 md:grid-cols-6">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center justify-center rounded-lg border border-ink/15 px-3 py-4 text-center text-sm font-medium transition-all duration-300 hover:border-signal hover:bg-signal/5 hover:text-signal"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="mt-6 space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="cursor-default text-2xl font-medium leading-[1.2] tracking-tight transition-colors duration-300 hover:text-signal"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
