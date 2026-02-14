import { Award, Newspaper, Mic } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const recognitions = [
  { icon: Award, title: "Super Cop", desc: "Recognized as one of Rajasthan's most fearless officers" },
  { icon: Award, title: "Singham of Rajasthan", desc: "A title earned through real-life heroism, not cinema" },
  { icon: Newspaper, title: "Press Coverage", desc: "Featured in national and regional media for his extraordinary story" },
  { icon: Mic, title: "Motivational Speaker", desc: "Inspiring thousands with talks on resilience and justice" },
];

const RecognitionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="recognition" className="py-24 md:py-32 bg-muted/50">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            Recognition & <span className="text-gold">Media</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {recognitions.map((r, i) => (
            <div
              key={r.title}
              className={`flex items-start gap-5 bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-navy-deep flex items-center justify-center shrink-0">
                <r.icon className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-foreground">{r.title}</h3>
                <p className="text-muted-foreground font-sans text-sm mt-1">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
