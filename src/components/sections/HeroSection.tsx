import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-deep"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy/90 to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--gold)/0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Photo */}
        <div className="mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-gold shadow-2xl">
            <img 
              src="/hero2.png" 
              alt="Inspector Himanshu Singh Rajawat"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <p
          className="text-gold font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          The Singham of Rajasthan
        </p>
        <h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary-foreground mb-6 opacity-0 animate-fade-up leading-tight"
          style={{ animationDelay: "0.5s" }}
        >
          Inspector
          <br />
          <span className="text-gold">Himanshu Singh</span>
          <br />
          Rajawat
        </h1>
        <div
          className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-primary-foreground/70 text-sm md:text-lg font-sans opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <span>Police Officer</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span>Filmmaker</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span>Motivational Speaker</span>
        </div>
        <p
          className="mt-8 text-primary-foreground/50 font-sans text-sm md:text-base max-w-lg mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: "1.1s" }}
        >
          From the dusty villages of Rajasthan to the silver screen — a story of
          unbreakable will, justice, and reinvention.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/40 animate-bounce-subtle">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default HeroSection;
