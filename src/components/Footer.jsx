import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { profile, socials } from "../data/content";

const icons = [
  { key: "email", href: `mailto:${socials.email}`, icon: Mail },
  { key: "github", href: socials.github, icon: FaGithub },
  { key: "linkedin", href: socials.linkedin, icon: FaLinkedin },
  { key: "twitter", href: socials.twitter, icon: FaXTwitter },
].filter((item) => item.href);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle/60 bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-text-secondary">
          © {year} {profile.name} {profile.lastName}. Todos los derechos
          reservados.
        </p>
        <div className="flex items-center gap-5">
          {icons.map(({ key, href, icon: Icon }) => (
            <a
              key={key}
              href={href}
              target={key === "email" ? undefined : "_blank"}
              rel={key === "email" ? undefined : "noreferrer"}
              className="text-text-secondary transition-colors hover:text-accent-light"
              aria-label={key}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
