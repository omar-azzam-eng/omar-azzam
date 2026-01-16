import {
  Database,
  Code,
  Shield,
  Server,
  FileCode,
  BarChart3,
  Container,
  GitBranch,
  KeyRound,
  ShieldCheck,
  Network,
} from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "JavaScript",
    description:
      "Server-side development with Node.js, Express, and modern JavaScript frameworks.",
  },
  {
    icon: FileCode,
    title: "Python",
    description:
      "Backend development using Django and Flask, plus scripting and automation.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "Data analysis using Python, Pandas, and data visualization techniques.",
  },
  {
    icon: Container,
    title: "Docker",
    description:
      "Containerizing applications and managing multi-service environments with Docker Compose.",
  },
  {
    icon: Database,
    title: "NoSQL Databases",
    description:
      "Working with MongoDB and Redis for scalable, high-performance data storage.",
  },
  {
    icon: Database,
    title: "MySQL",
    description:
      "Relational database design, queries, and performance optimization.",
  },
  {
    icon: Network,
    title: "RESTful APIs",
    description:
      "Designing and building RESTful APIs with proper architecture and best practices.",
  },
  {
    icon: Database,
    title: "PostgreSQL",
    description:
      "Advanced PostgreSQL features, indexing strategies, and performance tuning.",
  },
  {
    icon: KeyRound,
    title: "JWT Authentication",
    description:
      "Secure authentication and authorization using JSON Web Tokens.",
  },
  {
    icon: GitBranch,
    title: "Git",
    description:
      "Version control, branching strategies, and collaborative workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Zod",
    description:
      "Type-safe schema validation for APIs and frontend-backend integration.",
  },
  {
    icon: Server,
    title: "Database Management",
    description:
      "Database administration, backups, migrations, and monitoring.",
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "Input validation, SQL injection prevention, authentication, and secure coding practices.",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-widest uppercase mb-4 block">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Specialized in backend technologies that power modern web
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group p-6 rounded-xl glass glow-hover cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-mono text-xl font-semibold mb-2 text-foreground">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 rounded-xl glass font-mono text-sm overflow-x-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-destructive/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <pre className="text-muted-foreground">
            <code>
              <span className="text-primary">const</span> developer = {`{`}
              {"\n"}
              {"  "}name: <span className="text-green-400">"Omar Azzam"</span>,
              {"\n"}
              {"  "}role:{" "}
              <span className="text-green-400">"Backend Developer"</span>,{"\n"}
              {"  "}skills: [
              <span className="text-green-400">"JavaScript"</span>,{" "}
              <span className="text-green-400">"Python"</span>,{" "}
              <span className="text-green-400">"MySQL"</span>,{" "}
              <span className="text-green-400">"PostgreSQL"</span>,{" "}
              <span className="text-green-400">"Docker"</span>,{" "}
              <span className="text-green-400">"RESTful APIs"</span>,{" "}
              <span className="text-green-400">"JWT Authentication"</span>,{" "}
              <span className="text-green-400">"Database Management"</span>],{"\n"}
              {"  "}available: <span className="text-primary">true</span>
              {"\n"}
              {`}`};
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
