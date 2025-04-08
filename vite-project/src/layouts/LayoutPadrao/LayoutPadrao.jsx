import { Outlet } from "react-router-dom";
    
import { Cabecalho, Conteudo, Footer } from "../../components";


const LayoutPadrao = () => { 
    return (
        <>
        <div>
            <Cabecalho />
            <Conteudo>
                <Outlet />
            </Conteudo>
            <Footer />
        </div>    
        </>
    );
};

export { LayoutPadrao };