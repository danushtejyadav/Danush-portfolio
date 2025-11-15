import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';

export const About = React.forwardRef((props, ref) => {
  const [animRef, isVisible] = useAnimateOnScroll({ threshold: 0.3 });
  return (
    <Section ref={ref} id="about">
      <SectionTitle>About Me</SectionTitle>
      <div
        ref={animRef}
        className={`about-content ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="about-bio-wrapper">
          <p className="about-bio-text">
            {portfolioData.about}
          </p>
        </div>
      </div>
    </Section>
  );
});