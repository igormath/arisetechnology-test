import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {

    const [recipe, setRecipe] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => res.json())
        .then((data) => setRecipe(data.meals[0]))
        .catch((err) => console.log(err));
    }, []);

    const createIngredientList = () => {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = recipe[`strIngredient${i}`];
          const measure = recipe[`strMeasure${i}`];
    
          if (ingredient && measure) {
            ingredients.push(
              <li key={i} className="text-2xl my-1 md:text-center">
                <p>
                  {measure} {ingredient}
                </p>
              </li>
            );
          }
        }
        return ingredients;
      };

    return (
        <main className="bg-white-card py-4 px-4">
            <div className="bg-card rounded p-2 md:w-11/12 md:block md:mx-auto">
                <h2 className="text-4xl text-subtitle mb-4 md:p-4">{recipe.strMeal}</h2>
                <img className="rounded block mx-auto" src={recipe.strMealThumb} alt="Recipe photo" />
                <h3 className="text-2xl my-2 md:text-center"><mark className="text-subtitle bg-transparent">Categoria:</mark> {recipe.strCategory}</h3>
                <h3 className="text-2xl my-2 md:text-center"><mark className="text-subtitle bg-transparent">Região:</mark> {recipe.strArea}</h3>
                {recipe.strTags && <h3 className="text-2xl md:text-center"><mark className="text-subtitle bg-transparent">Tags:</mark> {recipe.strTags}</h3>}
                <h3 className="text-2xl my-2 text-subtitle md:text-center">Lista de ingredientes: </h3>
                <ul>
                    {createIngredientList()}
                </ul>
                <h3 className="text-2xl my-2 md:mx-4 text-subtitle">Modo de preparo: </h3>
                <p className="text-xl md:px-8">{recipe.strInstructions}</p>
            </div>
        </main>
    );
};

export default Recipe;
