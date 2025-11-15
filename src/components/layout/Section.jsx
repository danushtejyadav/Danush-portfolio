import React from 'react';

export const Section = React.forwardRef(({ id, children, className = "" }, ref) => (
  <section ref={ref} id={id} className={`section ${className}`}>
    {children}
  </section>
));