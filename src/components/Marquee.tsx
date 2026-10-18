const items = [
  "100% Raw & Unprocessed",
  "Lab-Tested Purity",
  "Single-Origin Jars",
  "Free UAE Shipping over 199 AED",
  "Cold-Extracted",
  "No Additives, Ever",
  "Harvested with Care",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-honey-200 bg-honey-500 py-3 text-cocoa-900">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-sm font-semibold">
            {t}
            <span className="text-cocoa-900/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
