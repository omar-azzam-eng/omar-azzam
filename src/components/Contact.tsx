import { Mail, Phone, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-widest uppercase mb-4 block">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind? Let's discuss how I can help build your
            backend infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:omar.azzam.eng@gmail.com"
            className="group p-8 rounded-xl glass glow-hover flex items-center gap-6"
          >
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <div>
              <span className="text-muted-foreground text-sm block mb-1">
                Email
              </span>
              <span className="font-mono text-foreground text-lg">
                omar.azzam.eng@gmail.com
              </span>
            </div>
          </a>
          <a
            href="tel:+963959984200"
            className="group p-8 rounded-xl glass glow-hover flex items-center gap-6"
          >
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <div>
              <span className="text-muted-foreground text-sm block mb-1">
                Phone
              </span>
              <span className="font-mono text-foreground text-lg">
                +963959984200
              </span>
            </div>
          </a>
        </div>
        <div className="text-center">
          <a
            href="mailto:omar.azzam.eng@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all glow-hover"
          >
            <Send className="w-5 h-5" />
            Send Message
          </a>
        </div>
      </div>
      <footer className="relative z-10 mt-32 text-center">
        <div className="h-px w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-border to-transparent mb-8" />
        <p className="font-mono text-sm text-muted-foreground">
          © 2025 Omar Azzam. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default ContactSection;
