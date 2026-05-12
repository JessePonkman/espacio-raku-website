const props = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true
};

export const HeartIcon = (p) => (
  <svg {...props} {...p}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const SparkleIcon = (p) => (
  <svg {...props} {...p}>
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
  </svg>
);

export const LeafIcon = (p) => (
  <svg {...props} {...p}>
    <path d="M11 20A7 7 0 0 1 4 13c0-4 3-9 16-9 0 13-5 16-9 16Z" />
    <path d="M2 22 17 7" />
  </svg>
);

export const MoonIcon = (p) => (
  <svg {...props} {...p}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const UsersIcon = (p) => (
  <svg {...props} {...p}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const GlobeIcon = (p) => (
  <svg {...props} {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
  </svg>
);

export const FamilyIcon = (p) => (
  <svg {...props} {...p}>
    <circle cx="9" cy="6" r="3" />
    <circle cx="17" cy="8" r="2" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <path d="M15 21v-1a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v1" />
  </svg>
);

export const MailIcon = (p) => (
  <svg {...props} {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);

export const PinIcon = (p) => (
  <svg {...props} {...p}>
    <path d="M20 10c0 7-8 13-8 13S4 17 4 10a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const MessageIcon = (p) => (
  <svg {...props} {...p}>
    <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z" />
  </svg>
);

export const CheckIcon = (p) => (
  <svg {...props} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const ChevronDown = (p) => (
  <svg {...props} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ArrowRight = (p) => (
  <svg {...props} {...p}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const CalendarIcon = (p) => (
  <svg {...props} {...p}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export const InstagramIcon = (p) => (
  <svg {...props} {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
  </svg>
);

export const FacebookIcon = (p) => (
  <svg {...props} {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const WhatsAppIcon = (p) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" {...p}>
    <path fill="currentColor" d="M16 3C9 3 3.5 8.5 3.5 15.5c0 2.4.7 4.7 1.9 6.7L3 29l7-1.8c1.9 1 4 1.6 6 1.6 7 0 12.5-5.5 12.5-12.5S23 3 16 3zm0 22.7c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-4.1 1 1.1-4-.3-.4c-1-1.6-1.6-3.5-1.6-5.4 0-5.6 4.6-10.2 10.4-10.2s10.4 4.6 10.4 10.2c0 5.7-4.7 10.4-10.4 10.4zm5.7-7.6c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.2-.2.3-.4.5-.5.2-.2.2-.3.3-.5s0-.4 0-.5-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.3 1 2.7 1.1 2.9c.2.2 2 3.2 4.9 4.4.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
  </svg>
);

export const WifiIcon = (p) => (
  <svg {...props} {...p}>
    <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0" />
    <circle cx="12" cy="20" r="1" fill="currentColor" />
  </svg>
);

export const PoolIcon = (p) => (
  <svg {...props} {...p}>
    <path d="M2 12c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
    <path d="M2 7c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
    <path d="M2 17c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
    <path d="M8 5V3M16 5V3" />
  </svg>
);

export const CarIcon = (p) => (
  <svg {...props} {...p}>
    <path d="M19 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2z" />
    <path d="m17 7-2-4H9L7 7" />
    <circle cx="8" cy="17" r="2" />
    <circle cx="16" cy="17" r="2" />
  </svg>
);

export const WindIcon = (p) => (
  <svg {...props} {...p}>
    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
    <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
    <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
  </svg>
);

export const Logo = (p) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" {...p}>
    <path d="M10 38 L32 18 L54 38 L54 52 L10 52 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <circle cx="40" cy="30" r="4" fill="#e8d8b8" />
    <path d="M10 48 Q22 42 32 48 T54 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);
