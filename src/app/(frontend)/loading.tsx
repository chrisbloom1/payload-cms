export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="flex min-h-[60vh] items-center justify-center bg-bloom-cream"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-bloom-navy/20 border-t-bloom-orange" />
        <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-bloom-navy/60">
          Loading
        </span>
      </div>
    </div>
  )
}
