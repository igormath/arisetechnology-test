import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const IngredientsSearch = () =>{

    const [ingredientsList, setIngredientsList] = useState([]);
    const [filteredIngredientsList, setFilteredIngredientsList] = useState(ingredientsList);

    const inputRef = useRef();

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
            .then((res) => res.json())
            .then((data) => {
                setIngredientsList(data.meals);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleFilter = () => {

        setFilteredIngredientsList(ingredientsList.filter((ingredient) => ingredient.strIngredient.toLowerCase().includes(inputRef.current.value.toLowerCase())))    
    };

    return (
        <main className="bg-white-card py-4 px-4">
            <h2 className="text-4xl text-subtitle mb-4 w-10/12">Busca por ingrediente</h2>
            <input className="md:mb-4 text-xl w-full border-2 rounded border-amber-500 mr-2 focus:outline-none" type="search" name="ingredient" id="ingredient" onChange={handleFilter} ref={inputRef} placeholder="Digite aqui o ingrediente..."/>
            <ul className="md:grid md:grid-cols-2 md:gap-2">
                {filteredIngredientsList.map((ingredient) => (
                    <Link to={`/search/ingredients/${ingredient.strIngredient}`} key={ingredient.idIngredient}><li className="hover:opacity-80 text-xl my-2 md:my-1 pl-2 rounded bg-secondary">{ingredient.strIngredient}</li></Link>
                ))}
            </ul>
        </main>
    );
};

export default IngredientsSearch;
