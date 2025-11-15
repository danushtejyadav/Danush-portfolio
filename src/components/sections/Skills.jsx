import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { SkillPill } from '../ui/SkillPill';

export const Skills = React.forwardRef((props, ref) => (
  <Section ref={ref} id="skills">
    <SectionTitle>Tech Stack</SectionTitle>
    <div className="skills-container">
      {portfolioData.skills.map(skill => (
        <SkillPill key={skill}>{skill}</SkillPill>
      ))}
    </div>
  </Section>
));