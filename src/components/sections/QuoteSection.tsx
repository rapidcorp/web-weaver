import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const QuoteSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="quote" className="py-24 md:py-40 bg-background relative">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <span className="text-7xl md:text-9xl font-serif text-gold/20 leading-none">"</span>
        <blockquote className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-snug -mt-12 md:-mt-16">
          Justice delayed is not justice denied — it is justice{" "}
          <span className="text-gold">earned.</span>
        </blockquote>
        <p className="mt-8 text-muted-foreground font-sans text-lg">
          — Inspector Himanshu Singh Rajawat
        </p>
      </div>
    </section>
  );
};

export default QuoteSection;
