import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projects <span className="gradient-text">I’ve Worked On</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of academic and practical projects demonstrating my
            experience in artificial intelligence and software development.
          </p>
        </div>
        <div className="group relative rounded-2xl border border-border bg-background/60 backdrop-blur-xl p-8 md:p-10 shadow-lg transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3">
            Classification of Lung Cancer Types
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            February 2024 – July 2024
          </p>
          <p className="text-base leading-relaxed text-muted-foreground mb-6">
            Developed an AI-based medical imaging system capable of classifying
            lung cancer types from CT scans. The model achieved an accuracy of{" "}
            <span className="font-medium text-foreground">97%</span> through
            optimized preprocessing, feature extraction, and deep learning
            architectures.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "Python",
              "TensorFlow",
              "Keras",
              "OpenCV",
              "NumPy",
              "Pandas",
              "Matplotlib",
              "Seaborn",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border px-3 py-1 text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-around">
            <a
              href="/project.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <span>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 transition-all"
                >
                  <EyeIcon className="w-4 h-4" />
                  View Project
                </Button>
              </span>
            </a>
            {/* <a
              href="/project.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <span>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 transition-all"
                >
                  <EyeIcon className="w-4 h-4" />
                  View Project in English
                </Button>
              </span>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
