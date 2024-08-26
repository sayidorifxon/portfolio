import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

let appRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/projects",
      element:<Projects/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);


