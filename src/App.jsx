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
    <BrowserRouter>
      <Navbar /> 
      <main> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aprender-logica" element={<LearnLogicPage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;