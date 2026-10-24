import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiChevronDown,
  FiArrowRight,
  FiFileText,
} from "react-icons/fi";

/* ---------- Typewriter headline ---------- */
/* ---------- Typewriter headline ---------- */
const LINE_1 = "Building";
const LINE_2 = "Fast, Functional Websites";

function TypewriterHeadline() {
  const total = LINE_1.length + LINE_2.length;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= total) return;
    const timer = setTimeout(() => setCount((c) => c + 1), count === 0 ? 500 : 70);
    return () => clearTimeout(timer);
  }, [count, total]);

  const typed1 = LINE_1.slice(0, count);
  const rest1 = LINE_1.slice(count);
  const typed2 = LINE_2.slice(0, Math.max(0, count - LINE_1.length));
  const rest2 = LINE_2.slice(Math.max(0, count - LINE_1.length));
  const onLine1 = count < LINE_1.length;

  const cursor = (
    <span className="inline-block w-0 overflow-visible animate-pulse text-blue-900">
      .
    </span>
  );

  return (
    <h1
      className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-blue-900"
      aria-label={`${LINE_1} ${LINE_2}`}
    >
      <span className="block" aria-hidden="true">
        {typed1}
        {onLine1 && cursor}
        <span className="invisible">{rest1}</span>
      </span>
      <span className="block text-blue-900" aria-hidden="true">
        {typed2}
        {!onLine1 && cursor}
        <span className="invisible">{rest2}</span>
      </span>
    </h1>
  );
}

/* ---------- Home ---------- */
function Home() {
  const socials = [
    { label: "GitHub", href: "https://github.com/olamilekanszn", Icon: FiGithub },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/olamilekan-egbeyemi",
      Icon: FiLinkedin,
    },
    { label: "Twitter", href: "https://x.com/olamilekanszn", Icon: FiTwitter },
    {
      label: "Email",
      href: "mailto:egbeyemiolamilekan3008@gmail.com",
      Icon: FiMail,
      internal: true,
    },
  ];

  const scrollDown = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-800/20 flex flex-col">
      <main
        id="hero"
        className="flex-1 w-full max-w-350 mx-auto px-6 sm:px-12 pt-24 pb-16 md:py-28 min-h-screen
                   flex flex-col items-center gap-12
                   lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_auto] lg:items-center lg:gap-12 xl:gap-20"
      >
        {/* Left column: text */}
        <Motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="order-1 w-full max-w-xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left gap-8"
        >
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="flex items-center gap-3 px-3 py-1.5 bg-blue-800/5 border border-blue-800/10 rounded-full w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-800" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-900/80">
                Available for new projects
              </span>
            </div>

            <TypewriterHeadline />
          </div>

          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
            I build fast, modern websites and applications focused on exceptional
            design, performance, and user experience.
          </p>

          <div className="flex flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
            <Link
              to="/projects"
              className="bg-blue-800 text-white font-semibold rounded-full px-5 sm:px-8 py-3 sm:py-4 shadow-md hover:-translate-y-0.5 hover:bg-blue-900 transition-all duration-300 flex-1 sm:flex-none text-sm sm:text-base flex items-center justify-center gap-2 group"
            >
              <span>View My Work</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <a
              href="https://drive.google.com/file/d/1I_9S1RpwKivultBFRsRQICUKsNqOUKEt/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group border border-blue-800 text-blue-900 font-semibold rounded-full px-5 sm:px-8 py-3 sm:py-4 flex-1 sm:flex-none text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <span className="absolute inset-0 bg-blue-800 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                View CV
                <FiFileText className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </Motion.div>

        {/* Center column: profile image */}
        <Motion.div
          initial={{ y: 60, opacity: 0, scale: 0.85 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="order-2 w-full flex justify-center items-center"
        >
          <div className="relative w-full max-w-65 sm:max-w-sm lg:max-w-md aspect-square">
            {[1.12, 1.25].map((scale, i) => (
              <Motion.div
                key={i}
                className="absolute inset-0 rounded-full border border-blue-800/20 pointer-events-none"
                animate={{ scale: [1, scale], opacity: [0.4, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: "easeOut",
                }}
              />
            ))}

            <div className="absolute inset-0 rounded-full border-2 border-blue-800 shadow-[0_10px_40px_rgba(30,64,175,0.2)] overflow-hidden bg-white">
              <img
                src="/szn.jpeg"
                alt="Olamilekan Egbeyemi"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
        </Motion.div>

        {/* Right column: socials + scroll indicator */}
        <Motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="order-3 flex flex-col items-center gap-10"
        >
          <div className="bg-white border border-gray-200 rounded-full px-8 py-3 sm:px-10 sm:py-4 lg:px-4 lg:py-6 shadow-sm">
            <div className="flex flex-row lg:flex-col items-center gap-6 lg:gap-7">
              {socials.map((social) => {
                const { label, href, internal } = social;
                const Icon = social.Icon;
                return (
                  <a
                    key={label}
                    href={href}
                    {...(internal
                      ? {}
                      : { target: "_blank", rel: "noopener noreferrer" })}
                    className="text-gray-500 hover:text-blue-900 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="sr-only">{label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Scroll indicator (desktop only) */}
          <Motion.button
            type="button"
            onClick={scrollDown}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
            className="hidden lg:flex flex-col items-center gap-2 group cursor-pointer"
            aria-label="Scroll down"
          >
            <Motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-blue-900 [writing-mode:vertical-lr] font-bold mb-2">
                Scroll
              </span>
              <div className="w-px h-20 bg-blue-800/20 relative overflow-hidden rounded-full">
                <Motion.div
                  animate={{
                    height: ["0%", "40%", "40%", "0%"],
                    top: ["0%", "0%", "60%", "100%"],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-0 w-full bg-blue-800"
                />
              </div>
              <FiChevronDown className="w-5 h-5 text-blue-900 -mt-1 group-hover:scale-110 transition-transform duration-300" />
            </Motion.div>
          </Motion.button>
        </Motion.div>
      </main>
    </div>
  );
}

export default Home;