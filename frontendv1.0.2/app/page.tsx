import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { getSiteUrl, siteConfig } from "./lib/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${getSiteUrl().toString()}#denis-jamil-tineo-huancas`,
    name: siteConfig.name,
    url: getSiteUrl().toString(),
    email: `mailto:${siteConfig.email}`,
    jobTitle: "Backend Developer Java & Spring Boot",
    description: siteConfig.description,
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: [
      "Java",
      "Spring Boot",
      "APIs REST",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "Desarrollo Backend",
      "Ingeniería de Sistemas",
    ],
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfcff] text-[#11142b]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
