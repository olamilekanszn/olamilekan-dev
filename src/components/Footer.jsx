import { useEffect, useState } from "react";
import { FiArrowUp, FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const CONTACT_EMAIL = "egbeyemiolamilekan3008@gmail.com";

const socials = [
  { label: "GitHub", href: "https://github.com/olamilekanszn", Icon: FiGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/olamilekan-egbeyemi",
    Icon: FiLinkedin,
  },
  { label: "Twitter", href: "https://x.com/olamilekanszn", Icon: FiTwitter },
  { label: "Email", href: `mailto:${CONTACT_EMAIL}`, Icon: FiMail, internal: true },
];

function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }) + " (WAT)"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative w-full bg-white text-gray-900 pt-16 md:pt-28 pb-10 overflow-hidden border-t border-gray-200 selection:bg-blue-800/20">
      <div className="max-w-350 mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Call to action */}
        <div className="w-full flex flex-col items-center text-center space-y-6 md:space-y-8 mb-16 md:mb-24">
          <p className="text-blue-900 font-bold uppercase tracking-[0.4em] text-[10px] md:text-sm">
            Have an idea?
          </p>
          <h2 className="text-[13vw] md:text-[10vw] leading-none font-black tracking-tighter text-blue-900 select-none">
            LET&rsquo;S WORK
          </h2>
          <div className="pt-6 md:pt-10">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                "New Project Inquiry"
              )}`}
              className="group relative inline-flex items-center justify-center bg-blue-900 text-white font-black uppercase tracking-widest px-10 md:px-14 py-4 md:py-6 rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <span className="pointer-events-none absolute inset-0 bg-blue-800 translate-y-[105%] group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full" />
              <span className="pointer-events-none relative z-10 text-[10px] md:text-xs">
                Start a Project
              </span>
            </a>
          </div>
        </div>

        {/* Time + socials */}
        <div className="w-full border-t border-gray-100 pt-12 pb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0">
          <div className="flex flex-col space-y-2">
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">
              Local Time
            </p>
            <p className="text-gray-700 font-medium text-sm md:text-base flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-800" />
              Lagos, Nigeria — {time || "Loading..."}
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold md:text-right">
              Socials
            </p>
            <div className="flex items-center gap-6 md:justify-end">
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
                    className="text-gray-400 hover:text-blue-900 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="sr-only">{label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-6 border-t border-gray-100 pt-8">
          <p className="text-gray-500 text-[10px] md:text-xs font-medium uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} Egbeyemi Olamilekan. All rights
            reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-3 group text-gray-500 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
              Back to Top
            </span>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center group-hover:bg-blue-800 group-hover:border-blue-800 transition-all duration-300">
              <FiArrowUp className="w-4 h-4 md:w-5 md:h-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;