import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <main className="bg-white-card py-4 px-4">
            <h1 className="text-4xl text-center">404: Página não encontrada!</h1>
            <Link className="text-2xl block mx-auto my-10 bg-button-color text-button rounded text-center hover:opacity-80 w-2/3 md:w-2/12">Voltar para Home</Link>
            
        </main>
    );
};

export default ErrorPage;
