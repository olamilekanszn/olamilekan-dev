const projects = [
  {
    title: "Balancee",
    description: "An expense tracker website",
    image: "/balancee.png",
    tech: ["Typescript", "React", "Tailwind"],
    link: "https://rewardsumm.vercel.app/",
  },
  {
    title: "Netflix Clone",
    description: "A Netflix clone application",
    image: "/netflix clone.png",
    tech: ["TypeScript","Next.js", "Tailwind",],
    link: "https://mayana-movie-app.vercel.app/",
  },
  {
    title: "Shoply",
    description: "An e-commerce website",
    image: "/shoply.png",
    tech: ["JavaScript", "React", "Tailwind"],
    link: "https://shoply-vlm8.vercel.app/",
  },
  {
    title: "TrustFX",
    description: "A financial services platform ",
    image: "/trustfx.png",
    tech: ["JavaScript", "Next.js", "Tailwind"],
    link: "https://trustfx.vercel.app",
  },
   {
    title: "Personal Portfolio",
    description: "A modern portfolio website showcasing my work.",
    image: "/myportfolio.png",
    tech: ["React", "Tailwind"],
    link: "https://olamilekan-dev-eta.vercel.app/",
  },
  {
    title: "BlackJack Game",
    description: "A fun, interactive JavaScript and CSS-based BlackJack game.",
    image: "/blackjack.png",
    tech: ["JavaScript", "CSS"],
    link: "https://ablackjack.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white min-h-screen snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-8 sm:mb-12 md:mb-16">
          My Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-1 sm:hover:-translate-y-2 duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-contain"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 px-2 sm:px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 font-medium hover:underline text-sm sm:text-base"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
