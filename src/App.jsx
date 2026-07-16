import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [tarefas, setTarefas] = useState(() => {
        const tarefasSalvas = localStorage.getItem("tarefas");

        if (tarefasSalvas) {
            return JSON.parse(tarefasSalvas);
        }

        return [];
    });
    const [textoTarefa, setTextoTarefa] = useState("");

    useEffect(() => {
        localStorage.setItem(
            "tarefas",
            JSON.stringify(tarefas)
        );
    }, [tarefas]);

    function adicionarTarefa(event) {
        event.preventDefault();

        if (textoTarefa.trim() === "") {
            alert("Digite uma tarefa.");
            return;
        }

        const novaTarefa = {
            id: Date.now(),
            texto: textoTarefa,
            concluida: false
        };

        setTarefas([...tarefas, novaTarefa]);
        setTextoTarefa("");
    }

    return (
        <main className="container">
            <section className="task-card">
                <header className="task-header">
                    <div>
                        <h1>Task Manager</h1>
                        <p>Organize suas tarefas de forma simples.</p>
                    </div>
                </header>

                <form className="task-form" onSubmit={adicionarTarefa}>
                    <input
                        type="text"
                        placeholder="Digite uma tarefa..."
                        value={textoTarefa}
                        onChange={(event) => setTextoTarefa(event.target.value)}
                    />

                    <button type="submit">
                        Adicionar
                    </button>
                </form>

                <section className="task-summary">
                    <div>
                        <strong>0</strong>
                        <span>Total</span>
                    </div>

                    <div>
                        <strong>0</strong>
                        <span>Pendentes</span>
                    </div>

                    <div>
                        <strong>0</strong>
                        <span>Concluídas</span>
                    </div>
                </section>

                <section className="task-filters">
                    <button type="button" className="ativo">
                        Todas
                    </button>

                    <button type="button">
                        Pendentes
                    </button>

                    <button type="button">
                        Concluídas
                    </button>
                </section>

                <ul className="task-list">
                    {tarefas.map((tarefa) => (
                        <li className="task-item" key={tarefa.id}>
                            <label>
                                <input type="checkbox" />
                                <span>{tarefa.texto}</span>
                            </label>

                            <div className="task-actions">
                                <button type="button">Editar</button>
                                <button type="button">Excluir</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default App;