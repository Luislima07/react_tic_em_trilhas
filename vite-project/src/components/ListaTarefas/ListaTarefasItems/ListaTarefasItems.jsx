import style from "./ListaTarefasItems.module.css";
import { Botao, TIPO_BOTAO } from "../../Botao";
import { CampoTexto } from "../../CampoTexto";

import { useState } from "react";
import { useAppContext } from "../../../hooks";

const ListaTarefasItems = (props) => {
    const { id, nome } = props;
    
    const [estaEditando, setEstaEditando] = useState(false);

    const { editarTarefa ,removerTarefa } = useAppContext();

    return (
        <li className={style.ListaTarefasItems}>
            {estaEditando && (
                <CampoTexto
                    defaultValue={nome}

                    onChange={event => editarTarefa(id, event.currentTarget.value)}
                    onBlur={() => setEstaEditando(false)} autoFocus />
            )}
            {!estaEditando && (
                <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
            )}
            <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO}
            onClick = {() => removerTarefa(id)}
            />
        </li>
    )
}

export { ListaTarefasItems };