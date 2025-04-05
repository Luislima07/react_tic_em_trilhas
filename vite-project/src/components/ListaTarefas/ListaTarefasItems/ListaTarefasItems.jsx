import style from "./ListaTarefasItems.module.css";
import { Botao, TIPO_BOTAO } from "../../Botao";

const ListaTarefasItems = (props) => {
    const { nome } = props;
    return (
        <li className={style.ListaTarefasItems}>
            { nome }
            <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO} />
        </li>
    )
}

export { ListaTarefasItems };