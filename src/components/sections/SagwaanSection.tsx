import { Star, ExternalLink, Film } from "lucide-react";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const SagwaanSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const rating = useCountUp(9.6, 2000, isVisible, 1);

  return (
    <section id="sagwaan" className="py-24 md:py-32 bg-navy-deep text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cinematic-red/20 via-transparent to-navy-deep" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase">Now Streaming</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mt-4 mb-6">Sagwaan</h2>

            <div className="flex items-center gap-3 mb-6">
              <Star className="w-6 h-6 text-gold fill-gold" />
              <span className="text-3xl font-serif font-bold text-gold">{rating}</span>
              <span className="text-primary-foreground/50 font-sans">/10 on BookMyShow</span>
            </div>

            <p className="text-primary-foreground/70 font-sans leading-relaxed mb-8">
              A powerful cinematic journey based on real events — exploring themes of
              justice, courage, and the human spirit. Produced by Inspector Himanshu
              Singh Rajawat, featuring an ensemble cast that brings truth to the
              silver screen.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-gold text-navy-deep hover:bg-gold-light font-sans font-semibold"
                onClick={() => window.open("https://in.bookmyshow.com/movies/udaipur/sagwaan/ET00481696", "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View on BookMyShow
              </Button>
              <Button
                variant="outline"
                className="border-gold/30 text-gold hover:bg-gold/10 font-sans"
                onClick={() => window.open("https://www.youtube.com/watch?v=S9n0fD5OzW0", "_blank")}
              >
                <Film className="w-4 h-4 mr-2" />
                Watch Trailer
              </Button>
            </div>
          </div>

          {/* Movie Poster */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="aspect-[16/9] rounded-lg overflow-hidden relative shadow-2xl border border-gold/20">
              <img 
                src="/media/saagwan_poster.png" 
                alt="Sagwaan Movie Poster"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SagwaanSection;
