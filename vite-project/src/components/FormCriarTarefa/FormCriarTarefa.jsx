import { CampoTexto, Botao } from "../../components";
import { useState } from "react"; 

import style from "./FormCriarTarefa.module.css";

const FormCriarTarefa = (props) => {
    const [ nomeTarefa, setnomeTarefa ] = useState ("");

    const { setTarefas } = props;

    const onChangeNomeTarefa = (event) => {
        setnomeTarefa(event.currentTarget.value);
    };

    const adicionarTarefa = () => { 
        event.preventDefault();

        if (!nomeTarefa) {
            return;
        }

        setTarefas(estadoAtual => { 
            const tarefa = {
                id: estadoAtual.length + 1,
                nome: nomeTarefa
            }
            return [...estadoAtual, tarefa];
        });

    };

    return (
        <form className={style.FormCriarTarefa} onSubmit={(adicionarTarefa)}>
            <CampoTexto value={nomeTarefa} onChange={(onChangeNomeTarefa)} />   
            <Botao texto="+" />
        </form>
    )
}

export { FormCriarTarefa };