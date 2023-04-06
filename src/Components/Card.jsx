import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { GlobalContext } from "../context/GlobalContext";

const Card = ({ name, username, id}) => {

const {dispatch} = useContext(GlobalContext);

const handleClick = () => {
  dispatch({type: "add_fav", payload: {name, username, id}})
}
  return (
    <div className={style.card}>
      <div className={style.cardImg}></div>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <div className={style.cardText}>
        <p>
          <Link to={`/dentist/${id}`}>{name}</Link>
        </p>

        <p>{username}</p>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={handleClick} className="favButton">
          Add fav
        </button>
      </div>
    </div>
  );
};

export default Card;
