import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/search/name">Busca por nome</Link>
            <Link to="/search/firstletter">Busca por primeira letra</Link>
            <Link to="/search/ingredients">Busca por ingredientes</Link>
            <Link to="/bookmarks">Receitas favoritas</Link>
        </nav>
    );
};

export default Navbar;
