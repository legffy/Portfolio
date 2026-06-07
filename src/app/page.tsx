import Image from "next/image";
import {
  ArrowUpRight,
  BrainCircuit,
  Cpu,
  FileText,
  Github,
  Linkedin,
  Server,
  Terminal,
} from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";

const resumeHref = "/Resume (9).pdf";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const profileLinks = [
  {
    label: "GitHub",
    href: "https://github.com/legffy",
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rondalph-taylor-41543b291/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Resume",
    href: resumeHref,
    icon: FileText,
    external: false,
  },
];

const focusAreas = [
  {
    title: "Backend Systems",
    description: "Service boundaries, APIs, and server-side workflows built with reliability in mind.",
    icon: Server,
  },
  {
    title: "Low-Level Foundations",
    description: "C++, data structures, memory reasoning, and operating-system-adjacent curiosity.",
    icon: Cpu,
  },
  {
    title: "Applied AI",
    description: "Projects that connect models, data, and interfaces into usable software.",
    icon: BrainCircuit,
  },
];

const projects = [
  {
    title: "OneLink",
    eyebrow: "Campus systems platform",
    summary:
      "A campus-life launchpad for RPI that brings building, room, event, and reservation information into one place.",
    problem:
      "Students have to jump between fragmented university systems to answer simple questions about spaces, activities, and availability.",
    built:
      "Built backend data models and retrieval flows alongside responsive building and room interfaces for browsing campus information.",
    highlights: [
      "Implemented data retrieval features and documented Django models.",
      "Built building cards, navigation behavior, and frontend views for campus spaces.",
      "Worked through multiple feature branches and pull requests across backend and frontend work.",
    ],
    stack: ["Python", "Django", "TypeScript", "React", "Data Modeling"],
    media: {
      type: "system",
      alt: "OneLink campus data flow preview",
      label: "campus_data.sync",
      lines: [
        "buildings -> rooms -> events",
        "ems source normalized",
        "student-facing launchpad",
      ],
    },
    github: "https://github.com/legffy/OneLink",
  },
  {
    title: "Blinders",
    eyebrow: "Open-source focus tool",
    summary:
      "A Chrome extension, FastAPI backend, and React dashboard that add thoughtful friction before distracting browsing.",
    problem:
      "Impulse browsing is easy because high-distraction sites are only one click away and rarely ask users to pause.",
    built:
      "Connected a browser extension, backend API, database layer, and dashboard into a guardrail system for intentional web use.",
    highlights: [
      "Designed a Chrome MV3 extension around domain detection and delay-wall flows.",
      "Used FastAPI with a dashboard-oriented frontend to manage focus guardrails.",
      "Modeled the project as a multi-surface product with extension, API, web, and infra boundaries.",
    ],
    stack: ["TypeScript", "React", "FastAPI", "Python", "Postgres", "Chrome MV3"],
    media: {
      type: "system",
      alt: "Blinders guardrail system preview",
      label: "guardrail.check",
      lines: [
        "domain classified",
        "delay wall triggered",
        "dashboard updated",
      ],
    },
    github: "https://github.com/legffy/Blinders",
  },
  {
    title: "POEM Browser",
    eyebrow: "Open-source research browser",
    summary:
      "Contributions to the Psychometrics Ontology of Entities and Measures browser, improving how users search and explore ontology-backed research content.",
    problem:
      "Ontology data is powerful but difficult to navigate without clear browser flows, search, filters, and readable entity pages.",
    built:
      "Implemented browser features across frontend, backend search, filtering, AI summary setup, deployment fixes, and page standardization.",
    highlights: [
      "Added search and filtering flows for scales, languages, informants, and browser exploration.",
      "Built glossary, instrument overview, individual instrument, scales, and respondent browser pages.",
      "Improved build and deployment reliability with npm build fixes, Docker work, and frontend/backend proxy setup.",
    ],
    stack: ["TypeScript", "Java", "Python", "JavaScript", "Docker", "Search"],
    media: {
      type: "system",
      alt: "POEM browser contribution preview",
      label: "poem_browser.query",
      lines: [
        "ontology entities indexed",
        "filters applied",
        "research pages explored",
      ],
    },
    github: "https://github.com/tetherless-world/POEM",
  },
  {
    title: "Lingo Buddy",
    eyebrow: "AI-assisted learning tool",
    summary:
      "A React and FastAPI project exploring language-learning workflows through an interactive demo.",
    problem:
      "Make language practice feel more responsive by connecting a frontend learning flow to a Python API.",
    built:
      "Created a React interface backed by FastAPI, with a demo video showing the project experience end to end.",
    highlights: [
      "Connected frontend interactions to a Python backend service.",
      "Used a video demo to communicate the user flow quickly.",
      "Kept the architecture friendly to future AI and language-model features.",
    ],
    stack: ["JavaScript", "React", "Python", "FastAPI"],
    media: {
      type: "video",
      src: "https://www.youtube.com/embed/G5siPX1FCHk?si=Q8ttvva0Geffpv1W",
      alt: "Lingo Buddy demo video",
    },
    github: "https://github.com/legffy/LingoBuddyRepo-main",
    demo: "https://youtu.be/G5siPX1FCHk",
  },
  {
    title: "Digital OC",
    eyebrow: "Data and visualization project",
    summary:
      "A React and Flask project that pairs data tooling with an interface for exploring Orange County information.",
    problem:
      "Turn raw data and analysis output into a more usable web experience for browsing and interpretation.",
    built:
      "Combined a React frontend with a Python/Flask backend and data tooling including Scikit-learn and Matplotlib.",
    highlights: [
      "Bridged UI work with Python data processing.",
      "Used visualization and analysis libraries to support better data presentation.",
      "Collaborated in a repository with a clearer split between frontend and backend responsibilities.",
    ],
    stack: ["JavaScript", "React", "Python", "Flask", "Scikit-learn", "Matplotlib"],
    media: {
      type: "image",
      src: "/digitaloc_logo_transparent.png",
      alt: "Digital OC project logo",
      fit: "contain",
    },
    github: "https://github.com/nworobec/digitalOC",
  },
];

const experiences = [
  {
    role: "Incoming Backend Developer",
    organization: "IBM",
    team: "Sysplex Containers Team",
    period: "Incoming",
    logo: "/ibm.png",
    logoAlt: "IBM logo",
    bullets: [
      "Joining a backend-focused team working close to infrastructure and enterprise systems.",
      "Expected focus area: container-related backend work in the Sysplex ecosystem.",
      "Current portfolio positioning will be updated once resume details and dates are finalized.",
    ],
    stack: ["Backend", "Systems", "Containers"],
  },
  {
    role: "Data Structures Mentor",
    organization: "Rensselaer Polytechnic Institute",
    team: "Computer Science",
    period: "Academic role",
    logo: "/rpi.png",
    logoAlt: "RPI logo",
    bullets: [
      "Mentored students in C++ data structures through labs, debugging, and concept review.",
      "Helped reinforce trees, pointers, runtime analysis, and memory reasoning.",
      "Translated abstract CS topics into practical explanations students could use immediately.",
    ],
    stack: ["C++", "Data Structures", "Mentoring"],
  },
];

const signalItems = [
  { label: "Current Focus", value: "Backend, systems, AI" },
  { label: "Base", value: "RPI Computer Science" },
  { label: "Core Tools", value: "Python, C++, TypeScript, SQL" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0D0106] text-[#F7EFE7]">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(154,3,30,0.28),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(195,169,149,0.14),transparent_26%)]" />
        <div className="system-grid absolute inset-0 opacity-[0.16]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-[#9A031E]/40 bg-[#0D0106]/88 px-5 py-4 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <a href="#home" className="group flex items-center gap-3 text-sm font-semibold text-[#F7EFE7]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#9A031E] shadow-[0_0_18px_rgba(154,3,30,0.85)]" />
            <span>Rondalph Taylor</span>
          </a>
          <ol className="hidden items-center gap-1 rounded-full border border-[#C3A995]/15 bg-[#1B1B1B]/70 p-1 text-sm text-[#C3A995] shadow-[0_12px_40px_rgba(0,0,0,0.28)] md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-full px-4 py-2 transition hover:bg-[#9A031E]/18 hover:text-[#F7EFE7]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#C3A995]/35 px-4 py-2 text-sm font-semibold text-[#F7EFE7] transition hover:border-[#C3A995] hover:bg-[#C3A995]/10"
          >
            Resume
            <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:py-20"
        >
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#9A031E]/50 bg-[#1B1B1B]/72 px-4 py-2 text-sm text-[#C3A995]">
              <Terminal size={16} />
              <span>Backend systems / low-level foundations / applied AI</span>
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-[#F7EFE7] sm:text-6xl lg:text-7xl">
              Building reliable software from systems thinking to usable AI.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#D8C8BC]">
              I&apos;m Rondalph Taylor, a Computer Science student at RPI focused on backend
              engineering, low-level systems, and practical AI. I like projects where algorithms,
              infrastructure, and product behavior meet.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#9A031E] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(154,3,30,0.28)] transition hover:-translate-y-0.5 hover:bg-[#B40525]"
              >
                View Resume
                <FileText size={17} />
              </a>
              {profileLinks
                .filter((link) => link.label !== "Resume")
                .map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#C3A995]/30 bg-[#1B1B1B]/70 px-5 py-3 text-sm font-semibold text-[#F7EFE7] transition hover:-translate-y-0.5 hover:border-[#C3A995] hover:bg-[#C3A995]/10"
                    >
                      <Icon size={17} />
                      {link.label}
                    </a>
                  );
                })}
            </div>

            <dl className="mt-10 grid gap-3 sm:grid-cols-3">
              {signalItems.map((item) => (
                <div
                  key={item.label}
                  className="border-l border-[#9A031E]/70 bg-[#1B1B1B]/38 px-4 py-3"
                >
                  <dt className="text-xs uppercase text-[#C3A995]/72">{item.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-[#F7EFE7]">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[440px] lg:ml-auto">
            <div className="absolute -inset-5 rounded-[2rem] border border-[#9A031E]/18 bg-[#9A031E]/8 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-[#C3A995]/22 bg-[#1B1B1B]/86 shadow-[0_28px_90px_rgba(0,0,0,0.48)]">
              <div className="flex items-center justify-between border-b border-[#C3A995]/12 px-4 py-3 text-xs text-[#C3A995]">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#9A031E]" />
                  profile.snapshot
                </span>
                <span>RPI / CS</span>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/IMG_5749.JPG"
                  alt="Rondalph Taylor professional portrait"
                  fill
                  priority
                  sizes="(min-width: 1024px) 440px, 90vw"
                  className="object-cover object-[50%_18%]"
                />
                <div className="absolute inset-x-4 bottom-4 border border-[#C3A995]/18 bg-[#0D0106]/78 p-4 backdrop-blur-md">
                  <p className="text-xs uppercase text-[#C3A995]/78">Engineering signal</p>
                  <p className="mt-1 text-sm font-semibold text-[#F7EFE7]">
                    Backend-first developer with systems depth and AI project experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article
                  key={area.title}
                  className="group border border-[#C3A995]/16 bg-[#1B1B1B]/62 p-6 transition hover:-translate-y-1 hover:border-[#9A031E]/70 hover:bg-[#1B1B1B]/86"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#9A031E]/45 bg-[#9A031E]/12 text-[#F7EFE7]">
                    <Icon size={20} />
                  </div>
                  <h2 className="text-lg font-semibold text-[#F7EFE7]">{area.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[#D8C8BC]">{area.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-[#C3A995]/78">Selected work</p>
              <h2 className="mt-3 text-4xl font-semibold text-[#F7EFE7] sm:text-5xl">
                Mini case studies
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#D8C8BC]">
              These are being shaped into resume-aligned stories. For now, each card shows the
              project&apos;s technical direction, stack, and what it proves.
            </p>
          </div>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-[#C3A995]/78">Experience</p>
              <h2 className="mt-3 text-4xl font-semibold text-[#F7EFE7] sm:text-5xl">
                Systems-minded roles
              </h2>
              <p className="mt-5 text-base leading-7 text-[#D8C8BC]">
                The experience section now reads closer to a resume: role, organization,
                context, proof points, and technologies.
              </p>
            </div>
            <div className="space-y-5">
              {experiences.map((experience) => (
                <ExperienceCard key={`${experience.organization}-${experience.role}`} experience={experience} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="relative overflow-hidden border border-[#9A031E]/45 bg-[#1B1B1B]/72 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.36)] sm:p-10">
            <div className="system-grid pointer-events-none absolute inset-0 opacity-[0.12]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase text-[#C3A995]/78">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#F7EFE7] sm:text-4xl">
                  Want the deeper technical version?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[#D8C8BC]">
                  GitHub has the code, LinkedIn has the current professional thread, and the
                  resume link is ready to swap once the updated version lands.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {profileLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#C3A995]/30 bg-[#0D0106]/70 px-5 py-3 text-sm font-semibold text-[#F7EFE7] transition hover:-translate-y-0.5 hover:border-[#C3A995] hover:bg-[#C3A995]/10"
                    >
                      <Icon size={17} />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#9A031E]/35 px-5 py-8 text-sm text-[#C3A995]/72 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row">
          <p>Rondalph Taylor</p>
          <p>Backend systems, low-level foundations, and applied AI.</p>
        </div>
      </footer>
    </div>
  );
}
