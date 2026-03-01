# 🛠️ Portal de Ferramentas RPV

Uma aplicação robusta de utilitários desenvolvida para consolidar fundamentos de **React**, **TypeScript** e **Metodologias Ágeis**. O portal oferece soluções para gestão de tarefas, contatos e controle financeiro em uma interface única e persistente.

---

## 🎯 Visão do Produto
O **Portal RPV** entrega valor ao usuário final ao centralizar ferramentas essenciais do dia a dia (To-Do, Agenda e Finanças) em um ambiente rápido e intuitivo. O diferencial está na **confiabilidade dos dados**, garantida por validações rigorosas com Zod e persistência local, eliminando a necessidade de login para uso imediato e eficiente.

---

## 🚀 Tecnologias Utilizadas
* **Core:** React (Vite) + TypeScript
* **Estilização:** TailwindCSS
* **Formulários:** React Hook Form
* **Validação:** Zod + @hookform/resolvers
* **Roteamento:** React Router Dom
* **Persistência:** LocalStorage API

---

## 📋 Planejamento Ágil (Sprint Log)

### 🏁 Milestones
1.  **M1 - Estrutura de Rotas e Home:** Setup do ambiente, navegação e layout base.
2.  **M2 - Finalização dos Módulos de Dados:** Implementação das regras de negócio, validações e persistência.

### 📝 User Stories (Módulo TaskMaster)
Abaixo estão as estórias de usuário que guiaram o desenvolvimento do módulo de tarefas:

#### 1. Criação de Tarefas
* **Story:** Como utilizador, eu quero adicionar tarefas com título e categoria para organizar meu dia.
* **Critérios de Aceitação:**
    * O título deve ter no mínimo 5 caracteres.
    * Categorias disponíveis: Trabalho, Pessoal, Urgente.
    * O dado deve ser salvo no `localStorage`.

#### 2. Visualização Dinâmica
* **Story:** Como utilizador, eu quero ver minha lista de tarefas atualizada para acompanhar minhas pendências.
* **Critérios de Aceitação:**
    * Renderização imediata após a adição.
    * Exibição clara da categoria por cores.
    * Layout responsivo para dispositivos móveis.

#### 3. Remoção de Itens
* **Story:** Como utilizador, eu quero excluir tarefas concluídas para manter minha lista organizada.
* **Critérios de Aceitação:**
    * Botão de exclusão funcional em cada item.
    * Remoção síncrona do estado do React e do Storage.
    * Atualização automática do saldo de tarefas.

#### 4. Persistência de Dados
* **Story:** Como utilizador, eu quero que meus dados não sumam ao atualizar a página.
* **Critérios de Aceitação:**
    * Uso de `useEffect` para carregar dados no mount.
    * Tratamento de dados nulos ou vazios no storage.
    * Tipagem completa dos objetos recuperados.

#### 5. Feedback de Validação
* **Story:** Como utilizador, eu quero saber por que não consigo salvar uma tarefa inválida.
* **Critérios de Aceitação:**
    * Mensagens de erro visíveis sob os campos.
    * Bloqueio de valores vazios ou curtos.
    * Estilização de erro nos inputs (bordas vermelhas).

---

## 📂 Estrutura de Pastas
```text
src/
├── components/   # Componentes reutilizáveis (Navbar, Button, Card)
├── pages/        # Home, TaskMaster, ConnectHub, MoneyFlow
├── schemas/      # Validações Zod para cada formulário
├── types/        # Interfaces e Types globais
└── App.tsx       # Configuração de rotas