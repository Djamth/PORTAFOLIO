import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { certificates, projects } from "../lib/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="bg-[#f7f8fd] py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#6335f5]">Proyectos</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[#111326]">Soluciones que he construido</h2>
          <p className="mt-4 text-sm leading-6 text-[#73788f]">Proyectos donde aplico backend, integraciones y una interfaz pensada para usuarios reales.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug} className="soft-shadow group overflow-hidden rounded-2xl border border-[#e8ebf4] bg-white">
              <Link href={`/proyectos/${project.slug}`} className="block">
                <div className="relative h-56 overflow-hidden bg-[#eeebff]">
                  <Image src={project.imagenes[0]} alt={`Vista previa de ${project.nombre}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-black text-[#171a2d]">
                  <Link href={`/proyectos/${project.slug}`} className="transition hover:text-[#6335f5]">{project.nombre}</Link>
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#73788f]">{project.descripcion}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tecnologiasutilizadas.map((tech) => (
                    <span key={tech} className="rounded-full bg-[#f0ecff] px-3 py-1 text-[11px] font-bold text-[#6335f5]">{tech}</span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-5">
                  <Link href={`/proyectos/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-black text-[#6335f5]">
                    Ver detalles <span aria-hidden="true">→</span>
                  </Link>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#555b73] transition hover:text-[#6335f5]">
                    GitHub <Icon name="external" className="size-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div id="certificates" className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#6335f5]">Certificados</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#111326]">Aprendizaje constante</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {certificates.map((certificate) => (
              <a key={certificate.id ?? certificate.nombre} href={certificate.url} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-[#e8ebf4] bg-white p-5 transition hover:-translate-y-1 hover:border-[#cbbcff] hover:shadow-[0_14px_26px_rgba(98,53,245,0.1)]">
                <div className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#f0ebff] text-[#6335f5]"><Icon name="graduation" /></span>
                  <span>
                    <strong className="block text-[#1b1e32]">{certificate.nombre}</strong>
                    <span className="mt-1 block text-xs font-bold text-[#6335f5]">{certificate.institucion} · {certificate.fecha}</span>
                    <span className="mt-2 block text-sm leading-5 text-[#73788f]">{certificate.descripcion}</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
