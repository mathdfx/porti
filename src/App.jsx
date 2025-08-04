// src/App.jsx

// 1. Importamos as ferramentas do react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 2. Importamos nosso menu e nossas novas páginas
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import LearnLogicPage from './pages/LearnLogicPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';

function App() {
  return (
    // 3. O BrowserRouter envolve toda a aplicação para ativar as rotas
    <BrowserRouter>
      <Navbar /> {/* O Navbar fica aqui para aparecer em TODAS as páginas */}

      <main> {/* É uma boa prática colocar o conteúdo principal em uma tag <main> */}
        {/* 4. O Routes é a área onde o conteúdo das páginas vai mudar */}
        <Routes>
          {/* 5. Cada Route é uma regra: "quando a URL for X, mostre o componente Y" */}
          <Route path="/" element={<HomePage />} />
          <Route path="/aprender-logica" element={<LearnLogicPage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;