import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navLinks } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTheme } from '@/hooks/useTheme';
import ThemeToggle from '@/components/layout/ThemeToggle';

const sectionIds = navLinks.map((link) => link.href.slice(1));

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-canvas transition-colors duration-500">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-6 px-5 md:px-10">
        <a href="#top" aria-label="Youssef Beshir, back to top" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center bg-ink text-md font-bold tracking-tight text-canvas transition-colors duration-300 group-hover:bg-signal group-hover:text-midnight">
            &yen;W
          </span>
          <span className="font-medium">Youssef W<span className="text-signal">.</span> Beshir</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    className="group label relative block py-2 text-ink"
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-px h-[2px] origin-left bg-signal transition-transform duration-300 ease-out-expo ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={toggle} />
          <a
            href="#contact"
            className="group hidden items-center gap-2 bg-ink px-4 py-2.5 text-sm font-medium text-canvas transition-colors duration-300 hover:bg-signal hover:text-midnight md:inline-flex"
          >
            Contact
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center border border-ink transition-colors duration-300 hover:bg-ink hover:text-canvas md:hidden"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-canvas md:hidden">
          <nav aria-label="Mobile" className="flex min-h-full flex-col px-5 py-8">
            <ul className="flex flex-col">
              {navLinks.map((link, index) => {
                const isActive = active === link.href.slice(1);
                return (
                  <li key={link.href} className="border-t border-ink/15 last:border-b">
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={isActive ? 'location' : undefined}
                      className={`group flex items-center justify-between py-5 text-2xl font-bold tracking-tight transition-colors hover:text-signal ${
                        isActive ? 'text-signal' : ''
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="label text-muted transition-colors group-hover:text-signal">0{index + 1}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href="#contact"
              onClick={closeMenu}
              className="group mt-8 flex items-center justify-center gap-2 bg-ink px-6 py-4 text-base font-medium text-canvas transition-colors hover:bg-signal hover:text-midnight"
            >
              Contact me
              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
