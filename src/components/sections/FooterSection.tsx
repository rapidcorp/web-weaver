const FooterSection = () => (
  <footer className="bg-navy-deep text-primary-foreground/50 py-10">
    <div className="max-w-5xl mx-auto px-6 text-center font-sans text-sm">
      <p className="font-serif text-lg text-primary-foreground/80 mb-2">
        Inspector Himanshu Singh Rajawat
      </p>
      <p className="text-xs mb-4">Police Officer • Filmmaker • Motivational Speaker</p>
      <div className="w-12 h-0.5 bg-gold/30 mx-auto mb-4" />
      <p>© {new Date().getFullYear()} All rights reserved.</p>
      <p className="mt-2 text-xs text-primary-foreground/30 max-w-md mx-auto">
        This is an official personal website. All content is for informational
        purposes only.
      </p>
    </div>
  </footer>
);

export default FooterSection;
