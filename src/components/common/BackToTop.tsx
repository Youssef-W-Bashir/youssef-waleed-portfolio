import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const SHOW_AFTER_PX = 400;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center bg-ink text-canvas shadow-[4px_4px_0_0_#E54835] transition-[opacity,transform,visibility,background-color,color] duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-signal hover:text-midnight focus-visible:bg-signal focus-visible:text-midnight md:bottom-8 md:right-8 ${
        visible ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}
