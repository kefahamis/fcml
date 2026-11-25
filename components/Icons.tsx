const paths = {
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  phone: <path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A15 15 0 0 1 4 5a1 1 0 0 1 1-1z" />,
  badge: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m8.500 14-1.500 7 5-3 5 3-1.500-7" />
    </>
  ),
  can: (
    <>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.500" />
      <path d="M5 5.500v13c0 1.400 3.100 2.500 7 2.500s7-1.100 7-2.500v-13" />
      <path d="M5 9.500c0 1.400 3.100 2.500 7 2.500s7-1.100 7-2.500" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.500" />
      <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.600 5.600l2.100 2.100m8.600 8.600 2.100 2.100m0-12.800-2.100 2.100M7.700 16.300l-2.100 2.100" />
    </>
  ),
  // process steps
  design: (
    <>
      <path d="M4 20l1-4L16 5l3 3L8 19l-4 1z" />
      <path d="M13.500 7.500l3 3" />
      <path d="M14 20h6" />
    </>
  ),
  printing: (
    <>
      <rect x="3.500" y="4" width="13" height="5" rx="1" />
      <path d="M16.500 6.500H20v5h-8v3" />
      <rect x="10.500" y="14.500" width="3" height="6" rx="1" />
    </>
  ),
  assembling: (
    <>
      <ellipse cx="12" cy="4.500" rx="6" ry="2" />
      <path d="M12 8v2.500" />
      <ellipse cx="12" cy="13" rx="6" ry="2" />
      <path d="M6 13v5.500c0 1.100 2.700 2 6 2s6-.9 6-2V13" />
    </>
  ),
  delivery: (
    <>
      <path d="M2.500 6.500h11v9.500h-11z" />
      <path d="M13.500 9.500h4l3 3V16h-7" />
      <circle cx="6.500" cy="17.500" r="1.800" />
      <circle cx="17" cy="17.500" r="1.800" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export function Icon({ name }: { name: keyof typeof paths }) {
  return (
    <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
