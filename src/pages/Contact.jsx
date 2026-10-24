import { FiStar } from "react-icons/fi";
import { motion as Motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO at KoraTech",
    quote: "Working with them was incredible. The level of detail and aesthetic perfection brought to our web platform fundamentally changed our conversion rates.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    name: "Marcus Thorne",
    role: "Founder, Thorne Design",
    quote: "A rare mix of brilliant engineering and breathtaking design. They didn't just build a site, they architected a premium digital experience for our brand.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director",
    quote: "Fast, communicative, and terrifyingly skilled. The cinematic animations and glassmorphism elements they implemented left our entire executive team speechless.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=3",
  },
  {
    name: "David Chen",
    role: "CTO, Lumina Innovations",
    quote: "The cleanest code architecture paired with the most aggressive, cutting-edge UI I've seen. Delivering agency-level quality on strict timelines.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=4",
  },
  {
    name: "Chloe Michaels",
    role: "Creative Director",
    quote: "I've worked with dozens of developers, but few possess the visual instinct seen here. The motion design perfectly executed our creative vision.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=5",
  },
  {
    name: "Jordan Ade",
    role: "Product Lead, Nimbus Finance",
    quote: "Handed over a rough brief and got back something sharper than we imagined. Communication was tight and every revision landed exactly on target.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=6",
  },
];

export default function Contact() {
  return (
    <section className="w-full pt-32 pb-20 md:pb-28 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-300 mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-marags font-black text-black dark:text-white tracking-tighter uppercase leading-none">
            CLIENT <span className="text-blue-900 dark:text-blue-900">REVIEWS</span>
          </h2>
          <div className="w-12 h-0.75 bg-blue-800/50" />
          <p className="text-gray-600 dark:text-gray-400 max-w-xl text-sm md:text-base mt-4">
            Don&apos;t just take my word for it. Here&apos;s what founders, directors, and technical leaders have to say.
          </p>
        </div>

        {/* Simple grid, no drag/marquee */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex flex-col justify-between bg-gray-50 dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 rounded-2xl p-6 md:p-8 hover:border-blue-800/30 transition-colors duration-300"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-blue-900 fill-blue-900 w-4 h-4" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-black dark:text-white leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-black/5 dark:border-white/5">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border border-black/10 dark:border-white/10"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-black dark:text-white">
                    {testimonial.name}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}