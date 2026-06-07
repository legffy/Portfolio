import Image from "next/image";

export default function ExperienceCard({ experience }) {
  return (
    <article className="relative overflow-hidden border border-[#C3A995]/16 bg-[#1B1B1B]/68 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-[#9A031E]/70 sm:p-7">
      <div className="absolute left-0 top-0 h-full w-1 bg-[#9A031E]" />
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#C3A995]/76">
            <span>{experience.period}</span>
            <span className="h-1 w-1 rounded-full bg-[#9A031E]" />
            <span>{experience.team}</span>
          </div>
          <h3 className="mt-3 text-2xl font-semibold text-[#F7EFE7]">{experience.role}</h3>
          <p className="mt-1 text-base font-medium text-[#C3A995]">{experience.organization}</p>

          <ul className="mt-5 space-y-3 text-sm leading-6 text-[#D8C8BC]">
            {experience.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9A031E]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {experience.stack.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[#C3A995]/18 bg-[#0D0106]/60 px-3 py-1 text-xs font-medium text-[#C3A995]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="flex h-20 w-28 items-center justify-center border border-[#C3A995]/14 bg-[#0D0106]/58 p-4 md:h-24 md:w-32">
          <Image
            src={experience.logo}
            alt={experience.logoAlt}
            width={128}
            height={96}
            className="max-h-full w-auto object-contain"
          />
        </div>
      </div>
    </article>
  );
}
