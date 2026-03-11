import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 70);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => io.observe(el));

    // Navbar shadow on scroll
    const nav = document.querySelector('nav');
    const handleScroll = () => {
      if (nav) {
        nav.style.boxShadow = window.scrollY > 30 ? '0 1px 20px rgba(28,13,8,0.06)' : 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      reveals.forEach(el => io.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Process />
      <Services />
      <Portfolio />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
