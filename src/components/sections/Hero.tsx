import { ArrowDown, ArrowUpRight } from "lucide-react";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";
import Reveal from "@/components/common/Reveal";
import { profile } from "@/data/portfolio";
import image from "../../assets/IMG_20261030_184012.jpg.jpeg";

const facts = [
  { label: "Education", value: profile.education },
  { label: "Year", value: profile.year },
  { label: "Status", value: profile.status },
];

export default function Hero() {
  return (
    <section id="top" className="border-b border-ink/15">
      <div className="mx-auto max-w-[1280px] px-5 pb-10 pt-6 md:px-10 md:pb-14">
        <div className="label flex items-center justify-between border-b border-ink pb-4">
          <span>Portfolio</span>
          <span className="hidden sm:inline">Monufia, Egypt</span>
          <span>2026</span>
        </div>

        <div className="mt-6 grid grid-cols-12 items-end gap-x-6 gap-y-14 md:mt-10">
          <Reveal className="col-span-12 md:col-span-7">
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[1.04] tracking-[-0.03em]">
              <span className="block">
                {profile.firstName} {profile.middleName}
              </span>
              <span className="block">
                {profile.lastName}
                <span className="text-signal">.</span>
              </span>
            </h1>

            <div className="mt-6 md:mt-10 border-l-2 border-signal pl-6">
              <p className="label text-muted">Role</p>
              <p className="mt-2 text-2xl font-bold leading-[1.2] tracking-tight md:text-3xl">
                {profile.role}
              </p>
              <p className="mt-5 max-w-lg text-lg leading-[1.5] text-ink/85">
                {profile.intro}
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 bg-ink px-6 py-4 text-base font-medium text-canvas transition-colors duration-300 hover:bg-signal hover:text-midnight"
              >
                View Projects
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 border border-ink px-6 py-4 text-base font-medium transition-colors duration-300 hover:bg-ink hover:text-canvas"
              >
                Contact Me
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </Reveal>

          <Reveal
            delay={150}
            className="col-span-12 md:col-span-4 md:col-start-9"
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 h-full w-full bg-signal md:-bottom-4 md:-right-4"
              />
              <ImagePlaceholder
                alt={`Portrait of ${profile.name}`}
                label="Portrait / image placeholder"
                aspectClassName="aspect-[4/5]"
                className="relative"
                src={image}
              />
            </div>
            <p className="label mt-6 md:flex justify-between text-muted">
              <span>5.3.1 — my Latest Version</span>
              <span className="block">Monufia, Egypt</span>
            </p>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <dl className="mt-14 grid border-t border-ink md:mt-20 md:grid-cols-3">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="border-b border-ink/15 py-5 md:border-b-0 md:border-l md:px-6 md:first:border-l-0 md:first:pl-0"
              >
                <dt className="label text-muted">{fact.label}</dt>
                <dd className="mt-2 text-lg font-medium leading-[1.5]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="bg-signal">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-3 text-midnight md:px-10">
          <a
            href="#about"
            className="label group inline-flex items-center gap-3 text-midnight"
          >
            <span>Scroll</span>
            <ArrowDown
              size={14}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>
          <span className="label hidden md:inline">
            Frontend Developer, React.js
          </span>
        </div>
      </div>
    </section>
  );
}
