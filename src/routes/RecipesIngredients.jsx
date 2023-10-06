import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const RecipesIngredients = () =>{

    const [recipesList, setRecipesList] = useState([]);

    const {ingredientName} = useParams();

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientName}`)
        .then((res) => res.json())
        .then((data) => setRecipesList(data.meals))
        .catch((err) => console.log(err));
    }, []);

    return (
        <main className="bg-white-card py-4 px-4">
            <h2 className="text-4xl text-subtitle my-4 ml-2">Lista de receitas com o ingrediente {ingredientName}: </h2>
            <ul className="md:grid md:grid-cols-3 md:gap-4">
                {recipesList.map((recipe) => (
                    <li key={recipe.idMeal} className="bg-card rounded my-2 px-2 py-4">
                        <h3 className="text-subtitle text-2xl mb-4">{recipe.strMeal}</h3>
                        <Link to={`/recipe/${recipe.idMeal}`}><img className="rounded block mx-auto" src={recipe.strMealThumb} alt={`Foto de ${recipe.strMeal}`} /></Link>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default RecipesIngredients;
