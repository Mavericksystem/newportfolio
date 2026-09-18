import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
} from "lucide-react";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: "Race Prediction",
      description:
        "Machine learning platform predicting Formula 1 race outcomes using telemetry, qualifying data, driver form, weather, and strategy modeling.",
      technologies: ["Python", "React", "FastAPI", "XGBoost"],
      image: "/assets/1.webp",
      github: "https://github.com/Maverick7t/raceprediction",
      site: "https://raceprediction.vercel.app/predictions",
      size: "large",
    },

    {
      id: 2,
      name: "Market Mind",
      description:
        "Agentic stock intelligence platform that explains market movements using multi-source data, tool calling, and semantic retrieval.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "MCP"],
      image: "/assets/2.webp",
      github: "https://github.com/Maverick7t/stock_research",
      site: "https://stockmarketmind.vercel.app/",
      size: "small",
    },

    {
      id: 3,
      name: "Dev Insight",
      description:
        "Developer intelligence platform designed to analyze and surface useful insights for developers.",
      technologies: ["Python", "AI", "FastAPI"],
      image: "/assets/3.webp",
      github: "https://github.com/Mavericksystem/Google_Hackathon_2025",
      site: "#",
      size: "medium",
    },

    {
      id: 4,
      name: "Raven AI",
      description:
        "AI-powered application focused on intelligent automation and agent-based workflows.",
      technologies: ["Python", "AI", "FastAPI"],
      image: "/assets/4.webp",
      github: "https://github.com/Mavericksystem/aws_hackathon_2025",
      site: "#",
      size: "medium",
    },

    {
      id: 5,
      name: "Read Before Read",
      description:
        "AI-powered reading assistant designed to help users understand and process content before diving into it.",
      technologies: ["Python", "AI", "FastAPI"],
      image: "/assets/5.webp",
      github: "https://github.com/Mavericksystem/Read_Before_Read",
      site: "#",
      size: "small",
    },

    {
      id: 6,
      name: "Med Bot",
      description:
        "AI chatbot application designed to provide an interactive interface for accessing and understanding medical information.",
      technologies: ["Python", "AI", "FastAPI"],
      image: "/assets/6.webp",
      github: "#",
      site: "#",
      size: "large",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Desktop asymmetric grid */}
        <div
          className="hidden md:grid gap-5"
          style={{
            gridTemplateColumns: "repeat(14, minmax(0, 1fr))",
          }}
        >

          {/* Row 1 — 9 / 5 */}
          <ProjectCard
            project={projects[0]}
            className="col-span-9"
            delay={0}
          />

          <ProjectCard
            project={projects[1]}
            className="col-span-5"
            delay={0.08}
          />

          {/* Row 2 — 7 / 7 */}
          <ProjectCard
            project={projects[2]}
            className="col-span-7"
            delay={0.12}
          />

          <ProjectCard
            project={projects[3]}
            className="col-span-7"
            delay={0.18}
          />

          {/* Row 3 — 5 / 9 */}
          <ProjectCard
            project={projects[4]}
            className="col-span-5"
            delay={0.24}
          />

          <ProjectCard
            project={projects[5]}
            className="col-span-9"
            delay={0.30}
          />
        </div>

        {/* Mobile — equal square cards */}
        <div className="grid grid-cols-1 gap-5 md:hidden">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.06}
              mobile
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Maverick7t"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center justify-center gap-2 rounded-full px-8 text-white font-semibold cursor-pointer transition-all duration-300 group"
            style={{
              fontSize: "15px",
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-.02em",
              height: "36px",
              WebkitFontSmoothing: "antialiased",
              background: "#000000",
            }}
          >
            {/* Border gradient overlay */}
            <span
              className="absolute rounded-full transition-opacity duration-300 pointer-events-none"
              style={{
                inset: "-1px -1px -1.5px -1px",
                backgroundImage:
                  "linear-gradient(180deg, #fcc171, #c17c56 55%, #362821)",
              }}
            />

            {/* Main black background */}
            <span
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: "#000000",
              }}
            />

            {/* Top radial glow */}
            <span
              className="absolute left-1/2 -translate-x-1/2 rounded-full transition-transform duration-300 pointer-events-none"
              style={{
                top: "-6px",
                bottom: "20%",
                width: "90%",
                backgroundImage:
                  "radial-gradient(ellipse 40% 40% at 50% 10%, rgba(255, 223, 150, 0.7) 10%, rgba(255, 195, 90, 0.4) 50%, rgba(255, 160, 60, 0.15) 80%, transparent 100%)",
                mixBlendMode: "screen",
                filter: "blur(1px)",
              }}
            />

            {/* Content */}
            <Github className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-200" />

            <span className="relative z-10">
              More on GitHub
            </span>

            <ExternalLink className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};


/* =========================================================
   PROJECT CARD
   ========================================================= */

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  site: string;
  size: string;
}

interface ProjectCardProps {
  project: Project;
  className?: string;
  delay?: number;
  mobile?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className = "",
  delay = 0,
  mobile = false,
}) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative ${mobile ? "aspect-square" : "h-[440px]"
        } ${className}`}
    >

      {/* Card */}
      <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/20 bg-black/10 shadow-xl">

        {/* Image */}
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Glass hover layer */}
        <div
          className="
            absolute inset-0
            bg-black/0
            backdrop-blur-0
            transition-all duration-500
            group-hover:bg-black/40
            group-hover:backdrop-blur-md
          "
        />

        {/* Cursor-reactive glow */}
        <div
          className="
            pointer-events-none
            absolute -inset-px
            opacity-0
            transition-opacity duration-500
            group-hover:opacity-100
          "
        >
          <div
            className="
              absolute
              -left-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-white/10
              blur-3xl
            "
          />
        </div>

        {/* Border glow */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            rounded-3xl
            border border-white/0
            transition-all duration-500
            group-hover:border-white/30
          "
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">

          {/* Project heading */}
          <motion.div
            className="translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {project.name}
              </h3>

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                <ArrowUpRight className="h-4 w-4 text-white" />
              </span>
            </div>
          </motion.div>

          {/* Project information */}
          <motion.div
            className="translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <p className="mb-5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border border-white/20
                    bg-white/10
                    px-3
                    py-1
                    text-xs
                    font-medium
                    text-white/90
                    backdrop-blur-md
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <div
            className="
              mt-5
              flex
              gap-3
              opacity-0
              translate-y-3
              transition-all
              duration-500
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/10
                px-4
                py-2
                text-xs
                font-medium
                text-white
                backdrop-blur-md
                transition-colors
                hover:bg-white/20
              "
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>

            {project.site !== "#" && (
              <a
                href={project.site}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-white
                  backdrop-blur-md
                  transition-colors
                  hover:bg-white/20
                "
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectsSection;