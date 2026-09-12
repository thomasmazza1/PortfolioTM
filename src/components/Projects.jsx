import { ExternalLink, Globe, Smartphone, Database, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../data/content";

const colorMap = {
  accent: { bg: "bg-accent", icon: "text-bg" },
  gold: { bg: "bg-gold", icon: "text-bg" },
  pink: { bg: "bg-[#ED93B1]", icon: "text-bg" },
  teal: { bg: "bg-[#9FE1CB]", icon: "text-bg" },
  gray: { bg: "bg-border-subtle", icon: "text-text-secondary" },
};

const icons = [Globe, Smartphone, Database, Layers];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="scroll-mt-20 border-b border-border-subtle/60 bg-bg"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="font-display text-3xl font-semibold text-text-primary md:text-4xl">
          <span className="text-accent-light">Proyectos</span> destacados
        </h2>
        <p className="mt-4 max-w-xl text-text-secondary">
          Una selección de trabajos personales y profesionales.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = icons[i % icons.length];
            const colors = colorMap[project.color] ?? colorMap.accent;
            return (
              <article
                key={project.name}
                className="flex flex-col overflow-hidden rounded-[10px] border border-border-subtle/60 bg-surface"
              >
                {project.image ? (
                  <div className={`h-36 overflow-hidden ${colors.bg}`}>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className={`flex h-36 items-center justify-center ${colors.bg}`}
                  >
                    <Icon
                      size={44}
                      className={colors.icon}
                      strokeWidth={1.75}
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-semibold text-text-primary">
                      {project.name}
                    </h3>
                    {project.inProgress && (
                      <span className="rounded-full bg-border-subtle/40 px-2.5 py-0.5 text-xs font-medium text-text-secondary">
                        En curso
                      </span>
                    )}
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border-subtle px-3 py-1 text-xs font-medium text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(project.repoUrl || project.demoUrl) && (
                  <div className="mt-5 flex items-center gap-4">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-accent-light"
                      >
                        <FaGithub size={16} />
                        Repo
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-accent-light"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                  </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
