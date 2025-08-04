import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        {}
        <li><Link to="/">Início</Link></li>
        <li><Link to="/aprender-logica">Aprender Lógica</Link></li>
        <li><Link to="/projetos">Projetos</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;