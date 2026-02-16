import { useState } from "react";
import { Send, Instagram, Youtube, Mail as MailIcon, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useToast } from "@/hooks/use-toast";

const categories = ["Media Inquiry", "Speaking Event", "Police Mitra", "Film Collaboration", "Other"];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", category: categories[0], message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", category: categories[0], message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="max-w-3xl mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            Get in <span className="text-gold">Touch</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-sans">
            For media inquiries, speaking engagements, or collaborations
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`space-y-5 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="font-sans"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="font-sans"
            />
          </div>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm font-sans text-foreground"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <Textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            maxLength={1000}
            rows={5}
            className="font-sans"
          />
          <Button type="submit" className="w-full bg-gold text-navy-deep hover:bg-gold-light font-sans font-semibold">
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
          <p className="text-xs text-muted-foreground text-center font-sans">
            All communications are subject to security protocols. Response times may vary.
          </p>
        </form>

        {/* Social links */}
        <div className="flex justify-center gap-4 mt-10">
          {[
            { icon: Instagram, href: "https://instagram.com/@himanshusinghrajawat_cop" },
            { icon: Facebook, href: "https://www.facebook.com/rajawathimanshusingh/" },
            { icon: Youtube, href: "https://www.youtube.com/c/himanshusinghrajawat" },
            { icon: MailIcon, href: "mailto:contact@himanshurajawat.com" },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
