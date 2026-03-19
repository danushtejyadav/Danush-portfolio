# React + Vite

# Danush Portfolio

A modern, interactive portfolio website for Danush Tej Yadav, built with React, Vite, and Tailwind CSS. This project showcases projects, skills, and contact information in a clean, responsive design.

## Live Website

Paste your hosted website link here:

```txt
https://your-portfolio-link.com
```

## Features

- Animated hero section with profile image
- About, Projects, Skills, and Contact sections
- AI-powered message draft helper
- Responsive design with Tailwind CSS
- Easy to customize and extend

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/danushtejyadav/Danush-portfolio.git
   cd Danush-portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```

## Gemini + Netlify Setup

The ice-breaker generator now sends Gemini requests through a Netlify Function, which keeps the API key off the client.

Add this environment variable in Netlify before redeploying:

```bash
GEMINI_API_KEY=your_google_ai_api_key
```

After saving the variable, trigger a new deploy.

## Project Structure

- `src/components/` - React components for layout and sections
- `src/data/portfolioData.js` - Main data for projects, skills, and profile
- `src/api/gemini.js` - Frontend helper for AI message drafts
- `netlify/functions/gemini.js` - Netlify function that calls Gemini securely
- `public/` - Static assets

## Contact

- **Email:** danushtejyadav@gmail.com
- **GitHub:** [danushtejyadav](https://github.com/danushtejyadav)
- **LinkedIn:** [Danush Tej Yadav](https://www.linkedin.com/in/danush-tej-yadav-s/)

---

Built by Danush Tej Yadav
