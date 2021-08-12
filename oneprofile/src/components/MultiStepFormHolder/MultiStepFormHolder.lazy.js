import React, { lazy, Suspense } from 'react';

const LazyMultiStepFormHolder = lazy(() => import('./MultiStepFormHolder'));

const MultiStepFormHolder = props => (
  <Suspense fallback={null}>
    <LazyMultiStepFormHolder {...props} />
  </Suspense>
);

export default MultiStepFormHolder;
