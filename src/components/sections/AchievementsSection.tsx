import { Shield, Scale, GraduationCap, Film } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const achievements = [
  {
    icon: Shield,
    title: "Police Excellence",
    stat: "20+ Years",
    desc: "Distinguished service in Rajasthan Police including STF and CID postings.",
  },
  {
    icon: Scale,
    title: "Legal Victory",
    stat: "Full Acquittal",
    desc: "Honorably acquitted by the Rajasthan High Court after 7+ years of wrongful custody.",
  },
  {
    icon: GraduationCap,
    title: "Academic Achievement",
    stat: "3 Degrees",
    desc: "BA, MA, and LLB — all earned during incarceration through sheer willpower.",
  },
  {
    icon: Film,
    title: "Cinematic Success",
    stat: "BookMyShow 9.6",
    desc: "Producer of Sagwaan — a film that tells the untold stories of real heroes.",
  },
];

const AchievementsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="achievements" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            <span className="text-gold">Achievements</span> That Define
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((a, i) => (
            <div
              key={a.title}
              className={`group bg-card border border-border rounded-lg p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-navy-deep flex items-center justify-center mx-auto mb-5 group-hover:bg-gold transition-colors duration-300">
                <a.icon className="w-7 h-7 text-gold group-hover:text-navy-deep transition-colors duration-300" />
              </div>
              <span className="text-2xl font-serif font-bold text-gold">{a.stat}</span>
              <h3 className="text-lg font-serif font-semibold text-foreground mt-2 mb-2">{a.title}</h3>
              <p className="text-muted-foreground font-sans text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
