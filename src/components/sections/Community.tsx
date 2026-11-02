import Reveal from "@/components/common/Reveal";
import SectionHeader from "@/components/common/SectionHeader";
import { community } from "@/data/portfolio";

export default function Community() {
  return (
    <section id="community" className="-scroll-mt-4 border-t border-ink/15">
      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-10 md:py-16">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-3">
            <SectionHeader index="04" label="Activities" />
          </div>
          <Reveal className="col-span-12 mt-8 md:col-span-9 md:mt-0">
            <h2 className="text-4xl font-bold leading-[1.2] tracking-tight md:text-6xl">
              Community and training.
            </h2>
          </Reveal>
        </div>

        <ol className="mt-16 border-t border-ink md:mt-24">
          {community.map((entry, index) => (
            <li
              key={`${entry.organization}-${entry.period}`}
              className="group border-b border-ink/15"
            >
              <Reveal
                delay={index * 80}
                className="grid grid-cols-12 gap-x-6 gap-y-3 py-8 transition-colors duration-300 md:py-10"
              >
                <span className="col-span-12 text-5xl font-bold leading-none text-signal transition-transform duration-500 ease-out-expo group-hover:translate-x-4 md:col-span-2 md:text-6xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="label col-span-12 self-center text-muted md:col-span-2">
                  {entry.period}
                </span>
                <div className="col-span-12 md:col-span-8">
                  <p className="text-2xl font-bold leading-[1.2] tracking-tight group-hover:text-signal duration-500 ease-out-expo md:text-3xl">
                    {entry.organization}
                  </p>
                  <p className="mt-2 text-lg leading-[1.5] text-ink/80">
                    {entry.role}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
