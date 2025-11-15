import React, { useState, useEffect, useRef } from 'react';
import { GlobalStyles } from './components/GlobalStyles';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';

export default function App() {
  const [mousePosition, setMousePosition] =useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('hero');

  // Refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Effect for mouse-following gradient
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Effect for active section highlighting
  useEffect(() => {
    const sectionRefs = [
      { id: 'hero', ref: heroRef },
      { id: 'about', ref: aboutRef },
      { id: 'projects', ref: projectsRef },
      { id: 'skills', ref: skillsRef },
      { id: 'contact', ref: contactRef },
    ];
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Triggers when section is at vertical center
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionRefs.forEach(section => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sectionRefs.forEach(section => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);
  
  // Handle smooth scrolling
  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop;
      // We subtract the header height (64px) to align correctly
      window.scrollTo({
        top: offsetTop - 64,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="app-wrapper">
      <GlobalStyles /> {/* This injects all the CSS */}
      
      {/* Radial gradient background */}
      <div 
        className="app-background-gradient"
        style={{
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`,
        }}
      ></div>
      
      <Header onNavClick={handleNavClick} activeSection={activeSection} />
      
      <main>
        <Hero onNavClick={handleNavClick} ref={heroRef} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Skills ref={skillsRef} />
        <Contact ref={contactRef} />
      </main>
      
      <Footer />
    </div>
  );
}