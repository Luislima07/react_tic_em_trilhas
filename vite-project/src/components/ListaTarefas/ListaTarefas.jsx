import { useAppContext } from "../../hooks/useAppContext";
import { ListaTarefasItems } from "./ListaTarefasItems";

import style from "./ListaTarefas.module.css";

const ListaTarefas = () => {
    const { tarefas} = useAppContext();	
    return (
        <ul className={style.ListaTarefas}>
            {!tarefas.length && (
                <p>Não há tarefas atualizadas...</p>
            )}

            {tarefas.map((tarefa) => (
                <ListaTarefasItems key={tarefa.id} id={tarefa.id} nome={tarefa.nome} />
            ))}
        </ul>
    );
};

export { ListaTarefas };