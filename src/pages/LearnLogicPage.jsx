// src/pages/LearnLogicPage.jsx
import VariablesModule from '../logic-modules/VariablesModule'; // Importamos nosso módulo

function LearnLogicPage() {
  return (
    <div>
      <h1>Módulos de Lógica de Programação</h1>
      <hr />
      <VariablesModule /> {/* Usamos nosso novo componente aqui! */}
      {/* Futuramente, você adicionará outros módulos aqui */}
    </div>
  );
}

export default LearnLogicPage;