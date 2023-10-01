import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './routes/Home.jsx';
import NameSearch from './routes/NameSearch.jsx';
import FirstLetterSearch from './routes/FirstLetterSearch.jsx';
import IngredientsSearch from './routes/IngredientsSearch.jsx';
import Bookmarks from './routes/Bookmarks.jsx';
import ErrorPage from './routes/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "search/name",
        element: <NameSearch/>,
      },
      {
        path: "search/firstletter",
        element: <FirstLetterSearch/>,
      },
      {
        path: "search/ingredients",
        element: <IngredientsSearch/>,
      },
      {
        path: "bookmarks",
        element: <Bookmarks/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
