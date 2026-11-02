import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import { profile } from "@/data/portfolio";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

const socialLinks = [
  {
    label: "WhatsApp",
    value: "wa.me/+20 112 904 1022",
    href: profile.whatsapp,
    icon: FaWhatsapp,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/youssef-waleed-beshir",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Youssef-W-Bashir",
    href: profile.github,
    icon: Github,
  },
  {
    label: "Facebook",
    value: "www.facebook.com/joe.waleed.779381",
    href: profile.facebook,
    icon: FaFacebook,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="-scroll-mt-4 bg-panel text-panel-ink">
      <div className="mx-auto max-w-[1280px] px-5 pb-10 pt-16 md:px-10 md:pt-16">
        <p className="label flex items-center gap-3">
          <span className="h-2 w-2 bg-signal" aria-hidden="true" />
          <span>05</span>
          <span className="opacity-60">/</span>
          <span>Contact</span>
        </p>

        <div className="mt-8 grid grid-cols-12 items-end gap-x-6 gap-y-6">
          <Reveal className="col-span-12 md:col-span-7">
            <h2 className="text-[clamp(2rem,6vw,5.5rem)] font-bold leading-[1.04] tracking-[-0.03em]">
              Let&rsquo;s build <span className="text-signal">something</span>{" "}
              together.
            </h2>
          </Reveal>
          <Reveal
            delay={120}
            className="col-span-12 md:col-span-4 md:col-start-9"
          >
            <p className="text-lg leading-[1.5] opacity-70">
              Open to junior front-end roles and internships. Email is the
              fastest way to reach me.
            </p>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 flex flex-col gap-8 hover:bg-signal p-6 hover:text-midnight transition-colors duration-300 bg-midnight text-gallery md:p-10"
          >
            <span className="flex items-center justify-between gap-6">
              <span className="label flex items-center gap-3">
                <Mail size={16} aria-hidden="true" />
                Email
              </span>
              <ArrowUpRight
                size={32}
                aria-hidden="true"
                className="shrink-0 transition-transform duration-300 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
            <span className="break-all text-[clamp(1.5rem,4.5vw,3.75rem)] font-bold leading-[1.1] tracking-tight">
              {profile.email}
            </span>
          </a>
        </Reveal>

        <ul className="mt-6 grid md:grid-cols-2 md:gap-6">
          {socialLinks.map(({ label, value, href, icon: Icon }) => (
            <Reveal key={label} delay={240}>
              <li>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label}, ${value} (opens in a new tab)`}
                  className="group flex items-center justify-between gap-6 border-t border-current-soft py-6 transition-colors duration-300 hover:border-signal md:py-8"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <Icon
                      size={20}
                      aria-hidden="true"
                      className="shrink-0 opacity-70"
                    />
                    <span className="flex min-w-0 flex-col gap-2">
                      <span className="label opacity-70">{label}</span>
                      <span className="break-all text-lg font-bold leading-[1.2] tracking-tight md:text-xl">
                        {value}
                      </span>
                    </span>
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-current-soft transition-colors duration-300 group-hover:border-signal group-hover:bg-signal group-hover:text-midnight">
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>

      <footer className="border-t border-current-soft md:mt-6">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-10">
          <p className="label opacity-70">&copy; 2026 {profile.name}</p>
          <p className="label opacity-70">Frontend Developer, Menufia, Egypt</p>
        </div>
      </footer>
    </section>
  );
}
