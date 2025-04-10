import { CampoTexto, Botao, Loading } from "../../components";
import { useState } from "react";
import { useAppContext } from "../../hooks";

import style from "./FormCriarTarefa.module.css";

const FormCriarTarefa = () => {
    const { adicionarTarefa, loadingCriar } = useAppContext(); 

    const [ nomeTarefa, setnomeTarefa ] = useState ('');


    const onChangeNomeTarefa = (event) => {
        setnomeTarefa(event.currentTarget.value);
    };

    const submetForm = () => { 
        event.preventDefault();

        if (!nomeTarefa) {
            return;
        }

        adicionarTarefa(nomeTarefa);

    };

    return (
        <form className={style.FormCriarTarefa} onSubmit={(submetForm)}>
            <CampoTexto value={nomeTarefa} onChange={(onChangeNomeTarefa)} />   
            <Botao texto={loadingCriar ? <Loading /> : '+'} />
        </form>
    )
}

export { FormCriarTarefa };