import React, { useContext } from "react";
import Card from "../Components/Card";
import style from "../Components/Card.module.css";
import { GlobalContext } from "../context/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(GlobalContext);
  const { favs } = state;

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={style.cardContainer}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      {favs.map((fav) =>(
        <Card
          key={fav.id}
          name={fav.name}
          username={fav.username}
          id={fav.id}
        />
      ))}
      
      </div>
    </>
  );
};

export default Favs;
