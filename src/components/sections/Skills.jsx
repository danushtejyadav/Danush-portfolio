import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { SkillPill } from '../ui/SkillPill';

export const Skills = React.forwardRef((props, ref) => (
  <Section ref={ref} id="skills">
    <SectionTitle>Tech Stack</SectionTitle>
    {Object.entries(portfolioData.skills).map(([category, skills]) => (
      <div key={category} style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#67e8f9', fontWeight: 700, marginBottom: '0.75rem', fontSize: '1.15rem' }}>{category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
        <div className="skills-container">
          {skills.map(skill => (
            <SkillPill key={skill}>{skill}</SkillPill>
          ))}
        </div>
      </div>
    ))}
  </Section>
));