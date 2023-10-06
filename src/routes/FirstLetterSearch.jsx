import { useRef, useState } from "react";
import RecipeCard from "../components/RecipeCard/RecipeCard";

const FirstLetterSearch = () =>{
    let letterList = [];

    const [mealsByLetter, setMealsByLetter] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState([]);

    const selectRef = useRef(null);

    for (let i = 65; i <= 90; i++){
        letterList.push(String.fromCharCode(i));
    }

    const handleSelectChange = () => {
        setSelectedMeal([]);
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${selectRef.current.value}`)
        .then((res) => res.json())
        .then((data) => setMealsByLetter(data.meals))
        .catch((err) => console.log(err));
    }

    const handleSelectedMeal = (mealId) =>{
        setSelectedMeal([]);
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then((res) => res.json())
        .then((data) => setSelectedMeal(data.meals[0]))
        .catch((err) => console.log(err));
    }

    return (
        <main className="bg-white-card py-4 px-4">
            <h2 className="text-4xl text-subtitle mb-4">Busca por letra</h2>
            <div className="flex justify-evenly md:justify-center">
                <p className="text-2xl md:mx-3 md:text-xl">Selecione uma letra: </p>
                <select className="text-xl border-2 rounded border-amber-500 md:mx-3" name="alphabet" id="alphabet" onChange={handleSelectChange} ref={selectRef} defaultValue="">
                    {letterList.map((letter, index) => (
                        <option value={letter} key={index}>
                            {letter}
                        </option>
                    ))}
                </select>
            </div>

            <p className="my-4 text-subtitle md:text-center text-xl">Lista de receitas encontradas: </p>
            <ul className="mb-4 md:grid md:grid-cols-3 md:gap-2">
                {mealsByLetter.map((meal, index) => (
                    <li key={index} className="text-center hover:opacity-80 text-xl my-4 md:my-1 pl-2 rounded bg-secondary">
                        <button className="md:text-xl" onClick={() => handleSelectedMeal(meal.idMeal)} type="button">
                            {meal.strMeal}
                        </button>
                    </li>
                ))}
            </ul>
                {(Object.keys(selectedMeal).length > 0) && (
                    <RecipeCard {...selectedMeal}/>
                )}
        </main>
    );
};

export default FirstLetterSearch;
