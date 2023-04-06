import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch} = useContext(GlobalContext);

  const handleTheme = () =>{
    dispatch({type: "toggle_theme"});
  }

  return (
    <nav className={state?.theme === "dark" && "dark"}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <span className="navLogo">
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
        <button onClick={handleTheme}> {state.theme === "dark" ? "☀️" : "🌙"}</button>
      </div>
    </nav>
  );
};

export default Navbar;
