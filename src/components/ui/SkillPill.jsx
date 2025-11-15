import React from 'react';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll';

export const SkillPill = ({ children }) => {
  const [ref, isVisible] = useAnimateOnScroll({ threshold: 0.5 });
  return (
    <span
      ref={ref}
      className={`skill-pill ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </span>
  );
};