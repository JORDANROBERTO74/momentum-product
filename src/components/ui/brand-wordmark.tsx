export function BrandWordmark({ className }: { className?: string }) {
  return (
    <svg
      height="22"
      viewBox="0 0 400 100"
      fill="none"
      aria-label="Momentum"
      className={className ?? "h-[22px] w-auto"}
    >
      <path
        d="M24 74V26l36 36 36-36v48"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="108" cy="26" r="7" fill="currentColor" />
    </svg>
  );
}
