import { useState } from "react";

export function MoneyFlow() {

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);
  const [lista, setLista] = useState<any[]>([]);

  function adicionar(event: any) {
    event.preventDefault();

    if (valor <= 0) {
      alert("Valor precisa ser maior que zero");
      return;
    }

    const novoItem = {
      descricao: descricao,
      valor: valor
    };

    setLista([...lista, novoItem]);

    setDescricao("");
    setValor(0);
  }

  // cálculo simples
  const saldoTotal = lista.reduce((total, item) => {
    return total + item.valor;
  }, 0);

  return (
    <div style={{ padding: 40 }}>
      <h2>MoneyFlow</h2>

      <h3>Saldo Total: {saldoTotal}</h3>

      <form onSubmit={adicionar}>
        <input
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição"
        />

        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
        />

        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item.descricao} - {item.valor}
          </li>
        ))}
      </ul>
    </div>
  );
}