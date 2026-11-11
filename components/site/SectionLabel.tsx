export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#A50034] mb-3 bg-[#A50034]/8 px-3 py-1 rounded-full">
      {children}
    </span>
  )
}
