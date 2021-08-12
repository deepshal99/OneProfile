import React, { lazy, Suspense } from 'react';

const LazyExperienceBox = lazy(() => import('./ExperienceBox'));

const ExperienceBox = props => (
  <Suspense fallback={null}>
    <LazyExperienceBox {...props} />
  </Suspense>
);

export default ExperienceBox;
