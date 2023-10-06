import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard/RecipeCard";

const Home = () =>{

    const [mealList, setMealList] = useState([]);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((res) => res.json())
            .then((data) => {
                setMealList(data.meals[0]);
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <main className="bg-white-card py-4 px-4">
            <h2 className="text-xl my-4">Caso esteja sem ideia do que cozinhar, sugerimos a seguinte receita: </h2>
            <div className="block m-auto md:w-4/6">
                <RecipeCard {...mealList}/>
            </div>
            <p className="text-center mt-5">Você também pode voltar aqui nesta página sempre que quiser uma nova ideia de receita!</p>
        </main>
    );
};

export default Home;
