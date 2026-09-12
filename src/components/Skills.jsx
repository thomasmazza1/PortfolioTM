import { Code2, Server, Wrench } from "lucide-react";
import { skills } from "../data/content";

const categories = [
  { key: "frontend", label: "Frontend", icon: Code2 },
  { key: "backend", label: "Backend", icon: Server },
  { key: "tools", label: "DevOps & Herramientas", icon: Wrench },
];

export default function Skills() {
  return (
    <section className="border-b border-border-subtle/60 bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="font-display text-3xl font-semibold text-text-primary md:text-4xl">
          <span className="text-gold">Skills</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categories.map(({ key, label, icon: Icon }) => (
            <div
              key={key}
              className="rounded-[10px] border border-border-subtle/60 bg-surface p-6"
            >
              <div className="mb-5 flex items-center gap-2.5">
                <Icon size={20} className="text-accent-light" />
                <h3 className="font-display text-base font-semibold text-text-primary">
                  {label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[key].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-accent-dark px-3 py-1 text-sm font-medium text-accent-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
