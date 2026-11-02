import { Moon, Sun } from 'lucide-react';
import type { Theme } from '@/hooks/useTheme';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      className="group flex h-10 w-10 items-center justify-center border border-ink transition-colors duration-300 hover:bg-ink hover:text-canvas"
    >
      {isDark ? (
        <Sun size={18} aria-hidden="true" className="transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
      ) : (
        <Moon size={18} aria-hidden="true" className="transition-transform duration-500 ease-out-expo group-hover:-rotate-12" />
      )}
    </button>
  );
}
