import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

// SVGs extracted from the original /listings/<slug> page (stroke widths resolved from computed styles).

/** location pin — 18x18, default color rgba(0, 0, 0, 0.7) */
export function LocationPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M 0 3 C 0 1.343 1.343 0 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(9 3)" />
      <path d="M 0 0 L 0 7.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(12 9)" />
      <path d="M 13.5 0 C 17.023 0.563 19.5 1.902 19.5 3.462 C 19.5 5.533 15.135 7.212 9.75 7.212 C 4.365 7.212 0 5.533 0 3.462 C 0 1.902 2.477 0.564 6 0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(2.25 13.038)" />
    </svg>
  );
}

/** Phosphor "Star" (fill) — 15x15 in the rating row */
export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
    </svg>
  );
}

/** Phosphor "CaretDown" (regular) — 24x24 accordion toggle; flipped when open */
export function CaretDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
    </svg>
  );
}
