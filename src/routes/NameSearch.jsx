import { useRef, useState } from "react";
import RecipeCard from "../components/RecipeCard/RecipeCard";

const NameSearch = () => {
    
    const [recipeFound, setRecipeFound] = useState("");
    const [isRecipeExists, setIsRecipeExists] = useState(true);

    const handleSearch = () => {
        setRecipeFound("");
        setIsRecipeExists(true);

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputRef.current.value}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.meals && data.meals.length > 0){
                    setRecipeFound(data.meals[0]);
                } else{
                    setIsRecipeExists(false);
                }
            })
            .catch((err) => console.log(err));
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            handleSearch();
        }
    }

    const inputRef = useRef();


    return (
        <main className="bg-white-card py-4 px-4">
            <h2 className="text-4xl text-subtitle mb-4">Busca de receitas</h2>
            <p className="text-2xl my-4">Digite o nome da receita que está procurando: </p>
            <div className="flex justify-between mb-4 md:px-20">
                <input className="w-full text-xl border-2 rounded border-amber-500 mr-2 focus:outline-none" type="search" name="recipe-name" id="recipe-name" onKeyDown={handleKeyDown} placeholder="Digite aqui o nome da receita..." ref={inputRef}/>
                <button type="button" onClick={handleSearch} className="bg-button-color text-button rounded text-center hover:opacity-80 text-lg w-1/3">Buscar</button>
            </div>
            {recipeFound && (
                <RecipeCard {...recipeFound}/>
            )}
            {!isRecipeExists && (
                <p>A receita não existe!</p>
            )}
        </main>
    );
};

export default NameSearch;
