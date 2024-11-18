import React, { FunctionComponent, Suspense } from 'react';
import { Spin } from 'antd';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Forms from './Forms';
import TablesPage from './Tables/TablesPage';

const Router: FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="forms"
      element={
        <Suspense fallback={<Spin />}>
          <Forms />
        </Suspense>
      }
    />
    <Route
      path="tables"
      element={
        <Suspense fallback={<Spin />}>
          <TablesPage />
        </Suspense>
      }
    />
  </Routes>
);

export default Router;
