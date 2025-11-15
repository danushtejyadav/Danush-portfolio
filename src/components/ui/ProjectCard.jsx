import React from 'react';
import { Github, ExternalLink, Lock, ServerOff } from 'lucide-react';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll';

export const ProjectCard = ({ project }) => {
  const [ref, isVisible] = useAnimateOnScroll({ threshold: 0.2 });

  // Helper function to render the live link or status
  const renderLiveStatus = () => {
    if (!project.liveUrl) {
      return null; // Don't render anything if null or undefined
    }

    switch (project.liveUrl) {
      case "NDA":
        return (
          <span className="project-card-status">
            <Lock size={16} className="project-card-link-icon" />
            Under NDA
          </span>
        );
      case "NOT_DEPLOYED":
        return (
          <span className="project-card-status">
            <ServerOff size={16} className="project-card-link-icon" />
            Not Deployed
          </span>
        );
      default:
        // Assume it's a valid URL
        return (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link live"
          >
            <ExternalLink size={16} className="project-card-link-icon" />
            Live Demo
          </a>
        );
    }
  };

  return (
    <div
      ref={ref}
      className={`project-card ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-card-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="project-card-footer">
        {renderLiveStatus()}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link repo"
          >
            <Github size={16} className="project-card-link-icon" />
            Code
          </a>
        )}
      </div>
    </div>
  );
};