export type Project = {
  id?: number;
  slug: string;
  nombre: string;
  descripcion: string;
  resumen: string;
  problema: string;
  solucion: string;
  url: string;
  imagenes: string[];
  tecnologiasutilizadas: string[];
  funcionalidades: string[];
};

export type Certificate = {
  id?: number;
  nombre: string;
  institucion: string;
  descripcion: string;
  fecha: string;
  url: string;
};

export const projects: Project[] = [
  {
    id: 0,
    slug: "portafolio-personal",
    nombre: "Portafolio Personal",
    descripcion:
      "Portafolio profesional construido con Next.js, Tailwind CSS y TypeScript para presentar mis proyectos, habilidades, experiencia y perfil como desarrollador backend.",
    resumen:
      "Una aplicación web moderna orientada a mostrar mi perfil profesional y facilitar que reclutadores y colaboradores conozcan mi trabajo.",
    problema:
      "Necesitaba centralizar mi experiencia, proyectos y habilidades técnicas en un sitio propio, rápido y accesible desde cualquier dispositivo.",
    solucion:
      "Desarrollé un portafolio con Next.js, diseño responsive, componentes reutilizables y una base SEO preparada para buscadores y redes sociales.",
    url: "https://github.com/Djamth/Portafolio",
    imagenes: ["/portfolio/portafolio.png"],
    tecnologiasutilizadas: ["Next.js", "Tailwind CSS", "TypeScript"],
    funcionalidades: [
      "Presentación de proyectos y habilidades",
      "Diseño responsive",
      "Metadatos SEO y datos estructurados",
      "Sitemap y robots configurados",
    ],
  },
  {
    id: 1,
    slug: "sistema-votacion-electronica",
    nombre: "Sistema de Votación Electrónica",
    descripcion:
      "Sistema para gestionar elecciones académicas, validar la participación de estudiantes, registrar votos y consultar resultados mediante una arquitectura backend y frontend.",
    resumen:
      "Una solución académica para digitalizar el proceso de votación y aplicar reglas de negocio antes de registrar cada voto.",
    problema:
      "Un proceso de votación necesita controlar quién puede votar, en qué elección y mesa participa cada estudiante, además de evitar registros duplicados.",
    solucion:
      "Implementé reglas de validación en el backend, persistencia de votos y una interfaz web para realizar el proceso de manera clara y controlada.",
    url: "https://github.com/Djamth/SISTEMA-DE-VOTACION-ESCOLAR",
    imagenes: ["/portfolio/image.png"],
    tecnologiasutilizadas: ["Next.js", "Spring Boot", "Java", "JPA", "REST API"],
    funcionalidades: [
      "Gestión de elecciones y candidatos",
      "Validación del estudiante y su mesa",
      "Control para evitar votos duplicados",
      "Registro y consulta de votos",
    ],
  },
  {
    id: 2,
    slug: "sistema-gestion-usuarios-modulos",
    nombre: "Sistema de Gestión de Usuarios y Módulos",
    descripcion:
      "Backend modular para administrar usuarios, módulos y reglas de acceso mediante una arquitectura organizada con entidades, DTOs, mappers, servicios y endpoints REST.",
    resumen:
      "Proyecto backend enfocado en organización por capas y construcción de APIs mantenibles con Java y Spring Boot.",
    problema:
      "Los sistemas con múltiples usuarios y módulos requieren separar responsabilidades y mantener una estructura clara para que el backend pueda crecer sin perder mantenibilidad.",
    solucion:
      "Organicé la lógica en capas, utilizando DTOs, mappers, servicios, persistencia con JPA y endpoints REST preparados para integrarse con un frontend.",
    url: "https://github.com/Djamth/SISTEMA-DE-GESTION-DE-USUARIOS-MODULOS",
    imagenes: ["/portfolio/roles.png"],
    tecnologiasutilizadas: ["Java", "Spring Boot", "JPA", "Maven", "Postman"],
    funcionalidades: [
      "Gestión de usuarios",
      "Organización modular del backend",
      "DTOs y mappers para transferencia de datos",
      "Endpoints REST para integración con frontend",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const certificates: Certificate[] = [
  {
    id: 1,
    nombre: "Fundamentos de Conmutación, Enrutamiento y Redes Inalámbricas",
    institucion: "CCNA",
    descripcion: "Fundamentos de conectividad, protocolos y arquitectura de red.",
    fecha: "2025-07-15",
    url: "https://www.credly.com/badges/05965fa1-3807-49b1-a546-e6fde5a5f6b5",
  },
  {
    id: 2,
    nombre: "Introducción a la ciberseguridad",
    institucion: "CCNA",
    descripcion: "Conceptos básicos de ciberseguridad y protección de información.",
    fecha: "2025-04-12",
    url: "https://www.credly.com/badges/84fb91df-c290-4efc-8845-3027154ab966",
  },
];
