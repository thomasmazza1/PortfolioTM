import { ArrowRight, Download } from "lucide-react";
import { profile, heroTags } from "../data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border-subtle/60 bg-bg"
    >
      {/* Formas decorativas */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent opacity-[0.14]" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 h-80 w-80 rotate-12 rounded-[3rem] bg-gold opacity-[0.12]" />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-24 md:flex-row md:items-center md:justify-between md:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-dark px-4 py-1.5 text-sm font-medium text-accent-light">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {profile.role}
          </div>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary md:text-5xl">
            Hola, soy {profile.name}. Transformo ideas en{" "}
            <span className="text-gold">experiencias digitales</span>{" "}
            intuitivas.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
            {profile.heroBio}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-[10px] bg-gold px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
            >
              Ver proyectos
              <ArrowRight size={16} />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-[10px] border border-border-subtle px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent hover:text-accent-light"
            >
              Descargar CV
              <Download size={16} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative shrink-0">
          <div className="absolute -inset-4 -z-10 rounded-full bg-gold opacity-[0.14]" />
          <img
            src={profile.photo}
            alt={`${profile.name} ${profile.lastName}`}
            className="h-48 w-48 rounded-full border-4 border-surface object-cover sm:h-56 sm:w-56 md:h-64 md:w-64"
          />
        </div>
      </div>
    </section>
  );
}
