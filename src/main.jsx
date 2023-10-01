import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './layout/mainLayout.jsx';
import Home from './page/home.jsx';
import Contact from './page/contact.jsx';
import Login from './page/login.jsx';
import Register from './page/register.jsx';
import ErrorPage from './page/errorpage.jsx';
import { AppProvider } from './context/userContext';
import Order from './page/orders';

import PrivateRoute from './route/privateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/contact', element: <Contact /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      {
        path: '/orders',
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
