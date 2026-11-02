interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  label: string;
  aspectClassName: string;
  className?: string;
}

const corners = [
  'left-3 top-3 border-l border-t',
  'right-3 top-3 border-r border-t',
  'left-3 bottom-3 border-l border-b',
  'right-3 bottom-3 border-r border-b',
];

export default function ImagePlaceholder({
  src,
  alt,
  label,
  aspectClassName,
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div className={`group relative overflow-hidden border border-ink/20 bg-surface ${aspectClassName} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.02] motion-reduce:transform-none"
        />
      ) : (
        <div role="img" aria-label={`${label}, image to be added`} className="absolute inset-0 flex items-center justify-center">
          {corners.map((position) => (
            <span
              key={position}
              aria-hidden="true"
              className={`absolute h-5 w-5 border-ink/40 transition-colors duration-300 group-hover:border-signal ${position}`}
            />
          ))}
          <span className="label flex items-center gap-3 text-muted">
            <span aria-hidden="true" className="h-2 w-2 bg-signal" />
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
