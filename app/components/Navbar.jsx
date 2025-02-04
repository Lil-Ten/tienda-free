
import { Link } from "@remix-run/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faMale,
  faFemale,
  faChild,
  faGlasses,
  faShoePrints,
  faLayerGroup,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  // Estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 text-white">
      {/* Menú para pantallas grandes */}
      <ul className="hidden md:flex justify-around">
        <li>
          <Link to="/" className="hover:text-blue-300 transition duration-300">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/hombres" className="hover:text-blue-300 transition duration-300">
            <FontAwesomeIcon icon={faMale} className="mr-2" />
            Hombres
          </Link>
        </li>
        <li>
          <Link to="/damas" className="hover:text-blue-300 transition duration-300">
            <FontAwesomeIcon icon={faFemale} className="mr-2" />
            Damas
          </Link>
        </li>
        <li>
          <Link to="/ninos_y_ninas" className="hover:text-blue-300 transition duration-300">
            <FontAwesomeIcon icon={faChild} className="mr-2" />
            Niños y Niñas
          </Link>
        </li>
        <li>
          <Link to="/accesorios" className="hover:text-blue-300 transition duration-300">
            <FontAwesomeIcon icon={faGlasses} className="mr-2" />
            Accesorios
          </Link>
        </li>
        <li>
          <Link to="/calzado" className="hover:text-blue-300 transition duration-300">
            <FontAwesomeIcon icon={faShoePrints} className="mr-2" />
            Calzado
          </Link>
        </li>
        <li>
          <Link to="/colecciones" className="hover:text-blue-300 transition duration-300">
            <FontAwesomeIcon icon={faLayerGroup} className="mr-2" />
            Colecciones
          </Link>
        </li>
        <li>
          <Link to="/contacto" className="hover:text-blue-300 transition duration-300">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Contacto
          </Link>
        </li>
      </ul>

      {/* Menú para pantallas pequeñas (hamburguesa) */}
      <div className="md:hidden flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Tienda Online
        </Link>
        {/* Botón de hamburguesa */}
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menú desplegable para móviles */}
      {isMenuOpen && (
        <ul className="md:hidden mt-4 space-y-2">
          <li>
            <Link to="/" className="block hover:text-blue-300 transition duration-300" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/hombres" className="block hover:text-blue-300 transition duration-300" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faMale} className="mr-2" />
              Hombres
            </Link>
          </li>
          <li>
            <Link to="/damas" className="block hover:text-blue-300 transition duration-300" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faFemale} className="mr-2" />
              Damas
            </Link>
          </li>
          <li>
            <Link to="/ninos_y_ninas" className="block hover:text-blue-300 transition duration-300" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faChild} className="mr-2" />
              Niños y Niñas
            </Link>
          </li>
          <li>
            <Link to="/accesorios" className="block hover:text-blue-300 transition duration-300" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faGlasses} className="mr-2" />
              Accesorios
            </Link>
          </li>
          <li>
            <Link to="/calzado" className="block hover:text-blue-300 transition duration-300" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faShoePrints} className="mr-2" />
              Calzado
            </Link>
          </li>
          <li>
            <Link to="/colecciones" className="block hover:text-blue-300 transition duration-300" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faLayerGroup} className="mr-2" />
              Colecciones
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="block hover:text-blue-300 transition duration-300" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Contacto
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;