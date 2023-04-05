import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [dentist, setdentist] = useState([]);
  const params = useParams();

  const fetchDentist = async () => {
    //Deberas completar este fetch con el parametro correspondiente
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const data = await response.json();
    setdentist(data);
  };

  console.log(dentist, "detail");

  useEffect(() => {
    fetchDentist();
  }, []);

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Detail;
