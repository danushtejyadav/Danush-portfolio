import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export const Footer = () => (
  <footer className="footer">
    <p className="footer-text">
      &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
    </p>
  </footer>
);