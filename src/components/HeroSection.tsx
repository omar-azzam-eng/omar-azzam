import { Terminal, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Terminal badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-slide-up opacity-0">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="font-mono text-sm text-muted-foreground">Backend Developer</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up opacity-0 delay-100">
          <span className="text-foreground">Omar</span>{" "}
          <span className="gradient-text">Azzam</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto mb-12 animate-slide-up opacity-0 delay-200">
          Building robust, scalable, and secure backend systems.
          <br />
          <span className="font-mono text-primary">Databases</span> · <span className="font-mono text-primary">APIs</span> · <span className="font-mono text-primary">Security</span>
        </p>

        {/* CTA */}
        <div className="flex justify-center items-center animate-slide-up opacity-0 delay-300">
          <a
            href="#contact"
            className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all glow-hover"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToSkills}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float cursor-pointer"
        aria-label="Scroll to skills"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </button>
    </section>
  );
};

export default HeroSection;
