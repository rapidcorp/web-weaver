import { Shield, Film } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const DualIdentitySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="identity" className="min-h-screen">
      <div
        ref={ref}
        className="grid md:grid-cols-2 min-h-screen"
      >
        {/* Police Career */}
        <div
          className={`bg-navy-deep text-primary-foreground p-10 md:p-16 flex flex-col justify-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <Shield className="w-12 h-12 text-gold mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            The <span className="text-gold">Officer</span>
          </h2>
          <ul className="space-y-4 font-sans text-primary-foreground/80">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
              <span>Rajasthan Police — decades of distinguished service</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
              <span>Special Task Force (STF) — elite operations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
              <span>Currently posted as CID Inspector</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
              <span>Known as "Super Cop" & "Singham of Rajasthan"</span>
            </li>
          </ul>
          <blockquote className="mt-8 border-l-2 border-gold pl-4 text-primary-foreground/60 italic font-serif">
            "Duty is not just a uniform — it's a promise to the people."
          </blockquote>
        </div>

        {/* Film Career */}
        <div
          className={`bg-cinematic-red text-primary-foreground p-10 md:p-16 flex flex-col justify-center transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <Film className="w-12 h-12 text-gold mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            The <span className="text-gold">Filmmaker</span>
          </h2>
          <ul className="space-y-4 font-sans text-primary-foreground/80">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
              <span>Producer of "Sagwaan" — BookMyShow 9.6/10</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
              <span>Film based on real events of courage and justice</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
              <span>Telling stories that mainstream cinema ignores</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
              <span>Bridging the gap between real life and reel life</span>
            </li>
          </ul>
          <blockquote className="mt-8 border-l-2 border-gold pl-4 text-primary-foreground/60 italic font-serif">
            "Cinema can change the way people think — and I intend to use it."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default DualIdentitySection;
