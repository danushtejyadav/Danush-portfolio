import React from 'react';

// --- (5) CSS STYLES ---
export const GlobalStyles = () => (
  <style>{`
    /* --- CSS Reset & Global --- */
    *, *::before, *::after {
      box-sizing: border-box;
    }
    html {
      scroll-behavior: smooth;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: sans-serif; /* Replaces font-sans */
    }
    body {
      margin: 0;
      color: #f3f4f6; /* text-gray-100 */
      background-color: #030712; /* bg-gray-950 */
      line-height: 1.625; /* leading-relaxed */
      text-align: center; /* <-- ADDED FOR GLOBAL CENTER ALIGNMENT */
    }
    a {
      color: inherit;
      text-decoration: inherit;
    }
    button {
      font-family: inherit;
      font-size: 100%;
      font-weight: inherit;
      line-height: inherit;
      color: inherit;
      margin: 0;
      padding: 0;
      border: none;
      background: none;
      cursor: pointer;
    }
    
    /* --- Keyframes --- */
    @keyframes pulse {
      50% { opacity: 0.5; }
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    /* --- Utility Classes --- */
    .loader-spin {
      animation: spin 1s linear infinite;
    }
    
    /* --- App Wrapper --- */
    .app-wrapper {
      /* Handled by body */
    }
    .app-background-gradient {
      position: fixed;
      inset: 0;
      z-index: -10;
      height: 100%;
      width: 100%;
      background-color: #030712; /* bg-gray-950 */
      background-image: radial-gradient(ellipse 80% 80% at var(--mouse-x) var(--mouse-y), rgba(30,58,138,0.3), rgba(255,255,255,0));
    }

    /* --- Header --- */
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      background-color: rgba(3, 7, 18, 0.5); /* bg-gray-950/50 */
      backdrop-filter: blur(1.5rem); /* backdrop-blur-xl */
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
      border-bottom: 1px solid rgba(31, 41, 55, 0.5); /* border-gray-800/50 */
    }
    .header-container {
      width: 100%;
      max-width: 64rem; /* max-w-5xl */
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem; /* px-4 */
      padding-right: 1rem;
    }
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 4rem; /* h-16 */
    }
    .header-logo {
      font-size: 1.25rem; /* text-xl */
      font-weight: 700; /* font-bold */
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: linear-gradient(to right, #67e8f9, #818cf8); /* from-cyan-300 to-indigo-400 */
    }
    .header-nav-desktop {
      display: none; /* hidden */
      gap: 2rem; /* space-x-8 */
    }
    .header-nav-link {
      font-weight: 500; /* font-medium */
      color: #d1d5db; /* text-gray-300 */
      transition: color 0.2s ease-in-out;
    }
    .header-nav-link:hover {
      color: #22d3ee; /* hover:text-cyan-400 */
    }
    .header-nav-link.is-active {
      color: #22d3ee; /* text-cyan-400 */
    }
    .header-menu-button-wrapper {
      display: block;
    }
    .header-menu-button {
      color: #d1d5db; /* text-gray-300 */
      transition: color 0.2s ease-in-out;
    }
    .header-menu-button:hover {
      color: #22d3ee; /* hover:text-cyan-400 */
    }
    .header-mobile-overlay {
      position: absolute;
      top: 4rem; /* 64px */
      left: 0;
      right: 0;
      background-color: rgba(17, 24, 39, 0.95); /* bg-gray-900/95 */
      backdrop-filter: blur(1rem); /* backdrop-blur-lg */
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #1f2937; /* border-gray-800 */
    }
    .header-nav-mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem; /* space-y-4 */
    }
    .header-nav-link-mobile {
      font-size: 1.125rem; /* text-lg */
      font-weight: 500;
      color: #e5e7eb; /* text-gray-200 */
      transition: color 0.2s ease-in-out;
    }
    .header-nav-link-mobile:hover {
      color: #22d3ee;
    }
    .header-nav-link-mobile.is-active {
      color: #22d3ee;
    }

    /* --- Section --- */
    .section {
      width: 100%;
      max-width: 64rem; /* max-w-5xl */
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem; /* px-4 */
      padding-right: 1rem;
      padding-top: 5rem; /* py-20 */
      padding-bottom: 5rem;
    }

    /* --- SectionTitle --- */
    .section-title {
      font-size: 1.875rem; /* text-3xl */
      font-weight: 800; /* font-extrabold */
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: linear-gradient(to right, #67e8f9, #818cf8);
      margin-bottom: 3rem; /* mb-12 */
      position: relative;
      display: inline-block;
      transition: all 700ms ease-out;
      opacity: 0;
      transform: translateY(2.5rem); /* translate-y-10 */
    }
    .section-title.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
    .section-title-underline {
      position: absolute;
      left: 0;
      bottom: -0.625rem; /* -bottom-2.5 */
      height: 0.25rem; /* h-1 */
      width: 50%; /* w-1/2 */
      background-image: linear-gradient(to right, #22d3ee, #6366f1);
      border-radius: 9999px; /* rounded-full */
      /* Center the underline */
      left: 50%;
      transform: translateX(-50%);
    }

    /* --- SkillPill --- */
    .skill-pill {
      display: inline-block;
      background-color: rgba(34, 211, 238, 0.1); /* bg-cyan-400/10 */
      border: 1px solid rgba(34, 211, 238, 0.3); /* border-cyan-400/30 */
      color: #67e8f9; /* text-cyan-300 */
      border-radius: 9999px;
      padding: 0.5rem 1rem; /* px-4 py-2 */
      font-size: 0.875rem; /* text-sm */
      font-weight: 500; /* font-medium */
      backdrop-filter: blur(0.25rem); /* backdrop-blur-sm */
      transition: all 500ms ease-out;
      opacity: 0;
      transform: translateY(1.25rem); /* translate-y-5 */
    }
    .skill-pill.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* --- ProjectCard --- */
    .project-card {
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 0.75rem; /* rounded-xl */
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
      overflow: hidden;
      transition: all 700ms ease-out;
      opacity: 0;
      transform: translateY(2.5rem); /* translate-y-10 */
      border: 1px solid rgba(55, 65, 81, 0.5); /* border-gray-700/50 */
      backdrop-filter: blur(1rem); /* backdrop-blur-lg */
      display: flex;
      flex-direction: column;
      text-align: left; /* <-- Overrule global center for card content */
    }
    .project-card.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
    .project-card:hover {
      box-shadow: 0 20px 25px -5px rgba(6, 182, 212, 0.1), 0 10px 10px -5px rgba(6, 182, 212, 0.04); /* hover:shadow-2xl hover:shadow-cyan-500/10 */
      border-color: rgba(34, 211, 238, 0.5); /* hover:border-cyan-400/50 */
    }
    .project-card-content {
      padding: 1.5rem; /* p-6 */
      flex-grow: 1;
    }
    .project-card-title {
      font-size: 1.25rem; /* text-xl */
      font-weight: 700; /* font-bold */
      color: #f3f4f6; /* text-gray-100 */
      margin-bottom: 0.5rem; /* mb-2 */
    }
    .project-card-description {
      color: #9ca3af; /* text-gray-400 */
      margin-bottom: 1rem; /* mb-4 */
      font-size: 0.875rem; /* text-sm */
      line-height: 1.625; /* leading-relaxed */
    }
    .project-card-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem; /* gap-2 */
    }
    .project-card-tag {
      font-size: 0.75rem; /* text-xs */
      font-weight: 600; /* font-semibold */
      color: #67e8f9; /* text-cyan-300 */
      background-color: rgba(22, 78, 99, 0.3); /* bg-cyan-900/30 */
      padding: 0.25rem 0.625rem; /* px-2.5 py-1 */
      border-radius: 9999px;
    }
    .project-card-footer {
      background-color: rgba(0, 0, 0, 0.2); /* bg-black/20 */
      padding: 1rem; /* p-4 */
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem; /* space-x-3 */
      border-top: 1px solid rgba(55, 65, 81, 0.5); /* border-gray-700/50 */
    }
    .project-card-link {
      display: flex;
      align-items: center;
      font-size: 0.875rem; /* text-sm */
      font-weight: 500; /* font-medium */
      transition: color 0.2s ease-in-out;
    }
    .project-card-link.live {
      color: #22d3ee; /* text-cyan-400 */
    }
    .project-card:hover .project-card-link.live {
      color: #a5f3fc; /* group-hover:text-cyan-200 */
    }
    .project-card-link.repo {
      color: #9ca3af; /* text-gray-400 */
    }
    .project-card:hover .project-card-link.repo {
      color: #f3f4f6; /* group-hover:text-gray-100 */
    }
    .project-card-link-icon {
      margin-right: 0.375rem; /* mr-1.5 */
      transition: transform 0.2s ease-in-out;
    }
    .project-card-status {
      display: flex;
      align-items: center;
      font-size: 0.875rem; /* text-sm */
      font-weight: 500; /* font-medium */
      color: #6b7280; /* text-gray-500 */
      cursor: default;
    }
    .project-card-status .project-card-link-icon {
      margin-right: 0.375rem; /* mr-1.5 */
    }
    .project-card:hover .project-card-link.live .project-card-link-icon {
      transform: translate(0.125rem, -0.125rem); /* group-hover:-translate-y-0.5 group-hover:translate-x-0.5 */
    }
    .project-card:hover .project-card-link.repo .project-card-link-icon {
      transform: translateX(0.125rem); /* group-hover:translate-x-0.5 */
    }
    
    /* --- Hero Section --- */
    .hero-section {
      padding-top: 8rem; /* pt-32 */
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
    .hero-content-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 3rem; /* gap-12 */
    }
    .hero-text-content {
      /* md:w-3/5 */
    }
    .hero-title {
      font-size: 2.25rem; /* text-4xl */
      font-weight: 800; /* font-extrabold */
      color: #ffffff;
      line-height: 1.2; /* leading-tight */
      margin-bottom: 1.5rem; /* mb-6 */
    }
    .hero-title-name {
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: linear-gradient(to right, #67e8f9, #818cf8);
    }
    .hero-headline {
      font-size: 1.25rem; /* text-xl */
      color: #d1d5db; /* text-gray-300 */
      margin-bottom: 2rem; /* mb-8 */
      max-width: 32rem; /* max-w-lg */
    }
    .hero-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem; /* gap-4 */
      justify-content: center; /* <-- ADDED */
    }
    .hero-button-primary {
      padding: 0.75rem 1.5rem; /* px-6 py-3 */
      background-image: linear-gradient(to right, #22d3ee, #6366f1);
      color: #ffffff;
      font-weight: 600; /* font-semibold */
      border-radius: 0.5rem; /* rounded-lg */
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
      transition: all 0.3s ease-in-out;
      transform: scale(1);
    }
    .hero-button-primary:hover {
      background-image: linear-gradient(to right, #06b6d4, #4f46e5);
      transform: scale(1.05);
    }
    .hero-button-secondary {
      padding: 0.75rem 1.5rem; /* px-6 py-3 */
      background-color: rgba(31, 41, 55, 0.5); /* bg-gray-800/50 */
      border: 1px solid #374151; /* border-gray-700 */
      color: #d1d5db; /* text-gray-300 */
      font-weight: 600; /* font-semibold */
      border-radius: 0.5rem; /* rounded-lg */
      transition: all 0.3s ease-in-out;
      display: inline-flex;
      align-items: center;
    }
    .hero-button-secondary:hover {
      background-color: rgba(55, 65, 81, 0.7); /* hover:bg-gray-700/70 */
      color: #ffffff; /* hover:text-white */
    }
    .hero-button-icon {
      display: inline;
      margin-right: 0.5rem; /* mr-2 */
    }
    .hero-orb-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .hero-orb-container {
      position: relative;
      width: 16rem; /* w-64 */
      height: 16rem; /* h-64 */
    }
    .hero-orb-blur-1, .hero-orb-blur-2 {
      position: absolute;
      inset: 0;
      border-radius: 9999px; /* rounded-full */
      filter: blur(2rem); /* blur-2xl */
      opacity: 0.5;
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    .hero-orb-blur-1 {
      background-image: linear-gradient(to right, #22d3ee, #6366f1);
    }
    .hero-orb-blur-2 {
      background-image: linear-gradient(to right, #6366f1, #22d3ee);
      opacity: 0.3;
      animation-delay: -2s;
    }
    .hero-orb-inner {
      position: absolute;
      inset: 2rem; /* inset-8 */
      background-color: #111827; /* bg-gray-900 */
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06); /* shadow-inner */
    }
    .hero-orb-initials {
      font-size: 4.5rem; /* text-7xl */
      font-weight: 700; /* font-bold */
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: linear-gradient(to right, #67e8f9, #818cf8);
    }
    
    /* --- About Section --- */
    .about-content {
      transition: all 700ms ease-out;
      opacity: 0;
      transform: translateY(2.5rem); /* translate-y-10 */
    }
    .about-content.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
    .about-bio-wrapper {
      position: relative;
      max-width: 48rem; /* max-w-3xl */
      margin: 0 auto; /* Center the wrapper */
    }
    .bio-loader-overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(17, 24, 39, 0.5); /* bg-gray-900/50 */
      backdrop-filter: blur(0.125rem); /* backdrop-blur-sm */
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem; /* rounded-lg */
      z-index: 10;
      color: #22d3ee;
    }
    .about-bio-text {
      font-size: 1.125rem; /* text-lg */
      color: #d1d5db; /* text-gray-300 */
      line-height: 1.75; /* leading-relaxed */
    }
    .gemini-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem; /* gap-3 */
      margin-top: 1.5rem; /* mt-6 */
      justify-content: center; /* <-- ADDED */
    }
    .gemini-button {
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem; /* px-4 py-2 */
      background-color: rgba(31, 41, 55, 0.5); /* bg-gray-800/50 */
      border: 1px solid #374151; /* border-gray-700 */
      color: #67e8f9; /* text-cyan-300 */
      font-size: 0.875rem; /* text-sm */
      font-weight: 500; /* font-medium */
      border-radius: 0.5rem; /* rounded-lg */
      transition: background-color 0.3s;
    }
    .gemini-button:hover {
      background-color: rgba(55, 65, 81, 0.7); /* hover:bg-gray-700/70 */
    }
    .gemini-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .gemini-button-icon {
      margin-right: 0.5rem; /* mr-2 */
    }
    .gemini-button-reset {
      padding: 0.5rem 1rem; /* px-4 py-2 */
      color: #9ca3af; /* text-gray-400 */
      font-size: 0.875rem; /* text-sm */
      font-weight: 500; /* font-medium */
      border-radius: 0.5rem; /* rounded-lg */
      transition: color 0.3s;
    }
    .gemini-button-reset:hover {
      color: #ffffff; /* hover:text-white */
    }
    .gemini-button-reset:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    /* --- Projects Section --- */
    .projects-grid {
      display: grid;
      gap: 2rem; /* gap-8 */
    }

    /* --- Skills Section --- */
    .skills-container {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem; /* gap-3 */
      justify-content: center; /* <-- ADDED */
    }

    /* --- Contact Section --- */
    .contact-content {
      max-width: 42rem; /* max-w-xl */
      transition: all 700ms ease-out;
      opacity: 0;
      transform: translateY(2.5rem); /* translate-y-10 */
      margin: 0 auto; /* Center the wrapper */
    }
    .contact-content.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
    .contact-intro {
      font-size: 1.125rem; /* text-lg */
      color: #d1d5db; /* text-gray-300 */
      margin-bottom: 2rem; /* mb-8 */
    }
    .contact-email-link {
      display: inline-flex;
      align-items: center;
      font-size: 1.25rem; /* text-xl */
      font-weight: 600; /* font-semibold */
      color: #22d3ee; /* text-cyan-400 */
      transition: color 0.3s;
    }
    .contact-email-link:hover {
      color: #67e8f9; /* hover:text-cyan-300 */
    }
    .contact-email-icon {
      margin-right: 0.75rem; /* mr-3 */
    }
    .contact-socials {
      display: flex;
      gap: 1.5rem; /* space-x-6 */
      margin-top: 2rem; /* mt-8 */
      justify-content: center; /* <-- ADDED */
    }
    .contact-social-link {
      color: #9ca3af; /* text-gray-400 */
      transition: color 0.3s;
    }
    .contact-social-link:hover {
      color: #22d3ee; /* hover:text-cyan-400 */
    }
    .contact-gemini-feature {
      margin-top: 3rem; /* mt-12 */
    }
    .contact-gemini-title {
      font-size: 1.125rem; /* text-lg */
      font-weight: 600; /* font-semibold */
      color: #e5e7eb; /* text-gray-200 */
      margin-bottom: 1rem; /* mb-4 */
    }
    .draft-loader-text {
      margin-top: 1rem; /* mt-4 */
      display: flex;
      align-items: center;
      color: #9ca3af; /* text-gray-400 */
      justify-content: center; /* <-- ADDED */
    }
    .draft-results-container {
      margin-top: 1.5rem; /* mt-6 */
    }
    .draft-textarea-wrapper {
      position: relative;
    }
    .draft-textarea {
      width: 100%;
      height: 12rem; /* h-48 */
      padding: 1rem; /* p-4 */
      background-color: rgba(17, 24, 39, 0.7); /* bg-gray-900/70 */
      border: 1px solid #374151; /* border-gray-700 */
      border-radius: 0.5rem; /* rounded-lg */
      color: #d1d5db; /* text-gray-300 */
      font-family: monospace;
      font-size: 0.875rem; /* text-sm */
      line-height: 1.625; /* leading-relaxed */
      resize: none;
      text-align: left; /* <-- Overrule global center for readability */
    }
    .draft-textarea:focus {
      outline: none;
      border-color: #22d3ee; /* focus:border-cyan-400 */
    }
    .draft-copy-button {
      position: absolute;
      top: 0.75rem; /* top-3 */
      right: 0.75rem; /* right-3 */
      padding: 0.25rem 0.75rem; /* px-3 py-1 */
      background-color: #374151; /* bg-gray-700 */
      color: #e5e7eb; /* text-gray-200 */
      border-radius: 0.375rem; /* rounded-md */
      font-size: 0.75rem; /* text-xs */
      transition: background-color 0.3s;
    }
    .draft-copy-button:hover {
      background-color: #4b5563; /* hover:bg-gray-600 */
    }
    .mailto-button {
      margin-top: 0.75rem; /* mt-3 */
      width: 100%; /* Full width on mobile */
      justify-content: center;
      text-decoration: none;
    }

    /* --- Footer --- */
    .footer {
      width: 100%;
      max-width: 64rem; /* max-w-5xl */
      margin-left: auto;
      margin-right: auto;
      padding: 2rem 1rem; /* py-8 px-4 */
      border-top: 1px solid rgba(31, 41, 55, 0.5); /* border-gray-800/50 */
    }
    .footer-text {
      text-align: center;
      color: #6b7280; /* text-gray-500 */
      font-size: 0.875rem; /* text-sm */
    }

    /* --- Responsive Styles --- */
    @media (min-width: 640px) { /* sm */
      .section {
        padding-left: 1.5rem; /* sm:px-6 */
        padding-right: 1.5rem;
        padding-top: 6rem; /* sm:py-24 */
        padding-bottom: 6rem;
      }
      .section-title {
        font-size: 2.25rem; /* sm:text-4xl */
      }
      .hero-section {
        padding-top: 10rem; /* sm:pt-40 */
      }
      .hero-title {
        font-size: 3rem; /* sm:text-5xl */
      }
      .hero-headline {
        font-size: 1.5rem; /* sm:text-2xl */
      }
      .hero-orb-container {
        width: 20rem; /* sm:w-80 */
        height: 20rem; /* sm:h-80 */
      }
      .hero-orb-initials {
        font-size: 5.25rem; /* sm:text-8xl */
      }
      .mailto-button {
        width: auto; /* Auto width on desktop */
      }
    }
    
    @media (min-width: 768px) { /* md */
      .header-nav-desktop {
        display: flex;
      }
      .header-menu-button-wrapper {
        display: none;
      }
      .hero-content-wrapper {
        flex-direction: row;
      }
      .hero-text-content {
        width: 60%; /* md:w-3/5 */
        text-align: left; /* <-- Overrule global center on desktop */
      }
      .hero-buttons {
        justify-content: flex-start; /* <-- Overrule global center on desktop */
      }
      .hero-orb-wrapper {
        width: 40%; /* md:w-2/5 */
      }
      .hero-title {
        font-size: 3.75rem; /* md:text-6xl */
      }
      .projects-grid {
        grid-template-columns: repeat(2, 1fr); /* md:grid-cols-2 */
      }
    }
    
    @media (min-width: 1024px) { /* lg */
      .header-container, .section, .footer {
        padding-left: 2rem; /* lg:px-8 */
        padding-right: 2rem;
      }
      .projects-grid {
        grid-template-columns: repeat(3, 1fr); /* lg:grid-cols-3 */
      }
    }
  `}</style>
);