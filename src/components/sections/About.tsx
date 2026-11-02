import Reveal from "@/components/common/Reveal";
import SectionHeader from "@/components/common/SectionHeader";

const facts = [
  { label: "Education", value: "Benha University, Faculty of Science" },
  { label: "Year", value: "Second year" },
  { label: "Self-study", value: "Front-End Development, ongoing" },
  { label: "Focus", value: "React.js, responsive design, REST APIs" },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1280px] -scroll-mt-4 px-5 py-16 md:px-10 md:py-16"
    >
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 md:col-span-3">
          <SectionHeader index="01" label="About" />
        </div>
        <Reveal className="col-span-12 mt-8 md:col-span-9 md:mt-0">
          <h2 className="text-4xl font-bold leading-[1.2] tracking-tight md:text-6xl">
            I build interfaces that are simple to use and easy to read.
          </h2>
        </Reveal>
      </div>

      <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-20">
        <Reveal className="col-span-12 space-y-6 text-lg leading-[1.5] text-ink/85 md:col-span-6 md:col-start-4">
          <p>
            I am a front-end developer and second-year Faculty of Science
            student at Benha University. Alongside my studies I am working
            through front-end development on my own, with a steady focus on
            React.js.
          </p>

          <Reveal className="md:block hidden">
            <p>
              I have deployed four projects live on Vercel and GitHub Pages.
              They cover an e-commerce store with login and protected pages, a
              task manager that keeps its data after a refresh, a multi-section
              gaming site built with plain JavaScript, and a responsive
              photography portfolio.
            </p>
          </Reveal>

          <Reveal>
            <p>
              I am most interested in the parts of a product people actually
              touch: forms with clear validation, data fetched from REST APIs
              and cached with TanStack React Query, and components that can be
              reused across pages. I care about readable code and interfaces
              that are simple to use.
            </p>
          </Reveal>

          <Reveal>
            <p>
              I am looking for a junior front-end role or internship where I can
              keep growing in the React ecosystem.
            </p>
          </Reveal>
        </Reveal>

        <Reveal
          delay={150}
          className="col-span-12 md:col-span-3 md:col-start-10 md:row-start-1"
        >
          <dl className="divide-y divide-ink/15 border-t border-ink">
            {facts.map((fact) => (
              <Reveal key={fact.label}>
                <div className="py-5">
                  <dt className="label text-muted">{fact.label}</dt>
                  <dd className="mt-2 text-base font-medium leading-[1.5]">
                    {fact.value}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
