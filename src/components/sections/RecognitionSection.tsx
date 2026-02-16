import { Award, Newspaper, Mic, ExternalLink, Youtube, FileText, Play, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const recognitions = [
  { icon: Award, title: "Super Cop", desc: "Recognized as one of Rajasthan's most fearless officers" },
  { icon: Award, title: "Singham of Rajasthan", desc: "A title earned through real-life heroism, not cinema" },
  { icon: Newspaper, title: "Press Coverage", desc: "Featured in national and regional media for his extraordinary story" },
  { icon: Mic, title: "Motivational Speaker", desc: "Inspiring thousands with talks on resilience and justice" },
];

const mediaCoverage = [
  {
    category: "Major Publications",
    icon: Newspaper,
    items: [
      {
        title: "Honest Towards His Responsibilities Even After Being In Jail For 7 Years",
        source: "ED Times",
        url: "https://edtimes.in/honest-towards-his-responsibilities-even-after-being-in-jail-for-7-years-himanshu-singh-rajawat/",
        type: "article"
      },
      {
        title: "Inspiring Story Of Himanshu Singh Rajawat To Keep Fighting During Tough Times",
        source: "Mid-day",
        url: "https://www.mid-day.com/amp/lifestyle/infotainment/article/inspiring-story-of-himanshu-singh-rajawat-to-keep-fighting-during-tough-times-23189583",
        type: "article"
      },
      {
        title: "इस सुपर कॉप के आगे फिल्मी दबंग-सिंघम भी फीके",
        source: "Navbharat Times",
        url: "https://navbharattimes.indiatimes.com/state/rajasthan/bharatpur/story-of-rajasthan-super-cop-himanshu-singh-rajawat-who-did-sohrabuddin-encounter/articleshow/97219234.cms",
        type: "article"
      },
      {
        title: "Sohrabuddin case: 2 Rajasthan cops get bail",
        source: "The Hindu",
        url: "https://www.thehindu.com/news/national/Sohrabuddin-case-2-Rajasthan-cops-get-bail/article11266215.ece",
        type: "article"
      }
    ]
  },
  {
    category: "Film & Entertainment",
    icon: Play,
    items: [
      {
        title: "Sagwaan Unveiled: Rajasthan Crime Thriller Redefines Bollywood Realism",
        source: "First India",
        url: "https://firstindia.co.in/news/press-releases/bollywood-music-director-duo-aikarth-purohit-and-kapil-paliwal-collaborate-with-actor-director-himanshu-singh-rajawat-for-the-rajasthan-based-crime-thriller-film-sagwaan",
        type: "article"
      },
      {
        title: "Film 'Sagwaan' Grand Premiere in Mumbai",
        source: "YouTube",
        url: "https://www.youtube.com/watch?v=98sODi88EqA",
        type: "video"
      },
      {
        title: "Sagwaan Movie Cast & Release Date",
        source: "Bollywood Hungama",
        url: "https://www.bollywoodhungama.com/movie/sagwaan/cast/",
        type: "article"
      },
      {
        title: "Sagwaan Movie - Showtimes, Reviews & Trailer",
        source: "Times of India",
        url: "https://timesofindia.indiatimes.com/entertainment/hindi/movie-details/sagwaan/movieshow/126547439.cms",
        type: "article"
      }
    ]
  },
  {
    category: "Legal & Official",
    icon: FileText,
    items: [
      {
        title: "Himanshu Singh Rajawat And Another v. State Of Maharashtra",
        source: "Bombay High Court",
        url: "https://www.casemine.com/judgement/in/5dc076d63321bc77c508cc91",
        type: "legal"
      },
      {
        title: "Himanshu Singh Rajawat - Wikidata",
        source: "Wikidata",
        url: "https://www.wikidata.org/wiki/Q111785698",
        type: "profile"
      }
    ]
  },
  {
    category: "Personal & Social",
    icon: Globe,
    items: [
      {
        title: "Himanshu Singh Rajawat - Udaipur",
        source: "About.me",
        url: "https://about.me/himanshusinghrajawat",
        type: "profile"
      },
      {
        title: "Himanshu Singh Rajawat - YouTube Channel",
        source: "YouTube",
        url: "https://www.youtube.com/c/himanshusinghrajawat",
        type: "channel"
      }
    ]
  }
];

const RecognitionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const getIcon = (type: string) => {
    switch (type) {
      case 'video':
      case 'channel':
        return Youtube;
      case 'legal':
        return FileText;
      default:
        return ExternalLink;
    }
  };

  return (
    <section id="recognition" className="py-24 md:py-32 bg-muted/50">
      <div className="max-w-6xl mx-auto px-6">
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

        {/* Original Recognition Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
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

        {/* Media Coverage Section */}
        <div className="space-y-12">
          <h3 className="text-2xl font-serif font-bold text-center text-foreground">
            Featured in <span className="text-gold">Media</span>
          </h3>
          
          {mediaCoverage.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-gold" />
                <h4 className="text-xl font-serif font-bold text-foreground">
                  {category.category}
                </h4>
                <div className="flex-1 h-0.5 bg-border" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => {
                  const Icon = getIcon(item.type);
                  return (
                    <a
                      key={itemIndex}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 rounded-lg border border-border bg-card hover:border-gold/50 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                          <Icon className="w-4 h-4 text-gold" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-serif font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-gold transition-colors text-sm">
                            {item.title}
                          </h5>
                          <p className="text-xs text-muted-foreground font-sans">
                            {item.source}
                          </p>
                        </div>
                        <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-gold transition-colors flex-shrink-0" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-gold/30 text-gold hover:bg-gold/10 font-sans"
            onClick={() => window.open("https://www.google.com/search?q=Himanshu+Singh+Rajawat+news", "_blank")}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View More Coverage
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
