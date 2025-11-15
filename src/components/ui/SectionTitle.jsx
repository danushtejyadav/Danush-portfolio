import React from 'react';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll';

export const SectionTitle = ({ children }) => {
  const [ref, isVisible] = useAnimateOnScroll();
  return (
    <h2
      ref={ref}
      className={`section-title ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
      <span className="section-title-underline"></span>
    </h2>
  );
};