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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
