import React, { lazy, Suspense } from 'react';

const LazyAboutDetails = lazy(() => import('./AboutDetails'));

const AboutDetails = props => (
  <Suspense fallback={null}>
    <LazyAboutDetails {...props} />
  </Suspense>
);

export default AboutDetails;
