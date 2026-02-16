"use client";

const testimonials = [
  {
    name: "Anjali Singh",
    text: "Finally. An AI that doesn't make my product descriptions sound like everyone else's. It actually learned our voice after day one.",
  },
  {
    name: "Arjun Patel",
    text: "I asked it to research competitors and update pricing. It checked 12 sites and asked before changing anything.",
  },
  {
    name: "Kunal Mehta",
    text: "I used to spend 4 hours on launches. Cowork finished everything in 22 minutes.",
  },
  {
    name: "Deepak Mishra",
    text: "Managing 8 brands used to mean 8 different voices in my head. Now each one has its own Brand Memory. Cowork just knows.",
  },
  {
    name: "Ankur",
    text: "This is OpenClaw for my store. It lives on my Mac, talks to my catalog, and actually does stuff.",
  },
  {
    name: "Pooja Malhotra",
    text: "The permission system is chef's kiss. It asks before anything dangerous. I trust it with my store.",
  },
  {
    name: "Pankaj Goyal",
    text: "Week 1: skeptical. Week 4: can't imagine running my store without it. The learning compounds.",
  },
  {
    name: "Kavya",
    text: "Competitor launched a new collection. Cowork delivered a full analysis in 3 minutes.",
  },
  {
    name: "Sneha Chatterjee",
    text: "It remembered that my customers hate the word 'premium.' From a conversation we had two weeks ago.",
  },
];

function Column({ items, reverse = false }: any) {
  return (
    <div className="relative h-[520px] overflow-hidden">

      {/* Top Fade */}
      <div className="absolute top-0 left-0 w-full h-20 z-10 pointer-events-none bg-gradient-to-b from-[#f6f6f6] to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 z-10 pointer-events-none bg-gradient-to-t from-[#f6f6f6] to-transparent" />

      {/* Ticker */}
      <div
        className={`flex flex-col gap-6 ${
          reverse ? "animate-ticker-down" : "animate-ticker-up"
        }`}
      >
        {[...items, ...items].map((t: any, i: number) => (
          <div
            key={i}
            className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm"
          >
            <p className="text-black/80 mb-4 leading-relaxed">
              “{t.text}”
            </p>
            <div className="font-medium text-sm text-black/70">
              {t.name}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}


export default function Testimonial() {
  const col1 = testimonials.slice(0, 3);
  const col2 = testimonials.slice(3, 6);
  const col3 = testimonials.slice(6, 9);

  return (
    <section className="relative bg-[#f6f6f6] py-28 overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            Real users. Real outcomes.
          </h2>

          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            How teams use Cowork to run their stores better, every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Column items={col1} />
          <Column items={col2} reverse />
          <Column items={col3} />
        </div>
      </div>
    </section>
  );
}
