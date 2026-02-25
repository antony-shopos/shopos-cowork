export default function SectionLayout({
  children,
  className = "",
  borderClass = "border-[#E5E5E5]",
}: {
  children: React.ReactNode
  className?: string
  borderClass?: string
}) {
  return (
    <section className={`overflow-hidden ${className}`}>
      <div className="max-w-[1460px] mx-auto w-full">
        <div
          className="
            grid
            grid-cols-[20px_1fr_20px]
            md:grid-cols-[120px_1fr_120px]
            lg:grid-cols-[208px_1fr_208px]
          "
        >
          <div />
          <div className={`border-l border-r border-dashed ${borderClass}`}>
            {children}
          </div>
          <div />
        </div>
      </div>
    </section>
  )
}