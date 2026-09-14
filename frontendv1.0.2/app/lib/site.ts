const fallbackUrl = "http://localhost:3000";

function withProtocol(url: string) {
  return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
}

export function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    fallbackUrl;

  return new URL(withProtocol(configuredUrl));
}

export const siteConfig = {
  name: "Denis Jamil Tineo Huancas",
  title: "Denis Jamil Tineo Huancas | Backend Developer Java & Spring Boot",
  description:
    "Portafolio de Denis Jamil Tineo Huancas, desarrollador backend y estudiante de Ingeniería de Sistemas enfocado en Java, Spring Boot, APIs REST y PostgreSQL.",
  email: "denistineohuancas@gmail.com",
  github: "https://github.com/djamth",
  linkedin: "https://www.linkedin.com/in/denis-jamil-tineo-huancas",

  seo: {
    titleTemplate: "%s | Denis Jamil Tineo Huancas",
    defaultTitle: "Denis Jamil Tineo Huancas | Backend Developer Java & Spring Boot",
    defaultDescription:
      "Portafolio de Denis Jamil Tineo Huancas, desarrollador backend especializado en Java, Spring Boot, APIs REST y PostgreSQL.",
    keywords: [
      "Denis Jamil Tineo Huancas",
      "Denis Jamil",
      "desarrollador backend",
      "backend developer",
      "Java",
      "Spring Boot",
      "APIs REST",
      "PostgreSQL",
      "Ingeniería de Sistemas",
      "portafolio desarrollador",
    ],
    author: "Denis Jamil Tineo Huancas",
    robots: {
      index: true,
      follow: true,
    },
  },

  og: {
    title: "Denis Jamil Tineo Huancas | Backend Developer",
    description:
      "Portafolio de Denis Jamil Tineo Huancas, desarrollador backend enfocado en Java, Spring Boot, APIs REST y PostgreSQL.",
    image: "/portafolio.png",
    type: "website",
    locale: "es_PE",
    siteName: "Denis Jamil Tineo Huancas | Portafolio",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "Portafolio de Denis Jamil Tineo Huancas - Backend Developer",
  },
};
