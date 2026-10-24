const projects = [
  {
    title: "Balancee",
    description:
      "An expense tracker that helps you log spending, organise transactions and keep your monthly budget in check at a glance.",
    image: "/balancee.png",
    tech: ["TypeScript", "React", "Tailwind"],
    link: "https://rewardsumm.vercel.app/",
  },
  {
    title: "Netflix Clone",
    description:
      "A Netflix-inspired streaming app for browsing trending movies and shows, with a clean responsive layout and smooth navigation.",
    image: "/netflix clone.png",
    tech: ["TypeScript", "Next.js", "Tailwind"],
    link: "https://mayana-movie-app.vercel.app/",
  },
  {
    title: "Shoply",
    description:
      "A modern e-commerce website where users can browse products, add items to their cart and shop on any device.",
    image: "/shoply.png",
    tech: ["JavaScript", "React", "Tailwind"],
    link: "https://shoply-vlm8.vercel.app/",
  },
  {
    title: "TrustFX",
    description:
      "A financial services platform presenting trading and investment services with a clear, professional design built to earn trust.",
    image: "/trustfx.png",
    tech: ["JavaScript", "Next.js", "Tailwind"],
    link: "https://trustfx.vercel.app",
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern portfolio website showcasing my projects, skills and experience, designed to look great on every screen size.",
    image: "/myportfolio.png",
    tech: ["React", "Tailwind"],
    link: "https://olamilekan-dev-eta.vercel.app/",
  },
  {
    title: "BlackJack Game",
    description:
      "A fun, interactive BlackJack game built with JavaScript and CSS, featuring card dealing, dealer logic and win or lose tracking.",
    image: "/blackjack.png",
    tech: ["JavaScript", "CSS"],
    link: "https://ablackjack.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="pt-28 sm:pt-32 pb-12 sm:pb-16 md:pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-8 sm:mb-12 md:mb-16">
          My Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
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

                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2 min-h-10 sm:min-h-12">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
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