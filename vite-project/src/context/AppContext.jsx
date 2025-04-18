import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const { children } = props;

    const [tarefas, setTarefas] = useState([]);

    const [loadingCarregar, setLoandingCarregar] = useState(false);
    const [loadingCriar, setLoandingCriar] = useState(false);
    const [loadingEditar, setLoandingEditar] = useState(null);
    const [loadingDeletar, setLoandingDeletar] = useState(null);
    
    const carregarTarefas = async () => {
        setLoandingCarregar(true)

        const { data = [ ]} = await api.get('/tarefas');

        setTarefas([
            ...data,
        ])
        setLoandingCarregar(false)
    };  

    const adicionarTarefa = async (nomeTarefa) => {
        setLoandingCriar(true);
        const { data: tarefa } = await api.post('/tarefas', {
            nome: nomeTarefa, 
        });
        
        setTarefas(estadoAtual => {
            return [...estadoAtual, tarefa];
        });
        setLoandingCriar(false);
    };

    const removerTarefa = async (idTarefa) => {
        setLoandingDeletar(idTarefa);

        await api.delete(`tarefas/${idTarefa}`);

        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.filter(tarefa => tarefa.id != idTarefa);

            return [
                ...tarefasAtualizadas
            ];
        });
        setLoandingDeletar(null);
    };

    const editarTarefa = async (idTarefa, nomeTarefa) => {
        setLoandingEditar(idTarefa);

        const { data: tarefasAtualizada } = await api.put(`tarefas/${idTarefa}`, {
            nome: nomeTarefa,
        });

        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.map(tarefa => 
                tarefa.id === idTarefa ? { ...tarefa, nome: tarefasAtualizada.nome } : tarefa
            );
            return [...tarefasAtualizadas];
        });
        setLoandingEditar(null);
    };
        
    useEffect(() => { 
        carregarTarefas();
    }, []);
    
    return (
        <AppContext.Provider value={{
            tarefas,
            adicionarTarefa,
            removerTarefa,
            editarTarefa,
            loadingCarregar,
            loadingCriar,
            loadingEditar,
            loadingDeletar,
        }}>
            {children}
        </AppContext.Provider>
    )
}
