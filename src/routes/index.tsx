import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Forms from './Forms';

const About = lazy(() => import('./About'));

const Router: FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="about"
      element={
        <Suspense fallback={<Spin />}>
          <About />
        </Suspense>
      }
    />
    <Route
      path="forms"
      element={
        <Suspense fallback={<Spin />}>
          <Forms />
        </Suspense>
      }
    />
  </Routes>
);

export default Router;
