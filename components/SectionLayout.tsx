export default function SectionLayout({
  children,
  className = "",
  borderClass = "border-[#D4D4D4]",
  scrollX = false,
}: {
  children: React.ReactNode
  className?: string
  borderClass?: string
  scrollX?: boolean
}) {
  return (
    <section className={`${className}`}>
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
          <div
            className={`border-l border-r border-dashed ${borderClass} ${
              scrollX ? 'overflow-x-scroll' : ''
            }`}
          >
            {children}
          </div>
          <div />
        </div>
      </div>
    </section>
  )
}
