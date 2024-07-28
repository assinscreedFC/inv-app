import React from 'react'
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

const CarteWrapper = () => {
  const params = useParams();
  return <Carte val={params.name} />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Navigate to="/categories" />
      },
      {
        
        path: "categories",
        element: <Categories/>
      },
      { 
        path:"items",
        element: <Items/>,
        children:[
          {
            path:":name",
            element: <CarteWrapper/>
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
