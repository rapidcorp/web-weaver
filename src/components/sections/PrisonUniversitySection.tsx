import { GraduationCap, BookOpen, Scale } from "lucide-react";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

const degrees = [
  { icon: GraduationCap, title: "Bachelor of Arts", detail: "Completed during custody" },
  { icon: BookOpen, title: "Master of Arts", detail: "Self-study & determination" },
  { icon: Scale, title: "Bachelor of Law (LLB)", detail: "Mastered the law that failed him" },
];

const PrisonUniversitySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const yearsCount = useCountUp(7, 2000, isVisible);
  const degreesCount = useCountUp(3, 2000, isVisible);

  return (
    <section id="prison" className="py-24 md:py-32 bg-navy-deep text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--gold)/0.05)_0%,_transparent_60%)]" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            The <span className="text-gold">Prison University</span>
          </h2>
          <p className="mt-6 text-primary-foreground/60 font-sans max-w-2xl mx-auto text-lg">
            When the system tried to silence him, he chose to educate himself.
          </p>
        </div>

        {/* Stats */}
        <div
          className={`flex justify-center gap-16 mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="text-center">
            <span className="text-5xl md:text-7xl font-serif font-bold text-gold">{yearsCount}+</span>
            <p className="text-primary-foreground/50 font-sans text-sm mt-2">Years in Custody</p>
          </div>
          <div className="text-center">
            <span className="text-5xl md:text-7xl font-serif font-bold text-gold">{degreesCount}</span>
            <p className="text-primary-foreground/50 font-sans text-sm mt-2">Degrees Earned</p>
          </div>
        </div>

        {/* Degree cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {degrees.map((d, i) => (
            <div
              key={d.title}
              className={`bg-navy/50 border border-gold/10 rounded-lg p-8 text-center hover:border-gold/30 transition-all duration-700 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${0.4 + i * 0.15}s` }}
            >
              <d.icon className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold mb-2">{d.title}</h3>
              <p className="text-primary-foreground/50 font-sans text-sm">{d.detail}</p>
            </div>
          ))}
        </div>

        <blockquote
          className={`mt-16 text-center text-2xl md:text-3xl font-serif italic text-gold/80 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          "Those 7 years didn't break me. They made me."
        </blockquote>
      </div>
    </section>
  );
};

export default PrisonUniversitySection;
