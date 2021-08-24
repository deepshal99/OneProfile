import React, { lazy, Suspense } from 'react';

const LazyExperienceField = lazy(() => import('./ExperienceField'));

const ExperienceField = props => (
  <Suspense fallback={null}>
    <LazyExperienceField {...props} />
  </Suspense>
);

export default ExperienceField;
