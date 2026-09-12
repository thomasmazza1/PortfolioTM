// ---------------------------------------------------------------------------
// Contenido del portfolio. Reemplazá los valores placeholder por tus datos
// reales — todo el sitio lee de acá, no hace falta tocar los componentes.
// ---------------------------------------------------------------------------

import gauchaImage from "../assets/projects/gaucha.webp";
import assistxImage from "../assets/projects/assistx.png";
import streamingImage from "../assets/projects/PlataformaWhiteLabel.png";
import profilePhoto from "../assets/profile-photo.jpeg";

export const profile = {
  name: "Thomas",
  lastName: "Mazza",
  role: "Full Stack Developer",
  location: "Buenos Aires, Argentina",
  photo: profilePhoto,
  heroBio:
    "Diseño, desarrollo y transformo ideas en experiencias digitales intuitivas. Desarrollador Full Stack especializado en crear aplicaciones web modernas, escalables y centradas en la experiencia del usuario.",
  aboutBio:
    "No solo desarrollo aplicaciones, construyo productos digitales pensados para resolver problemas. Como Desarrollador Full Stack, combino diseño, arquitectura y desarrollo para crear soluciones web modernas, rápidas y escalables. Disfruto convertir una idea en un producto completo, optimizando tanto la experiencia del usuario como el rendimiento, la mantenibilidad y la calidad del código.",
  email: "thomaslmazza@gmail.com",
  resumeUrl: "/cv.pdf",
};

export const heroTags = [
  "React",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Flutter",
];

// Ordenado de más antiguo a más reciente.
export const experience = [
  {
    role: "Plataforma de Streaming White Label (Multi-Tenant)",
    company: "Prácticas Profesionalizantes · Pinnacle Group",
    period: "2026",
    points: [
      "Proyecto desarrollado con una arquitectura multi-tenant que permite a cada cliente gestionar de forma independiente su propia aplicación de streaming.",
      "Incluye panel administrativo, autenticación, personalización de branding, gestión de contenido y una aplicación móvil desarrollada en Flutter que obtiene su configuración desde una API centralizada.",
    ],
  },
  {
    role: "AssistX · Sistema de gestión de asistencias escolares",
    company: "",
    period: "2026",
    points: [
      "Sistema web full-stack para la gestión de asistencias de una escuela técnica, con roles diferenciados (secretaría, preceptores, profesores).",
      "Motor de detección automática de alumnos en riesgo por inasistencias con conteo ponderado, carga de justificativos y gestión completa de alumnos, cursos y personal.",
    ],
  },
  {
    role: "G.A.U.C.H.A. Chatbot",
    company: "Accenture",
    separator: "ˣ",
    period: "2026",
    points: [
      'Solución web que busca mejorar la comunicación institucional mediante un chatbot inteligente llamado "Muzi".',
      "Centraliza la información respondiendo consultas frecuentes de forma rápida y automática.",
    ],
  },
];

export const skills = {
  frontend: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  backend: ["Node.js", "Express", "PostgreSQL", "MySQL"],
  tools: ["Git", "Vercel"],
};

// color: "accent" | "gold" | "pink" | "teal" | "gray" — define el bloque superior de la card
// cuando falta image, se usa color + ícono como bloque superior
// inProgress: true muestra un badge "En curso" y usa el tono gris del bloque
export const projects = [
  {
    name: "Plataforma de Streaming White Label (Multi-Tenant)",
    description:
      "Plataforma white label para la creación de aplicaciones de streaming personalizadas, orientada a radios, escuelas y organizaciones que buscan contar con una app propia sin afrontar el costo y la complejidad de desarrollarla desde cero.",
    stack: ["Flutter", "React", "NestJS", "Firebase"],
    color: "accent",
    image: streamingImage,
    repoUrl: "",
    demoUrl: "",
  },
  {
    name: "AssistX",
    description:
      "Gestión de asistencias automática con notificaciones, orientado a instituciones que buscan optimización y modernización.",
    stack: ["Next.js", "MySQL", "Tailwind CSS"],
    color: "gold",
    image: assistxImage,
    repoUrl: "",
    demoUrl: "",
  },
  {
    name: "G.A.U.C.H.A. Chatbot ˣ Accenture",
    description:
      "Soluciona la necesidad de centralizar y agilizar las consultas institucionales mediante un chatbot inteligente, dirigido a estudiantes, familias, docentes y personal de una institución.",
    stack: ["Stack a definir"],
    color: "gray",
    image: gauchaImage,
    inProgress: true,
    repoUrl: "",
    demoUrl: "",
  },
];

export const socials = {
  email: "thomaslmazza@gmail.com",
  linkedin: "",
  github: "https://github.com/thomasmazza1",
  twitter: "",
};
