import { useState, useEffect } from "react";

const Home = () =>{

    const [mealList, setMealList] = useState([]);

    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => res.json())
        .then((data) => {
            setMealList(data.meals[0]);
        })
        .catch((err) => console.log(err));
    }, [])

    console.log(mealList);

    return (
        <main className="bg-secondary py-4 px-4">
            <h1 className="text-4xl text-title">Arise Receitas</h1>
            <section>
                <h2 className="text-xl my-4">Se estiver sem ideia do que cozinhar, sugerimos a seguinte receita: </h2>
                <div>
                    <h3 className="text-subtitle text-xl">{mealList.strMeal}</h3>
                    <p className="text-center">Alguns dos Ingredientes: </p>
                    <ul>
                        <li className="text-center text-subtitle">{mealList.strIngredient1}</li>
                        <li className="text-center text-subtitle">{mealList.strIngredient2}</li>
                        <li className="text-center text-subtitle">{mealList.strIngredient3}</li>
                    </ul>
                    <img src={mealList.strMealThumb} alt="A img" className="rounded mt-5"/>
                    <div>
                        <p className="my-5">Receita completa: </p>
                        <div className="flex flex-row justify-evenly">
                            <a href={mealList.strSource} className="bg-button-color text-button rounded w-1/3 text-center hover:opacity-80">Texto</a>
                            <a href={mealList.strYoutube} className="bg-button-color text-button rounded w-1/3 text-center hover:opacity-80">Vídeo</a>
                        </div>
                    </div>
                </div>
                <p className="text-center mt-5">Você também pode voltar aqui nesta página sempre que quiser uma nova ideia de receita!</p>
            </section>
        </main>
    );
};

export default Home;
