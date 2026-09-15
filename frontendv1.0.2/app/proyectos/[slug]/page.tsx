import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "../../lib/portfolio";
import { getSiteUrl, siteConfig } from "../../lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Proyecto no encontrado" };
  }

  const path = `/proyectos/${project.slug}`;

  return {
    title: `${project.nombre} | Denis Jamil Tineo Huancas`,
    description: project.descripcion,
    keywords: [project.nombre, ...project.tecnologiasutilizadas, "Denis Jamil Tineo Huancas", "proyecto desarrollo de software"],
    alternates: { canonical: path },
    openGraph: {
      title: `${project.nombre} | Denis Jamil Tineo Huancas`,
      description: project.descripcion,
      url: path,
      type: "article",
      images: [{ url: project.imagenes[0], alt: project.nombre }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.nombre} | Denis Jamil Tineo Huancas`,
      description: project.descripcion,
      images: [project.imagenes[0]],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const projectUrl = new URL(`/proyectos/${project.slug}`, getSiteUrl()).toString();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.nombre,
    description: project.descripcion,
    url: projectUrl,
    image: new URL(project.imagenes[0], getSiteUrl()).toString(),
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: getSiteUrl().toString(),
    },
    codeRepository: project.url,
    keywords: project.tecnologiasutilizadas.join(", "),
  };

  return (
    <main className="min-h-screen bg-[#f7f8fd] text-[#171a2d]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />

      <header className="border-b border-[#e8ebf4] bg-white">
        <div className="section-shell flex min-h-20 items-center justify-between gap-4">
          <Link href="/" className="font-black tracking-[-0.03em] text-[#171a2d]">Denis Jamil</Link>
          <Link href="/#projects" className="text-sm font-bold text-[#6335f5]">← Volver a proyectos</Link>
        </div>
      </header>

      <article className="section-shell py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#6335f5]">Proyecto destacado</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-[#111326] md:text-6xl">{project.nombre}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#676d84] md:text-lg">{project.resumen}</p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.tecnologiasutilizadas.map((tech) => (
              <span key={tech} className="rounded-full bg-[#eee9ff] px-4 py-2 text-xs font-black text-[#6335f5]">{tech}</span>
            ))}
          </div>

          <div className="soft-shadow relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-[#e8ebf4] bg-white">
            <Image src={project.imagenes[0]} alt={`Captura del proyecto ${project.nombre}`} fill priority sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <section className="rounded-2xl border border-[#e8ebf4] bg-white p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6335f5]">El problema</p>
              <h2 className="mt-3 text-2xl font-black tracking-[-0.03em]">Qué necesitaba resolver</h2>
              <p className="mt-4 text-sm leading-7 text-[#676d84]">{project.problema}</p>
            </section>
            <section className="rounded-2xl border border-[#e8ebf4] bg-white p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6335f5]">La solución</p>
              <h2 className="mt-3 text-2xl font-black tracking-[-0.03em]">Cómo lo desarrollé</h2>
              <p className="mt-4 text-sm leading-7 text-[#676d84]">{project.solucion}</p>
            </section>
          </div>

          <section className="mt-6 rounded-2xl border border-[#e8ebf4] bg-white p-7">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6335f5]">Funcionalidades</p>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.03em]">Puntos principales del proyecto</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.funcionalidades.map((feature) => (
                <li key={feature} className="rounded-xl bg-[#f7f8fd] px-4 py-3 text-sm font-semibold text-[#555b73]">✓ {feature}</li>
              ))}
            </ul>
          </section>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#6335f5] px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5">Ver repositorio en GitHub ↗</a>
            <Link href="/#projects" className="rounded-xl border border-[#dfe2ec] bg-white px-6 py-3 text-sm font-black text-[#555b73] transition hover:border-[#cbbcff] hover:text-[#6335f5]">Ver otros proyectos</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
