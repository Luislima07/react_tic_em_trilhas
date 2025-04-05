import { CampoTexto, Botao, TIPO_BOTAO } from "../../components";
import style from "./FormCriarTarefa.module.css";

const FormCriarTarefa = () => {
    return (
        <form className={style.FormCriarTarefa}>
            <CampoTexto />   
            <Botao texto="+" tipo={TIPO_BOTAO} />
        </form>
    )
}

export { FormCriarTarefa };