// ─── AuthorInfo ───────────────────────────────────────────────────────────────
// Editorial warm palette — light mode only.

import Image from 'next/image';

interface AuthorInfoProps {
  name: string;
  date: string;
  readingTime: string;
  /** Optional avatar src — falls back to initials */
  avatarSrc?: string;
  compact?: boolean;
}

export function AuthorInfo({
  name,
  date,
  readingTime,
  avatarSrc,
  compact = false,
}: AuthorInfoProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const formatted = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: compact ? 'short' : 'long',
    day: 'numeric',
  });

  return (
    <div className="flex items-center gap-3">
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <Image
          src={avatarSrc || '/optimized/nirajandhungel3.avif'}
          alt={name}
          width={compact ? 32 : 44}
          height={compact ? 32 : 44}
          className="rounded-full object-cover"
          style={{ 
            boxShadow: '0 0 0 2px #fff, 0 0 0 3px #ede9e3',
            background: '#f2ede8'
          }}
        />
      </div>

      {/* Text */}
      <div>
        <p
          className={`font-semibold leading-none ${compact ? 'text-sm' : 'text-base'}`}
          style={{ color: '#1a1714' }}
        >
          {name}
        </p>
        <p className={`mt-0.5 ${compact ? 'text-xs' : 'text-sm'}`} style={{ color: '#9a9390' }}>
          <time dateTime={new Date(date).toISOString()}>{formatted}</time>
          {' · '}
          <span>{readingTime}</span>
        </p>
      </div>
    </div>
  );
}
