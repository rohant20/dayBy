import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './index.css';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App pageId={0} />,
    errorElement: <h1>Not Found MF 404</h1>
  },
  {
    path: "/list",
    element: <App pageId={1} />,
    errorElement: <h1>Not Found MF 404</h1>
  }
]);

// Fixes:
//    -Creater a '404 Not Found' component and style it


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
