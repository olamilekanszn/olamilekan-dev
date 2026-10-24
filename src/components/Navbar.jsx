import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiPhone, FiMail, FiHome } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const navItems = [
  { label: <FiHome className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, path: "/", name: "Home" },
  { label: "About", path: "/about", name: "About" },
  { label: "Projects", path: "/projects", name: "Projects" },
];

const contactLinks = [
  {
    href: "https://wa.me/2349029805219",
    external: true,
    title: "WhatsApp",
    sub: "Chat with me",
    icon: <FaWhatsapp className="w-4 h-4" />,
    color: "bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white",
  },
  {
    href: "tel:+2349029805219",
    title: "Phone",
    sub: "Call directly",
    icon: <FiPhone className="w-4 h-4" />,
    color: "bg-blue-500/10 text-blue-900 group-hover:bg-blue-500 group-hover:text-white",
  },
  {
    href: "mailto:egbeyemiolamilekan3008@gmail.com",
    title: "Email",
    sub: "Send a message",
    icon: <FiMail className="w-4 h-4" />,
    color: "bg-blue-800/10 text-blue-900 group-hover:bg-blue-800 group-hover:text-white",
  },
];

function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const contactRef = useRef(null);
  const { pathname } = useLocation();

  // Close dropdown on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (contactRef.current && !contactRef.current.contains(e.target)) {
        setIsContactOpen(false);
      }
    };
    const handleKey = (e) => e.key === "Escape" && setIsContactOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const handleNavClick = (path) => {
    setIsContactOpen(false);
    // Clicking the page you're already on scrolls back to the top
    if (path === pathname) window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed top-4 sm:top-6 left-0 right-0 z-100 flex justify-center px-2 pointer-events-none">
      {/* Pill container */}
      <nav className="pointer-events-auto px-1.5 sm:px-3 py-1.5 sm:py-2 bg-white/80 backdrop-blur-xl border border-black/10 rounded-full inline-flex justify-center items-center gap-0.5 sm:gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-500 hover:bg-white hover:border-black/20">
        {/* Nav links */}
        <div className="flex items-center gap-0.5 sm:gap-1.5">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                aria-label={item.name}
                aria-current={isActive ? "page" : undefined}
                className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-full flex justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive
                    ? "bg-blue-800/90 shadow-[0_0_20px_rgba(30,64,175,0.3)]"
                    : "hover:bg-black/5"
                }`}
              >
                <span
                  className={`text-[8px] sm:text-xs tracking-[0.2em] uppercase flex items-center justify-center transition-colors duration-500 ${
                    isActive ? "text-white font-black" : "text-gray-600 font-bold"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-px h-4 sm:h-5 bg-black/10 mx-1 sm:mx-3 rounded-full" />

        {/* Let's Talk */}
        <div className="relative flex items-center gap-2" ref={contactRef}>
          <button
            type="button"
            onClick={() => setIsContactOpen((open) => !open)}
            aria-expanded={isContactOpen}
            className={`relative overflow-hidden group border rounded-full px-3 sm:px-5 py-1.5 sm:py-2 flex justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isContactOpen
                ? "border-blue-800 bg-blue-800 shadow-[0_0_25px_rgba(30,64,175,0.5)]"
                : "border-black/10 hover:border-blue-800/50"
            }`}
          >
            <span
              className={`absolute inset-0 w-full h-full bg-blue-800 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0 ${
                isContactOpen
                  ? "translate-x-0"
                  : "-translate-x-[105%] group-hover:translate-x-0"
              }`}
            />
            <span
              className={`relative z-10 text-[8px] sm:text-xs font-black tracking-[0.2em] uppercase transition-colors duration-500 ${
                isContactOpen ? "text-white" : "text-black group-hover:text-white"
              }`}
            >
              Let&rsquo;s Talk
            </span>
          </button>

          {/* Dropdown */}
          <div
            className={`absolute top-full right-0 mt-4 w-60 sm:w-64 bg-white/95 backdrop-blur-3xl border border-black/10 rounded-2xl p-2 shadow-2xl transition-all duration-300 origin-top-right ${
              isContactOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }`}
          >
            <div className="flex flex-col space-y-1">
              {contactLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-black/5 transition-colors group"
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-black text-sm font-bold">{item.title}</span>
                    <span className="text-gray-500 text-[10px] uppercase tracking-wider">
                      {item.sub}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;