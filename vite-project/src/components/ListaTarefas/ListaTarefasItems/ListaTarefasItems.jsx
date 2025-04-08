import style from "./ListaTarefasItems.module.css";
import { Botao, TIPO_BOTAO } from "../../Botao";
import { useAppContext } from "../../../hooks";

const ListaTarefasItems = (props) => {
    const { id , nome } = props;

    const { removerTarefa }   = useAppContext();

    return (
        <li className={style.ListaTarefasItems}>
            { nome }
            <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO}
            onClick = {() => removerTarefa(id)}
            />
        </li>
    )
}

export { ListaTarefasItems };