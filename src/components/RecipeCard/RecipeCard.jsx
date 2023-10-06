import { Link } from "react-router-dom";

const RecipeCard = ({strMeal, strIngredient1, strIngredient2, strIngredient3, strMealThumb, strSource, strYoutube, idMeal}) =>{
    return(
        <div className="block m-auto md:w-4/6">
        <section className="bg-card rounded px-2 py-4">
                    <h3 className="text-subtitle text-3xl">{strMeal}</h3>
                    <p className="text-start lg:my-3 text-lg">Alguns dos Ingredientes: <mark className="text-subtitle bg-transparent">{strIngredient1}, {strIngredient2} e {strIngredient3}</mark></p>
                    <Link to={`/recipe/${idMeal}`}><img src={strMealThumb} alt="Recipe photo" className="rounded mt-5 md:w-11/12 m-auto"/></Link>
                    <div>
                        <p className="my-5 text-lg">Receita completa: </p>
                        <div className="flex flex-row justify-evenly">
                            <a href={strSource} className="bg-button-color text-button rounded w-1/3 text-center hover:opacity-80 text-lg">Texto</a>
                            <a href={strYoutube} className="bg-button-color text-button rounded w-1/3 text-center hover:opacity-80 text-lg">Vídeo</a>
                        </div>
                    </div>
            </section>
        </div>
    );
};

export default RecipeCard;
