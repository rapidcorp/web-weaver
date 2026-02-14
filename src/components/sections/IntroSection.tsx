import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const IntroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="intro" className="py-24 md:py-32 bg-background">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="w-16 h-0.5 bg-gold mx-auto mb-10" />
        <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif leading-relaxed text-foreground/90 italic">
          "Born in a small village in Rajasthan, he rose through the ranks of the
          police force, survived seven years of wrongful custody, earned three
          degrees behind bars, was fully acquitted by the High Court, and
          returned to duty — only to then produce a critically acclaimed film."
        </blockquote>
        <div className="w-16 h-0.5 bg-gold mx-auto mt-10" />
        <p className="mt-8 text-muted-foreground font-sans text-base md:text-lg">
          This is the story of a man who turned every obstacle into an
          opportunity.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
