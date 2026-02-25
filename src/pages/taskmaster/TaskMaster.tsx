import { useState } from "react";

export function TaskMaster() {

  // lista de tarefas
  const [tasks, setTasks] = useState<string[]>([]);

  // valor do input
  const [titulo, setTitulo] = useState("");

  function adicionarTarefa(event: any) {
    event.preventDefault();

    // validação simples
    if (titulo.length < 5) {
      alert("Título precisa ter pelo menos 5 caracteres");
      return;
    }

    // adiciona nova tarefa
    setTasks([...tasks, titulo]);

    // limpa campo
    setTitulo("");
  }

  function removerTarefa(index: number) {
    const novaLista = tasks.filter((_, i) => i !== index);
    setTasks(novaLista);
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>TaskMaster</h2>

      <form onSubmit={adicionarTarefa}>
        <input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Digite a tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removerTarefa(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}