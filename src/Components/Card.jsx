import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Card = ({ name, username, id }) => {
  const { dispatch } = useContext(GlobalContext);

  const handleClick = () => {
    dispatch({ type: "add_fav", payload: { name, username, id } });
  };

  return (
    <div className="card">
      <div className="cardImg"></div>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <div className="cardText">
        <p>
          <Link to={`/dentist/${id}`}>{name}</Link>
        </p>

        <p>{username}</p>

        <button onClick={handleClick} className="btnCard">
          Add Fav⭐
        </button>
      </div>
    </div>
  );
};

export default Card;
