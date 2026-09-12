import { useState } from "react";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { profile, socials } from "../data/content";

const links = [
  {
    key: "email",
    label: "Email",
    value: profile.email,
    href: `mailto:${socials.email}`,
    icon: Mail,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "Ver perfil",
    href: socials.linkedin,
    icon: FaLinkedin,
  },
  {
    key: "github",
    label: "GitHub",
    value: "Ver repositorios",
    href: socials.github,
    icon: FaGithub,
  },
  {
    key: "twitter",
    label: "X / Twitter",
    value: "Ver perfil",
    href: socials.twitter,
    icon: FaXTwitter,
  },
].filter((link) => link.href);

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section
      id="contacto"
      className="relative scroll-mt-20 overflow-hidden bg-bg"
    >
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-accent opacity-[0.12]" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="font-display text-3xl font-semibold text-text-primary md:text-4xl">
          Hablemos de tu <span className="text-gold">próximo proyecto</span>
        </h2>
        <p className="mt-4 max-w-xl text-text-secondary md:text-lg">
          ¿Tenés una idea, una oportunidad o simplemente querés saludar?
          Escribime, siempre estoy abierto a nuevas conversaciones.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map(({ key, label, value, href, icon: Icon }) => (
            <div key={key} className="flex flex-col">
              <a
                href={href}
                target={key === "email" ? undefined : "_blank"}
                rel={key === "email" ? undefined : "noreferrer"}
                className="group flex flex-col justify-between rounded-[10px] border border-border-subtle/60 bg-surface p-5 transition-colors hover:border-accent"
              >
                <div className="flex items-center justify-between">
                  <Icon size={20} className="text-gold" />
                  <ArrowUpRight
                    size={16}
                    className="text-text-secondary opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>
                <div className="mt-6">
                  <p className="text-sm text-text-secondary">{label}</p>
                  <p className="mt-0.5 truncate font-medium text-text-primary">
                    {value}
                  </p>
                </div>
              </a>

              {key === "email" && (
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="mt-2 inline-flex items-center gap-1.5 self-start text-xs font-medium text-text-secondary/70 transition-colors hover:text-accent-light"
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  {copied ? "¡Copiado!" : "Copiar mail"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
