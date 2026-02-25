import { useState } from "react";

export function ConnectHub() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [contatos, setContatos] = useState<any[]>([]);

  function adicionarContato(event: any) {
    event.preventDefault();

    if (!email.includes("@")) {
      alert("Email inválido");
      return;
    }

    const novoContato = {
      nome: nome,
      email: email
    };

    setContatos([...contatos, novoContato]);

    setNome("");
    setEmail("");
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>ConnectHub</h2>

      <form onSubmit={adicionarContato}>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <button type="submit">Cadastrar</button>
      </form>

      <ul>
        {contatos.map((c, index) => (
          <li key={index}>
            {c.nome} - {c.email}
          </li>
        ))}
      </ul>
    </div>
  );
}