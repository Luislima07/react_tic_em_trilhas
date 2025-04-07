import { Route, Routes } from "react-router-dom";

import { Inicial, SobreNos, Erro } from "./pages" 
import { LayoutPadrao } from "./layouts";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutPadrao />}>
                <Route path="/" element={<Inicial />} />
                <Route path="/sobre-nos" element={<SobreNos />} />
                <Route path="*" element={<Erro />} />
            </Route>
        </Routes>
    );
};

export { Router };