import { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <header className="bg-primary">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <h1 className="text-title text-4xl font-bold">Arise Receitas</h1>
                    </div>
                    {/* Navlinks */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center justify-evenly">
                            <li className="text-center"><Link to="/" className="text-primary transition-all duration-500 hover:bg-secondary hover:text-subtitle px-3 py-2 rounded-md text-md font-medium">Início</Link></li>
                            <li className="text-center"><Link to="/search/name" className="text-primary transition-all duration-500 hover:bg-secondary hover:text-subtitle px-3 py-2 rounded-md text-md font-medium">Pesquisar Receitas</Link></li>
                            <li className="text-center"><Link to="/search/firstletter" className="text-primary transition-all duration-500 hover:bg-secondary hover:text-subtitle px-3 py-2 rounded-md text-md font-medium">Receitas por Letra</Link></li>
                            <li className="text-center"><Link to="/search/ingredients" className="text-primary transition-all duration-500 hover:bg-secondary hover:text-subtitle px-3 py-2 rounded-md text-md font-medium text-center">Receitas por Ingredientes</Link></li>
                        </ul>
                    </nav>
                    {/* hamburguer button */}
                    <div className="-mr-2 flex md:hidden">
                        <button type="button" onClick={handleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-title hover:text-button hover:bg-button-color">
                            <span className="sr-only">Open main menu</span>
                            {isOpen === true ? <FaTimes/> : <FaBars/>}
                        </button>
                    </div>
                </div>
            </div>
            {/* mobile-menu */}
            {isOpen ? (
                <nav className="md:hidden">
                    <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <li className="text-center"><Link to="/" className="text-primary hover:bg-secondary hover:text-subtitle block px-3 py-2 rounded-md text-base font-medium">Início</Link></li>
                        <li className="text-center"><Link to="/search/name" className="text-primary hover:bg-secondary hover:text-subtitle block px-3 py-2 rounded-md text-base font-medium">Pesquisar Receitas</Link></li>
                        <li className="text-center"><Link to="/search/firstletter" className="text-primary hover:bg-secondary hover:text-subtitle block px-3 py-2 rounded-md text-base font-medium">Receitas por Letra</Link></li>
                        <li className="text-center"><Link to="/search/ingredients" className="text-primary hover:bg-secondary hover:text-subtitle block px-3 py-2 rounded-md text-base font-medium">Receitas por Ingredientes</Link></li>
                    </ul>
                </nav>
            ): null}
        </header>
    );
};

export default Navbar;
