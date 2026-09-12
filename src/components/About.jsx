import { Briefcase } from "lucide-react";
import { profile, experience } from "../data/content";

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-20 border-b border-border-subtle/60 bg-bg"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="font-display text-3xl font-semibold text-text-primary md:text-4xl">
          Sobre <span className="text-accent-light">mí</span>
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
          {profile.aboutBio}
        </p>

        <div className="mt-16">
          <h3 className="mb-8 flex items-center gap-2 font-display text-xl font-semibold text-text-primary">
            <Briefcase size={20} className="text-gold" />
            Experiencia
          </h3>

          <ol className="relative space-y-10 border-l border-border-subtle pl-8">
            {experience.map((job) => (
              <li key={`${job.role}-${job.period}`} className="relative">
                <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="font-display text-lg font-medium text-text-primary">
                    {job.role}
                    {job.company && ` ${job.separator ?? "·"} ${job.company}`}
                  </h4>
                  <span className="text-sm font-medium text-text-secondary">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm leading-relaxed text-text-secondary md:text-base"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
