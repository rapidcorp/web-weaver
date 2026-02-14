import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "intro", label: "Story" },
  { id: "journey", label: "Journey" },
  { id: "identity", label: "Identity" },
  { id: "prison", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "sagwaan", label: "Sagwaan" },
  { id: "recognition", label: "Recognition" },
  { id: "quote", label: "Quote" },
  { id: "policemitra", label: "Police Mitra" },
  { id: "contact", label: "Contact" },
];

const FloatingNav = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          title={label}
          className="group flex items-center gap-2 justify-end"
        >
          <span
            className={`text-xs font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
              active === id ? "text-gold" : "text-muted-foreground"
            }`}
          >
            {label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === id
                ? "w-3 h-3 bg-gold"
                : "w-2 h-2 bg-muted-foreground/40 group-hover:bg-gold/60"
            }`}
          />
        </a>
      ))}
    </nav>
  );
};

export default FloatingNav;
