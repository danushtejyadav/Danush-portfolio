import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Header = ({ onNavClick, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    onNavClick(href);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="header-logo"
          >
            {portfolioData.name}
          </a>

          {/* Desktop Nav */}
          <nav className="header-nav-desktop">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`header-nav-link ${activeSection === item.href.substring(1) ? 'is-active' : ''}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="header-menu-button-wrapper">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="header-menu-button"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="header-mobile-overlay">
          <nav className="header-nav-mobile">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`header-nav-link-mobile ${activeSection === item.href.substring(1) ? 'is-active' : ''}`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};