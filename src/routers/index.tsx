import React from 'react';
import HomePage from '../pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import CreateGlasses from '../pages/CreateGlasses';
import Dashboard from '../pages/Dashboard';

export interface IRenderRoutes {
  path: string;
  component: React.ReactNode;
  role?: string;
}

const renderRoutes = (routes: IRenderRoutes[]) => {
  return (
    <Routes>
      {routes.map((item: IRenderRoutes, index: number) => {
        return (
          <Route key={index} path={item.path} element={<Layout children={item.component} />} />
        );
      })}
    </Routes>
  );
};

export const routes: IRenderRoutes[] = [
  {
    path: '/home',
    component: <HomePage />,
  },
  {
    path: '/createGlasses',
    component: <CreateGlasses />,
  },
  {
    path: '/dashBoard',
    component: <Dashboard />,
  },
];

export default renderRoutes;
