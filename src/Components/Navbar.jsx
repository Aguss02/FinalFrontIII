import React from "react";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
      <nav>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

        <span>
          <Link to="/home">DH Odonto </Link>
        </span>

        <button>
          <Link to="/home">Home</Link>
        </button>
        <button>
          <Link to="/contact">Contact</Link>
        </button>
        <button>
          <Link to="/favs">Favs</Link>
        </button>

        <button>Change theme</button>
      </nav>
  );
};

export default Navbar;
