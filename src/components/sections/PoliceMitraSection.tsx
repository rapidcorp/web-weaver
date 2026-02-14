import { Users, Heart, ShieldCheck, HandHeart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const missions = [
  { icon: ShieldCheck, text: "Bridging the gap between police and community" },
  { icon: Heart, text: "Helping citizens understand their rights and duties" },
  { icon: HandHeart, text: "Supporting victims and families through legal guidance" },
  { icon: Users, text: "Building trust through transparency and dialogue" },
];

const PoliceMitraSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="policemitra" className="py-24 md:py-32 bg-navy-deep text-primary-foreground">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            <span className="text-gold">Police Mitra</span> Initiative
          </h2>
          <p className="mt-4 text-primary-foreground/60 font-sans max-w-2xl mx-auto">
            A community engagement initiative designed to build trust between law
            enforcement and the citizens they serve.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {missions.map((m, i) => (
            <div
              key={m.text}
              className={`flex items-start gap-4 bg-navy/50 border border-gold/10 rounded-lg p-6 transition-all duration-700 hover:border-gold/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
            >
              <m.icon className="w-8 h-8 text-gold shrink-0 mt-1" />
              <p className="text-primary-foreground/80 font-sans">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoliceMitraSection;
