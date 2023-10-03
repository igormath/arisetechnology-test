import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="w-full h-full">
            <ul className="w-full h-full flex flex-row justify-evenly items-center py-2">
                <li className="w-2/12 h-full text-center text-primary bg-button-color hover:opacity-80 rounded md:text-2xl">
                    <Link to="/">Home</Link>
                </li>
                <li className="w-2/12 text-primary bg-button-color hover:opacity-80 rounded md:text-2xl text-center h-full">
                    <Link to="/search/name">Busca por nome</Link>
                </li>
                <li className="w-2/12 text-primary bg-button-color hover:opacity-80 rounded md:text-2xl text-center h-full">
                    <Link to="/search/firstletter">Busca por primeira letra</Link>
                </li>
                <li className="w-2/12 text-primary bg-button-color hover:opacity-80 rounded md:text-2xl text-center h-full">
                    <Link to="/search/ingredients">Busca por ingredientes</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
