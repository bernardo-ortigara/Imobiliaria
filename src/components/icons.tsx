import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** logo — 44x28 */
export function LogoMark(props: IconProps) {
  return (
    <svg viewBox="0 0 360 230" preserveAspectRatio="none" fill="none" aria-hidden="true" {...props}><g>
<path d="M222.179 34.4615C213.702 34.4615 205.941 37.3867 199.745 42.3132C197.082 44.4308 191.005 51.5196 188.422 55.4872L132.183 140.718C120.933 160.821 96.6666 178.051 70.31 178.051C31.4789 178.051 0 145.908 0 106.256C0 66.6052 31.4789 34.4615 70.31 34.4615C85.9932 34.4615 100.477 39.7048 112.172 48.5684L132.183 77.5385C125.887 72.2936 79.0693 68.9231 70.31 68.9231C50.1178 68.9231 33.7488 85.6378 33.7488 106.256C33.7488 126.875 50.1178 143.59 70.31 143.59C83.6389 143.59 95.6216 134.974 101.691 125.425L160.316 36.4105C164.144 30.5297 172.557 20.2536 179.01 15.1227C190.923 5.65096 205.928 0 222.179 0C240.466 0 257.122 7.12865 269.628 18.8129C255.433 21.4517 242.33 27.2908 231.064 35.5715C228.22 34.8464 225.244 34.4615 222.179 34.4615Z" fill="url(#svg221603868_2092_paint0_linear_2042_7)" strokeWidth="1"></path>
<path d="M131.821 189.538C140.298 189.538 148.059 186.613 154.255 181.687C156.918 179.569 162.995 172.48 165.578 168.513L221.817 83.2821C233.067 63.1795 257.333 45.9487 283.69 45.9487C322.521 45.9487 354 78.0924 354 117.744C354 157.395 322.521 189.538 283.69 189.538C268.007 189.538 253.523 184.295 241.828 175.432L220.771 146.462C227.067 151.706 274.931 155.077 283.69 155.077C303.882 155.077 320.251 138.362 320.251 117.744C320.251 97.125 303.882 80.4103 283.69 80.4103C270.361 80.4103 258.378 89.0256 252.309 98.575L193.684 187.59C189.856 193.47 181.443 203.746 174.99 208.877C163.077 218.349 148.072 224 131.821 224C113.534 224 96.8777 216.871 84.3719 205.187C98.5674 202.548 111.67 196.709 122.936 188.429C125.78 189.154 128.756 189.538 131.821 189.538Z" fill="url(#svg221603868_2092_paint1_linear_2042_7)" strokeWidth="1"></path>
<defs>
<linearGradient id="svg221603868_2092_paint0_linear_2042_7" x1="85.55" y1="35.9845" x2="289.118" y2="405.313" gradientUnits="userSpaceOnUse">
<stop stopOpacity="0.4"></stop>
<stop offset="0.276697"></stop>
</linearGradient>
<linearGradient id="svg221603868_2092_paint1_linear_2042_7" x1="85.55" y1="35.9845" x2="289.118" y2="405.313" gradientUnits="userSpaceOnUse">
<stop stopOpacity="0.4"></stop>
<stop offset="0.276697"></stop>
</linearGradient>
</defs>
</g></svg>
  );
}

/** arrowSuffix — 20x20, default color rgb(255, 255, 255) */
export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g><path d="M 16 0 L 0 0" fill="none" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="1.5" stroke="currentColor" transform="translate(4 12)"></path><path d="M 0 15.321 L 6.573 8.748 C 6.716 8.606 6.83 8.437 6.908 8.25 C 6.986 8.063 7.026 7.863 7.026 7.661 C 7.026 7.458 6.986 7.258 6.908 7.071 C 6.83 6.885 6.716 6.715 6.573 6.573 L 0 0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(12.968 4.339)"></path></g></svg>
  );
}

/** bank — 56x56, default color rgba(0, 0, 0, 0.62) */
export function BankIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g><path d="M 12.5 0 L 12.5 7.75 M 0 7.75 L 0 0 M 4 7.75 L 4 0 M 8.5 7.75 L 8.5 0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" stroke="currentColor" transform="translate(5.75 11.5)"></path><path d="M 7.25 0 L 14.5 6.5 L 0 6.5 Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" stroke="currentColor" transform="translate(4.75 4.75)"></path><path d="M 0 0 L 14.5 0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" stroke="currentColor" transform="translate(4.75 19.25)"></path></g></svg>
  );
}

/** doc — 56x56, default color rgba(0, 0, 0, 0.62) */
export function DocumentIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g><path d="M 2 14.5 L 10.5 14.5 C 11.605 14.5 12.5 13.605 12.5 12.5 L 12.5 4.25 L 8.25 0 L 2 0 C 0.895 0 0 0.895 0 2 L 0 12.5 C 0 13.605 0.895 14.5 2 14.5 Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" stroke="currentColor" transform="translate(5.75 4.75)"></path><path d="M 4.25 4.25 L 0 4.25 L 0 0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" stroke="currentColor" transform="translate(13.75 5)"></path><path d="M 0 0 L 4.5 0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" stroke="currentColor" transform="translate(9.75 15.25)"></path><path d="M 0 0 L 4.5 0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" stroke="currentColor" transform="translate(9.75 12.25)"></path></g></svg>
  );
}

/** area — 20x20, default color rgb(115, 115, 125) */
export function AreaIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g><path d="M 1.5 15 C 0.672 15 0 14.328 0 13.5 L 0 1.5 C 0 0.672 0.672 0 1.5 0 L 13.5 0 C 14.328 0 15 0.672 15 1.5 L 15 13.5 C 15 14.328 14.328 15 13.5 15 Z" fillOpacity="0" fill="currentColor" transform="translate(4.5 4.5)" strokeWidth="1"></path><path d="M 4.5 4.5 L 0 4.5 L 0 0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(15 4.5)"></path><path d="M 0 0 L 4.5 0 L 4.5 4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(4.5 15)"></path><path d="M 0 4.5 L 0 0 L 4.5 0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(15 15)"></path><path d="M 4.5 0 L 4.5 4.5 L 0 4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(4.5 4.5)"></path></g></svg>
  );
}

/** bed — 20x20, default color rgb(115, 115, 125) */
export function BedIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g><path d="M 0 0 L 9.75 0 C 11.407 0 12.75 1.343 12.75 3 L 12.75 8.25 L 12.75 8.25 L 0 8.25 L 0 8.25 L 0 0 Z" fillOpacity="0" fill="currentColor" transform="translate(10.5 7.5)" strokeWidth="1"></path><path d="M 0 8.25 L 0 0 L 9.75 0 C 11.407 0 12.75 1.343 12.75 3 L 12.75 8.25" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(10.5 7.5)"></path><path d="M 0 15 L 0 0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(2.25 4.5)"></path><path d="M 0 0 L 21 0 L 21 3.75" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(2.25 15.75)"></path><path d="M 8.25 0 L 0 0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(2.25 7.5)"></path></g></svg>
  );
}

/** bath — 20x20, default color rgb(115, 115, 125) */
export function BathIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g><path d="M 17.25 0 L 17.25 3.75 L 11.25 3.75 L 11.25 0 L 0 0 L 0 3.75 C 0 6.235 2.015 8.25 4.5 8.25 L 16.5 8.25 C 18.985 8.25 21 6.235 21 3.75 L 21 0 Z" fillOpacity="0" fill="currentColor" transform="translate(1.5 9.75)" strokeWidth="1"></path><path d="M 0 0 L 0 2.25" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(6.75 18)"></path><path d="M 0 0 L 0 2.25" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(17.25 18)"></path><path d="M 0 4.5 L 0 0 L 6 0 L 6 4.5 Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(12.75 9)"></path><path d="M 17.25 0 L 21 0 L 21 3.75 C 21 6.235 18.985 8.25 16.5 8.25 L 4.5 8.25 C 2.015 8.25 0 6.235 0 3.75 L 0 0 L 11.25 0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(1.5 9.75)"></path><path d="M 0 6.75 L 0 1.875 C 0 0.839 0.839 0 1.875 0 C 2.775 -0.002 3.555 0.622 3.75 1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(5.25 3)"></path></g></svg>
  );
}

/** refresh — 52x52, default color rgba(0, 0, 0, 0.46) */
export function RefreshIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g><path d="M 2.5 0 L 0 2.25 L 2.5 4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" stroke="currentColor" transform="translate(8.75 4.75)"></path><path d="M 0 4.5 L 2.5 2.25 L 0 0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" stroke="currentColor" transform="translate(12.75 14.75)"></path><path d="M 0 0 L 3.5 0 C 6.814 0 9.5 2.686 9.5 6 L 9.5 6.25" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" stroke="currentColor" transform="translate(9.75 7)"></path><path d="M 9.5 6.25 L 6 6.25 C 2.686 6.25 0 3.564 0 0.25 L 0 0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" stroke="currentColor" transform="translate(4.75 10.75)"></path></g></svg>
  );
}

/** building — 52x52, default color rgba(0, 0, 0, 0.46) */
export function BuildingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g><path d="M 0 2 C 0 0.895 0.895 0 2 0 L 10.5 0 C 11.605 0 12.5 0.895 12.5 2 L 12.5 14.5 L 0 14.5 Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" stroke="currentColor" transform="translate(5.75 4.75)"></path><path d="M 14.5 0 L 0 0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" stroke="currentColor" transform="translate(4.75 19.25)"></path><path d="M 0 2 C 0 0.895 0.895 0 2 0 L 2.5 0 C 3.605 0 4.5 0.895 4.5 2 L 4.5 5.5 L 0 5.5 Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" stroke="currentColor" transform="translate(9.75 13.75)"></path><path d="M 1 0.5 C 1 0.776 0.776 1 0.5 1 C 0.224 1 0 0.776 0 0.5 C 0 0.224 0.224 0 0.5 0 C 0.776 0 1 0.224 1 0.5 Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" stroke="currentColor" transform="translate(9.5 9.5)"></path><path d="M 1 0.5 C 1 0.776 0.776 1 0.5 1 C 0.224 1 0 0.776 0 0.5 C 0 0.224 0.224 0 0.5 0 C 0.776 0 1 0.224 1 0.5 Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" stroke="currentColor" transform="translate(13.5 9.5)"></path></g></svg>
  );
}

/** briefcase — 52x52, default color rgba(0, 0, 0, 0.46) */
export function BriefcaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g><path d="M 0 2 C 0 0.895 0.895 0 2 0 L 12.5 0 C 13.605 0 14.5 0.895 14.5 2 L 14.5 9.5 C 14.5 10.605 13.605 11.5 12.5 11.5 L 2 11.5 C 0.895 11.5 0 10.605 0 9.5 Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" stroke="currentColor" transform="translate(4.75 7.75)"></path><path d="M 0 2.75 L 0 2 C 0 0.895 0.895 0 2 0 L 4.5 0 C 5.605 0 6.5 0.895 6.5 2 L 6.5 2.75" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" stroke="currentColor" transform="translate(8.75 4.75)"></path><path d="M 0 0 L 14 0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" stroke="currentColor" transform="translate(5 13.25)"></path><path d="M 0 0 L 0 2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" stroke="currentColor" transform="translate(8.75 11.75)"></path><path d="M 0 0 L 0 2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" stroke="currentColor" transform="translate(15.25 11.75)"></path></g></svg>
  );
}

/** users — 52x52, default color rgba(0, 0, 0, 0.46) */
export function UsersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g><path d="M 0.914 5.25 L 8.35 5.25 C 8.915 5.25 9.359 4.782 9.247 4.229 C 8.936 2.701 7.922 0 4.632 0 C 1.342 0 0.328 2.701 0.018 4.229 C -0.095 4.782 0.349 5.25 0.914 5.25 Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" stroke="currentColor" transform="translate(4.868 14)"></path><path d="M 0 0 C 2.079 0 2.93 2.148 3.274 3.696 C 3.459 4.532 2.783 5.25 1.927 5.25 L 1 5.25" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" stroke="currentColor" transform="translate(15.75 14)"></path><path d="M 0 2.75 C 0 1.231 1.231 0 2.75 0 C 4.269 0 5.5 1.231 5.5 2.75 C 5.5 4.269 4.269 5.5 2.75 5.5 C 1.231 5.5 0 4.269 0 2.75 Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" stroke="currentColor" transform="translate(6.75 4.75)"></path><path d="M 0 5.5 C 1.519 5.5 2.5 4.269 2.5 2.75 C 2.5 1.231 1.519 0 0 0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" stroke="currentColor" transform="translate(14.75 4.75)"></path></g></svg>
  );
}

/** linkedin — 25x25, default color rgba(0, 0, 0, 0.7) */
export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g><path d="M 0.75 18 C 0.336 18 0 17.664 0 17.25 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 17.25 0 C 17.664 0 18 0.336 18 0.75 L 18 17.25 C 18 17.664 17.664 18 17.25 18 Z" fillOpacity="0" fill="currentColor" transform="translate(3 3)" strokeWidth="1"></path><path d="M 0.75 18 C 0.336 18 0 17.664 0 17.25 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 17.25 0 C 17.664 0 18 0.336 18 0.75 L 18 17.25 C 18 17.664 17.664 18 17.25 18 Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" stroke="currentColor" transform="translate(3 3)"></path><path d="M 0 0 L 0 6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" stroke="currentColor" transform="translate(11.25 10.5)"></path><path d="M 0 0 L 0 6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" stroke="currentColor" transform="translate(8.25 10.5)"></path><path d="M 0 2.625 C 0 1.175 1.175 0 2.625 0 C 4.075 0 5.25 1.175 5.25 2.625 L 5.25 6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" stroke="currentColor" transform="translate(11.25 10.5)"></path><path d="M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z" fill="currentColor" transform="translate(7.125 6.75)" strokeWidth="1"></path></g></svg>
  );
}

/** twitter — 25x25, default color rgba(0, 0, 0, 0.7) */
export function TwitterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g><path d="M 4.5 12 C 4.5 12 -0.67 9 0.073 0.75 C 0.073 0.75 3.791 4.5 8.25 5.25 L 8.25 3.75 C 8.25 1.688 9.938 -0.025 12 0 C 13.486 0.018 14.827 0.895 15.438 2.25 L 18.75 2.25 L 15.75 5.25 C 15.351 11.517 10.117 16.5 3.75 16.5 C 0.75 16.5 0 15.375 0 15.375 C 0 15.375 3 14.25 4.5 12 Z" fillOpacity="0" fill="currentColor" transform="translate(3.75 4.5)" strokeWidth="1"></path><path d="M 4.5 12 C 4.5 12 -0.67 9 0.073 0.75 C 0.073 0.75 3.791 4.5 8.25 5.25 L 8.25 3.75 C 8.25 1.688 9.938 -0.025 12 0 C 13.486 0.018 14.827 0.895 15.438 2.25 L 18.75 2.25 L 15.75 5.25 C 15.351 11.517 10.117 16.5 3.75 16.5 C 0.75 16.5 0 15.375 0 15.375 C 0 15.375 3 14.25 4.5 12 Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" stroke="currentColor" transform="translate(3.75 4.5)"></path></g></svg>
  );
}

/** arrowLeft — 24x24, default color rgb(17, 17, 18) */
export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 256 256" fill="none" aria-hidden="true" {...props}><g><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" strokeWidth="1" fill="currentColor"></path></g></svg>
  );
}

/** quote — 48x40, default color rgb(0, 0, 0) */
export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 69 57" preserveAspectRatio="none" fill="none" aria-hidden="true" {...props}><g>
<path opacity="0.1" d="M47.8416 57L40.8726 50.6572L59.1429 34.0286V31.4H39.4286V-3.8147e-06H69V37.7428L47.8416 57ZM0 31.4H19.7143V34.0286L1.44408 50.6572L8.41307 57L29.5714 37.7428V-3.8147e-06H0V31.4Z" fill="currentColor" strokeWidth="1"></path>
</g></svg>
  );
}

/** arrowCta — 18x18, default color rgb(255, 255, 255) */
export function ArrowCtaIcon(props: IconProps) {
  return (
    <svg fill="none" aria-hidden="true" {...props}><g><path d="M 11.885 9.853 L 2.848 9.853 L 2.848 8.147 L 11.885 8.147 L 7.783 4.045 L 9 2.848 L 15.152 9 L 9 15.152 L 7.783 13.954 Z" fill="currentColor" strokeWidth="1"></path></g></svg>
  );
}
