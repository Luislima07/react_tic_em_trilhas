import { useAppContext } from "../../hooks/useAppContext";
import { ListaTarefasItems } from "./ListaTarefasItems";
import { Loading } from "../Loading/Loading";

import style from "./ListaTarefas.module.css";

const ListaTarefas = () => {
    const { tarefas, loadingCarregar} = useAppContext();	
    return (
        <ul className={style.ListaTarefas}>
            {loadingCarregar && (
                <p>
                    Carregando...
                    <Loading />
                </p>
            )}
            
            {!loadingCarregar && !tarefas.length && (
                <p>Não há tarefas atualizadas...</p>
            )}

            {tarefas.map((tarefa) => (
                <ListaTarefasItems key={tarefa.id} id={tarefa.id} nome={tarefa.nome} />
            ))}
        </ul>
    );
};

export { ListaTarefas };