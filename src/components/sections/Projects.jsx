import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { ProjectCard } from '../ui/ProjectCard';

export const Projects = React.forwardRef((props, ref) => (
  <Section ref={ref} id="projects">
    <SectionTitle>My Projects</SectionTitle>
    <div className="projects-grid">
      {portfolioData.projects.map(project => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </Section>
));