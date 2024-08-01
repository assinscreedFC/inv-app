import React, { useContext, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  useParams,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Items from './pages/Items.jsx';
import Categories from './pages/Categories.jsx';
import Carte from './components/Carte.jsx';
import CreateCat from './components/CreateCat.jsx';
import CreateIte from './components/CreateIte.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Navigate to="categories" />
      },
      {
        
        path: "categories",
        element: <Categories/>,
        
      },
      {
        path:"categories/new",
        element: <CreateCat/>
      },
      {
        path:"items/new",
        element: <CreateIte/>
      },
      { 
        path:"items",
        element: <Items/>,
        children:[
          {
            path:":name",
            element: <h1>adda</h1>
          }
          
        ]
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
