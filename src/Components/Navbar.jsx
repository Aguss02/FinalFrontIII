import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <span className={style.navLogo}>
        <Link to="/home">DH Odonto </Link>
      </span>

      <div>
        <span>
          <Link to="/home">Home</Link>
        </span>
        <span>
          <Link to="/contact">Contact</Link>
        </span>
        <span>
          <Link to="/favs">Favs</Link>
        </span>
        <button>Change theme</button>
      </div>
    </nav>
  );
};

export default Navbar;
