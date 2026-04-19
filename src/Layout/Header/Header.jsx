import { useRef } from "react";
import { Link } from "react-scroll";
import "./Header.css";
import logo from "../../assets/images/header/logo.png";

export default function Header() {
  const burgerRef = useRef();

  const closeMenu = () => {
    if (burgerRef.current) {
      burgerRef.current.checked = false;
    }
  };

  return (
    <header className="main-header">

      <div className="header-container">


      {/* LOGO */}
 
        <a className="logo-container" href="#inicio">
          <img src={logo} alt="Logo" className="logo" />
        </a>
    


      {/* MENU HAMBURGUESA */}
      <input
        type="checkbox"
        id="burger"
        className="input-burger"
        ref={burgerRef}
        />
      <label htmlFor="burger" className="burger-container">
        <span className="burger"></span>
      </label>


      {/* OVERLAY para cerrar menú haciendo clic fuera */}
      <div className="nav-overlay" onClick={closeMenu}></div>
      

      {/* NAVEGACIÓN */}
      <nav className="main-nav">
        <ul className="nav-list">
          {["inicio", "servicios", "sobre-nosotros", "reseñas", "contacto"].map(
            (item) => (
              <li className="nav-item" key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  className="nav-link"
                  onClick={closeMenu}
                  >
                   {item
                    .replace("-", " ")
                    .replace(/^\w/, (l) => l.toUpperCase())}




                </Link>
              </li>
            )
          )}
        </ul>
      </nav>


    </div>
    </header>
  );
}
