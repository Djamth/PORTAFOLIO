import Image from "next/image";
import Icon from "./Icon";

const stats = [
  { icon: "code" as const, value: "10+", label: "Proyectos completados" },
  { icon: "graduation" as const, value: "8°", label: "Semestre actual" },
  { icon: "time" as const, value: "2+", label: "Años aprendiendo" },
  { icon: "star" as const, value: "100%", label: "Compromiso y dedicacion" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pb-10 pt-12 lg:pb-12 lg:pt-16">
      <div className="section-shell relative z-10 grid items-center gap-10 lg:grid-cols-[1.03fr_.97fr]">
        <div>
          <p className="mb-3 text-sm font-bold tracking-wide text-[#5736df]">
            Denis Jamil Tineo Huancas · Backend Developer
          </p>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#f3f0ff] px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#5736df]">
            <Icon name="graduation" className="size-4" />
            Estudiante de Ingeniería de Sistemas
          </p>
          <h1 className="max-w-2xl text-6xl font-black leading-[.94] tracking-[-0.07em] text-[#111326] sm:text-7xl">
            Construyo soluciones{" "}
            <span className="bg-gradient-to-r from-[#7128e8] via-[#6b3cff] to-[#2787ff] bg-clip-text text-transparent">
              digitales.
            </span>
          </h1>
          <div className="mt-7 h-1 w-14 rounded-full bg-[#6933f7]" />
          <p className="mt-6 max-w-xl text-base leading-7 text-[#5e637c]">
            Soy desarrollador backend enfocado en Java, Spring Boot, APIs REST y PostgreSQL. Me apasiona crear soluciones claras, mantenibles y orientadas a problemas reales.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#5136ff] to-[#871af0] px-6 py-4 text-sm font-bold text-white shadow-[0_12px_24px_rgba(99,53,245,0.28)] transition hover:-translate-y-1">
              <Icon name="rocket" />
              Ver mis proyectos
              <Icon name="arrow" className="size-4" />
            </a>
            <a href="#contact" className="flex items-center gap-3 rounded-2xl border border-[#e0e3ef] bg-white px-6 py-4 text-sm font-bold text-[#22253b] transition hover:border-[#7040f7] hover:text-[#6335f5]">
              <Icon name="mail" className="size-5" />
              Contactarme
            </a>
          </div>
          <div className="mt-7 flex gap-3">
            <a aria-label="GitHub de Denis Jamil Tineo Huancas" href="https://github.com/djamth" target="_blank" rel="me noopener noreferrer" className="grid size-12 place-items-center rounded-full border border-[#e1e4ee] bg-white text-[#25283c] transition hover:-translate-y-1 hover:border-[#6335f5] hover:text-[#6335f5]">
              <Icon name="github" />
            </a>
            <a aria-label="LinkedIn de Denis Jamil Tineo Huancas" href="https://www.linkedin.com/in/denis-jamil-tineo-huancas" target="_blank" rel="me noopener noreferrer" className="grid size-12 place-items-center rounded-full border border-[#e1e4ee] bg-white text-[#25283c] transition hover:-translate-y-1 hover:border-[#6335f5] hover:text-[#6335f5]">
              <Icon name="linkedin" />
            </a>
            <a aria-label="Email de Denis Jamil Tineo Huancas" href="mailto:denistineohuancas@gmail.com" className="grid size-12 place-items-center rounded-full border border-[#e1e4ee] bg-white text-[#25283c] transition hover:-translate-y-1 hover:border-[#6335f5] hover:text-[#6335f5]">
              <Icon name="mail" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto h-[540px] w-full max-w-[580px] lg:h-[620px]">
          <div className="absolute right-7 top-12 z-0 size-[390px] rounded-full bg-gradient-to-br from-[#7a2cf5] to-[#3677ff] opacity-95 sm:size-[470px]" />
          <div className="absolute left-0 top-28 z-0 h-28 w-48 rounded-t-full bg-gradient-to-r from-[#522eff] to-[#9832f4]" />
          <div className="absolute left-20 top-[232px] z-0 h-20 w-44 rounded-b-full bg-gradient-to-r from-[#9c38ed] to-[#4582ff]" />
          <div className="absolute right-1 top-2 z-0 size-16 rounded-full bg-gradient-to-br from-[#3a74ff] to-[#9e2bea]" />
          <div className="dot-grid absolute right-[-20px] top-48 z-0 h-36 w-36 opacity-75" />
          <div className="absolute inset-0 z-20">
            <Image src="/portfolio/DJ.png" alt="Denis Jamil Tineo Huancas, Backend Developer" fill priority sizes="(min-width: 1024px) 580px, 90vw" className="hero-image-mask object-contain object-bottom contrast-110 drop-shadow-[0_18px_18px_rgba(20,18,48,0.16)]" />
          </div>
          <div className="absolute bottom-5 left-4 z-30 h-56 w-[115%] rounded-[50%] border-b-4 border-[#7140ff]" />
          <div className="absolute bottom-[50px] right-0 z-40 hidden w-60 rounded-2xl border border-white/10 bg-[#141625]/95 p-5 text-xs text-[#cbd0e8] shadow-2xl sm:block">
            <p className="mb-3 font-bold text-[#a679ff]">&lt;/&gt;</p>
            <p><span className="text-[#da7dff]">const</span> developer = {"{"}</p>
            <p className="pl-3"><span className="text-[#7fcfff]">role:</span> <span className="text-[#b8e986]">&quot;Backend&quot;</span>,</p>
            <p className="pl-3"><span className="text-[#7fcfff]">focus:</span> <span className="text-[#b8e986]">&quot;APIs limpias&quot;</span></p>
            <p>{"};"}</p>
          </div>
        </div>
      </div>

      <div className="section-shell relative z-20 mt-5">
        <div className="soft-shadow grid overflow-hidden rounded-2xl border border-[#eceef7] bg-white sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 border-b border-[#eceef7] px-6 py-5 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0">
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#f0ebff] text-[#6537f4] shadow-[0_8px_16px_rgba(98,53,245,0.18)]">
                <Icon name={stat.icon} className="size-7" />
              </span>
              <span>
                <strong className="block text-2xl leading-none text-[#101228]">{stat.value}</strong>
                <span className="mt-1 block text-xs leading-4 text-[#5f647b]">{stat.label}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
