import "./App.css";

function App() {
    return (
        <main className="container">
            <section className="task-card">
                <header className="task-header">
                    <div>
                        <h1>Task Manager</h1>
                        <p>Organize suas tarefas de forma simples.</p>
                    </div>
                </header>

                <form className="task-form">
                    <input
                        type="text"
                        placeholder="Digite uma tarefa..."
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
                    <li className="task-item">
                        <label>
                            <input type="checkbox" />
                            <span>Estudar React</span>
                        </label>

                        <div className="task-actions">
                            <button type="button">Editar</button>
                            <button type="button">Excluir</button>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default App;