import React, { useContext } from "react";
import Card from "../Components/Card";
import DataContext from "../context/DataContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const dentistData = useContext(DataContext);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {
          /* Aqui deberias renderizar las cards */
          dentistData &&
            dentistData.map((dentist) => (
              <Card
                key={dentist.id}
                name={dentist.name}
                username={dentist.username}
                id={dentist.id}
              />
            ))
        }
      </div>
    </main>
  );
};

export default Home;
