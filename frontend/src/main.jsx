import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Pages/Home';
import ErrorPage from './Pages/errorPage';
import Contact from './Pages/Contact';
import About from './Pages/About';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,errorElement:<ErrorPage/>
  },
// ส่วนของ path และ element เราสามารถเพิ่มมาอีกได้เรื่อย ๆ กรณีที่เรามีหลายเพจ
{path:"/about",
element:<About/>,
},
{
  path:"/contact",
  element:<Contact/>
}

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);