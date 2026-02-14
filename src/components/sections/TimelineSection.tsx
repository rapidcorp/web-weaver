import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const timelineData = [
  { year: "1980s", title: "Humble Beginnings", desc: "Born in a small village in Rajasthan, growing up with a dream of serving the nation." },
  { year: "Early Career", title: "Joining the Police Force", desc: "Selected into Rajasthan Police, quickly earning respect for his dedication and bravery." },
  { year: "STF Era", title: "Special Task Force", desc: "Handpicked for the elite STF unit, taking on the state's most dangerous operations." },
  { year: "2007–2014", title: "The Dark Years", desc: "Falsely implicated and spent 7+ years in custody — but never broke. Earned 3 degrees during this time." },
  { year: "2014", title: "Complete Acquittal", desc: "Honorably acquitted by the Rajasthan High Court. Truth and justice prevailed." },
  { year: "2015+", title: "Return to Duty — CID", desc: "Reinstated and posted to CID, continuing to serve with distinction." },
  { year: "2026", title: "Sagwaan Releases", desc: "Debut film as producer — Sagwaan — releases to critical acclaim with IMDb 7.2/10." },
];

const TimelineItem = ({
  item,
  index,
}: {
  item: (typeof timelineData)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center mb-12 md:mb-16">
      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 w-full items-center">
        <div
          className={`transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : isLeft
              ? "opacity-0 -translate-x-10"
              : "opacity-0 translate-x-10"
          } ${isLeft ? "text-right" : "order-3 text-left"}`}
        >
          <span className="text-gold font-sans text-sm font-semibold tracking-wider uppercase">
            {item.year}
          </span>
          <h3 className="text-xl font-serif font-bold text-foreground mt-1">
            {item.title}
          </h3>
          <p className="text-muted-foreground font-sans text-sm mt-2 max-w-sm inline-block">
            {item.desc}
          </p>
        </div>
        <div className="flex flex-col items-center order-2">
          <div
            className={`w-4 h-4 rounded-full border-2 border-gold bg-background transition-all duration-500 ${
              isVisible ? "scale-100" : "scale-0"
            }`}
          />
        </div>
        <div className={isLeft ? "order-3" : ""} />
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-4 w-full">
        <div className="flex flex-col items-center">
          <div
            className={`w-3 h-3 rounded-full border-2 border-gold bg-background transition-all duration-500 ${
              isVisible ? "scale-100" : "scale-0"
            }`}
          />
          <div className="w-0.5 flex-1 bg-gold/20" />
        </div>
        <div
          className={`pb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        >
          <span className="text-gold font-sans text-xs font-semibold tracking-wider uppercase">
            {item.year}
          </span>
          <h3 className="text-lg font-serif font-bold text-foreground mt-1">
            {item.title}
          </h3>
          <p className="text-muted-foreground font-sans text-sm mt-1">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

const TimelineSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="journey" className="py-24 md:py-32 bg-muted/50">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            The <span className="text-gold">Journey</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-sans">
            A timeline of resilience, courage, and reinvention
          </p>
        </div>

        {/* Center line (desktop) */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gold/20 -translate-x-1/2" />
          {timelineData.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
