import { useEffect, useState } from 'react';

function Home() {
  const fullText = "I'm Olamilekan Egbeyemi";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayed(fullText.slice(0, index));
        index += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className="min-h-screen snap-start bg-white/70 flex items-center px-4 sm:px-6 py-8 sm:py-16 -mt-16 pt-20 sm:pt-32">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 sm:gap-10">
        <div className="text-center md:text-left max-w-xl w-full">
          <button className="bg-blue-900 text-white font-semibold py-2 px-4 mb-4 sm:mb-6 rounded shadow-sm border border-blue-800 text-sm sm:text-base">
            Hi there!
          </button>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-4 sm:mb-6">
            {displayed}
            <span className="inline-block align-middle ml-1 h-8 border-r-2 border-blue-900 animate-pulse"></span>
          </h1>

          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            A passionate Front-End Developer crafting responsive, accessible,
            and user-friendly websites. I love to create beautiful and
            responsive websites utilizing reusable components.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
            <a
              href="/contact"
              className="bg-blue-900 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-blue-800 transition text-sm sm:text-base text-center"
            >
              HIRE ME
            </a>
            <a
              href="https://drive.google.com/file/d/1NRDOtLueZR4oUjFojnxbt_JnoKdXAeT0/view?usp=drive_link"
              download
              className="bg-white text-blue-900 font-semibold py-2.5 sm:py-3 px-4 sm:px-6 border border-blue-800 rounded-md hover:bg-blue-900 hover:text-white transition text-sm sm:text-base text-center"
            >
              VIEW CV
            </a>
          </div>
        </div>

        <div className="w-48 sm:w-64 md:w-64 lg:w-80 h-48 sm:h-64 md:h-64 lg:h-80 rounded-full overflow-hidden shadow-lg border-4 border-blue-900 mb-4 md:mb-0">
          <img
            src="/szn.jpg"
            alt="Egbeyemi Olamilekan"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
