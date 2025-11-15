import React from 'react';
import { Github } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { Section } from '../layout/Section';
import danushPfp from '../../assets/danush_pfp.jpg';

export const Hero = React.forwardRef(({ onNavClick }, ref) => (
  <Section ref={ref} id="hero" className="hero-section">
    <div className="hero-content-wrapper">
      {/* Left Content */}
      <div className="hero-text-content">
        <h1 className="hero-title">
          Hi, I'm{' '}
          <span className="hero-title-name" style={{ whiteSpace: 'nowrap' }}>
            {portfolioData.name.replace(/ /g, '\u00A0')}
          </span>
        </h1>
        <p className="hero-headline">
          {portfolioData.headline}
        </p>
        <div className="hero-buttons">
          <a
            href="#contact"
            onClick={(e) => onNavClick('#contact')}
            className="hero-button-primary"
          >
            Get in Touch
          </a>
          <a
            href="/danush_resume_updated.pdf"
            download
            className="hero-button-secondary"
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            <span className="hero-button-icon" style={{ marginRight: '0.5rem' }}>📄</span>
            Download Resume
          </a>
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button-secondary"
          >
            <Github size={20} className="hero-button-icon" />
            GitHub
          </a>
        </div>
      </div>
      {/* Right Content - Profile Image */}
      <div className="hero-orb-wrapper">
        <div className="hero-orb-container">
          <div className="hero-orb-blur-1"></div>
          <div className="hero-orb-blur-2"></div>
          <div className="hero-orb-inner">
            <img
              src={danushPfp}
              alt="Danush Tej Yadav profile"
              className="hero-orb-image"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
        </div>
      </div>
    </div>
  </Section>
));