import { createContext, useState } from 'react';

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const { children } = props;



    const [tarefas, setTarefas] = useState ([
        { id: 1, nome: "Tarefa 1" },
        { id: 2, nome: "Tarefa 2" },
        { id: 3, nome: "Tarefa 3" },
    ]);

    const adicionarTarefa = (nomeTarefa) => {
        setTarefas(estadoAtual => {
            const tarefa = {
                id: estadoAtual.length + 1,
                nome: nomeTarefa
            }
            return [...estadoAtual, tarefa];
        });
    };

    const removerTarefa = (idTarefa) => {
        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.filter(tarefa => tarefa.id != idTarefa);

            return [
                ...tarefasAtualizadas
            ];
        })
    }

    const editarTarefa = (idTarefa, nomeTarefa) => {
        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.map(tarefa => 
                tarefa.id === idTarefa ? { ...tarefa, nome: nomeTarefa } : tarefa
            );
            return [...tarefasAtualizadas];
        });
    };
        

    
    return (
        <AppContext.Provider value={{
            tarefas,
            adicionarTarefa,
            removerTarefa,
            editarTarefa,
        }}>
            {children}
        </AppContext.Provider>
    )
}
