import React from 'react';
import Login from './components/Login';
import Data from './components/Data';

export const routes = [
  {
    path: '/',
    component: <Login />,
  },
  {
    path: '/data',
    component: <Data />,
  },
];
