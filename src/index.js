import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';
import Transactionpage from './pages/transactionpage.js';


import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>, 
    },
    {
      path: "/transactions",
      element: <Transactionpage/>,
    },
   
  ]);

ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root'));