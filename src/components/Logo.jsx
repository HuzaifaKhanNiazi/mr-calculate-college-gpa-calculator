export function LogoIcon({ size = 38 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      {/* Calculator body */}
      <rect x="11" y="3" width="42" height="58" rx="7" fill="#eaf3ff" />
      {/* Screen */}
      <rect x="17" y="9" width="30" height="15" rx="3.5" fill="#173a63" />
      {/* Keys */}
      <g fill="#173a63">
        <rect x="17" y="30" width="8" height="7.5" rx="2" />
        <rect x="28" y="30" width="8" height="7.5" rx="2" />
        <rect x="39" y="30" width="8" height="7.5" rx="2" />
        <rect x="17" y="41" width="8" height="7.5" rx="2" />
        <rect x="28" y="41" width="8" height="7.5" rx="2" />
        <rect x="17" y="52" width="8" height="5" rx="2" />
        <rect x="28" y="52" width="8" height="5" rx="2" />
      </g>
      {/* "=" key */}
      <rect x="39" y="41" width="8" height="16" rx="2" fill="#3d8fe0" />
    </svg>
  );
}
