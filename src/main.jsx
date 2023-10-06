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
import ErrorPage from './routes/ErrorPage.jsx';
import RecipesIngredients from './routes/RecipesIngredients.jsx';
import Recipe from './routes/Recipe.jsx';

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
        path: "search/ingredients/:ingredientName",
        element: <RecipesIngredients/>,
      },
      {
        path: "recipe/:id",
        element: <Recipe/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
