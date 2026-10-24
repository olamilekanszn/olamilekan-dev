import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;